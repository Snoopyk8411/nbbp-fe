import type { NextApiRequest, NextApiResponse } from 'next';
import { Errors, ICatalogItem, ICatalogNode, ICatalogTree } from 'tools/types/api-catalog-items-types';
import { CATALOG_ITEMS } from 'mock-data/catalog-data';

export const getNodeFromItem = (item: ICatalogItem): ICatalogNode => {
  const { id, name, url, appearance, svgName } = { ...item };
  return { id, name, url, appearance, svgName, order: Number(id) };
};

export const getChildren = (group: string): string[] => {
  return CATALOG_ITEMS.filter(item => item.groups.includes(group)).map(item => item.name);
};

export const getTree = (group: string, depth: number, tree?: ICatalogTree): ICatalogTree => {
  if (!depth && tree) return tree;
  const root = CATALOG_ITEMS.find(item => item.name === group);
  if (!root) throw Error;
  return {
    node: getNodeFromItem(root),
    children: depth ? getChildren(group).map(group => getTree(group, depth - 1, tree)) : [],
  };
};

const getCategoriesHandler = (req: NextApiRequest, res: NextApiResponse<ICatalogTree>): void => {
  const { category, depth } = req.query;
  if (typeof category === 'string') {
    const depthNum = Number(depth?.toString()) || Infinity;
    try {
      const tree = getTree(category, depthNum);
      res.status(200).json(tree);
    } catch (err) {
      res.status(404).end(Errors.NOT_FOUND);
    }
  }
  res.status(400).end(Errors.WRONG_TYPE);
};

export default getCategoriesHandler;
