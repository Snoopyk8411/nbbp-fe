import type { NextApiRequest, NextApiResponse } from 'next';
import { ICatalogItem, ICatalogNode, ICatalogTree } from 'tools/types/api-catalog-items-types';
import { CATALOG_ITEMS } from 'mock-data/catalog-data';

const getNodeFromItem = (item: ICatalogItem): ICatalogNode => {
  const { id, name, url, accent, svg } = { ...item };
  return { id, name, url, accent, svg, order: Number(id) };
};

const getChildren = (group: string): string[] => {
  return CATALOG_ITEMS.filter(item => item.groups.includes(group)).map(item => item.name);
};

const getTree = (group: string, depth: number, tree?: ICatalogTree): ICatalogTree => {
  if (!depth && tree) return tree;
  const root = CATALOG_ITEMS.find(item => item.name === group);
  return {
    node: getNodeFromItem(root!),
    children: getChildren(group).map(group => getTree(group, depth - 1, tree)),
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<ICatalogTree>): void => {
  const { category, depth } = req.query;
  if (typeof category === 'string') {
    const depthNum = Number(depth?.toString()) || 1;
    const tree = getTree(category, depthNum);
    res.status(200).json(tree);
  }
  res.status(400).end();
};

export default handler;
