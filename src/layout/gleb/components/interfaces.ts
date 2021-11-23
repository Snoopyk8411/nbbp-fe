import { AnyAction, Action, Store, Middleware } from 'redux';

export interface IMockStore<S = any, A extends Action = AnyAction> extends Store<S, A> {
  getActions(): any[];
  clearActions(): void;
}

export type MockStoreEnhanced<S = {}, DispatchExts = {}> = IMockStore<S> & { dispatch: DispatchExts };

export type MockStoreCreator<S = {}, DispatchExts = {}> = (
  state?: S | MockGetState<S>,
) => MockStoreEnhanced<S, DispatchExts>;

export type MockGetState<S = {}> = (actions: AnyAction[]) => S;

/**
 * Create Mock Store returns a function that will create a mock store from a state
 * with the same set of set of middleware applied.
 *
 * @param middlewares The list of middleware to be applied.
 * @template S The type of state to be held by the store.
 * @template DispatchExts The additional Dispatch signatures for the middlewares applied.
 */
declare function createMockStore<S, DispatchExts = {}>(middlewares?: Middleware[]): MockStoreCreator<S, DispatchExts>;

export default createMockStore;

export interface IMockData {
  mediaPage: {
    media: {
      copyright: string;
      date: string;
      explanation: string;
      hdurl: string;
      media_type: string;
      service_version: string;
      title: string;
      url: string;
    };
    error: Error | null;
    selectedDay: any;
    isLoading: boolean;
  };
}
