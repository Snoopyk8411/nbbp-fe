/**
 * Usage:
 * interface PageData {
 *  pageType: PageType;
 *  pageId?: string;
 *  id?: string;
 * }
 * and we need or 'pageId' or 'id', and the second one is must be 'undefined' then we use it like so:
 *
 * type AnyPage = RequireOnlyOne<PageData, "id" | "pageId">;
 */

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
