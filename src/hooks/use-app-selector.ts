import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'store/reducers';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
