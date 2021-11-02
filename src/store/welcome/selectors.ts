import { RootState } from '../reducers';

export const isLoadingSelector = (state: RootState): boolean => state.welcomePage.isLoading;
export const errorSelector = (state: RootState): Error | undefined => state.welcomePage.error;
export const counterSelector = (state: RootState): number => state.welcomePage.counter;
