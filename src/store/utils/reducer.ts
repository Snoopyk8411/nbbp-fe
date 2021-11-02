import { IAction } from '../common/interfaces';

export default (initialState = {}, actionHandlers: any = {}): any =>
  (state: object = initialState, action: IAction): object => {
    const reduceFn = actionHandlers[action.type];

    if (!reduceFn) {
      return state;
    }

    return reduceFn(state, action.payload);
  };
