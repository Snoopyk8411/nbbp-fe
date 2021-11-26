import { CATALOG_ITEMS } from 'mock-data/catalog-data';
import { Appearance, ICatalogItem } from 'tools/types/api-catalog-items-types';
import { getChildren, getNodeFromItem, getTree } from './catalog';

describe('getNodeFromItem:', () => {
  it('should translate item into node', () => {
    const item: ICatalogItem = {
      id: '0',
      name: 'category',
      groups: [],
      url: '',
      appearance: Appearance.PLAIN,
    };
    const node = getNodeFromItem(item);
    expect(typeof node).toBe('object');
    expect(node).toEqual({
      id: '0',
      name: 'category',
      url: '',
      appearance: Appearance.PLAIN,
      order: 0,
    });
  });
});

describe('getChildren:', () => {
  it('should get children categories by parent name', () => {
    expect(getChildren('Бакалея')).toEqual(['Макароны, крупы, бобовые', 'Мюсли, сухие завтраки и обеды, каши']);
  });
});

describe('getTree:', () => {
  it('should get valid tree', () => {
    const group = 'Бакалея';
    const tree = getTree(group, 1);
    const children = CATALOG_ITEMS.filter(item => item.groups.includes(group)).map(item => item.name);
    expect(tree.node.name).toBe(group);
    expect(tree.children.every(child => children.includes(child.node.name))).toBeTruthy();
  });
});
