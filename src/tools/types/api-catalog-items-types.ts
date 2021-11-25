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
  accent: Appearance;
  svg?: string;
}

export type ICatalogNode = Omit<ICatalogItem, 'groups'> & { order: number };

export interface ICatalogTree {
  node: ICatalogNode;
  children: ICatalogTree[];
}
