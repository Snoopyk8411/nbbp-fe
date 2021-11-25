// Catalog item (link) appearance
export enum Appearance {
  PLAIN, // default styles
  ACCENT, // color accent applied
  HIGHLIGHT, // highlighted
}

export interface ICatalogItem {
  id: string;
  name: string;
  url: string;
  groups: string[];
  appearance: Appearance;
  svg?: string;
}

export type ICatalogNode = Omit<ICatalogItem, 'groups'> & { order: number };

export interface ICatalogTree {
  node: ICatalogNode;
  children: ICatalogTree[];
}

export enum Errors {
  WRONG_TYPE = 'Category type should be string',
  NOT_FOUND = 'Category not found',
}
