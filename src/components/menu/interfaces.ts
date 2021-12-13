import { Appearance } from 'tools/types/api-catalog-items-types';
import { SubmenuOpenActionType, SubmenuPosition } from './constants';

export interface IMenuProps {
  items: IMenuItemModel[];
  submenuPosition: SubmenuPosition;
}

export interface IMenuLevelProps {
  items: IMenuItemModel[];
  parentItem?: IMenuItemModel;
  submenuOpenActionType: SubmenuOpenActionType;
  submenuPosition: SubmenuPosition;
  containerElement: HTMLElement | null;
  onClose?: () => void;
}

export type MenuItemIdType = string | number;

export interface IMenuItemModel {
  id: MenuItemIdType;
  name: string;
  order: number;
  url: string;
  appearance: Appearance | String;
  children?: IMenuItemModel[];
  svgName: string | undefined;
}
