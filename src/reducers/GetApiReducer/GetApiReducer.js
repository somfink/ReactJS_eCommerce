import { ACTION_TYPES } from "./GetActionTypes";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const GetApiReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case ACTION_TYPES.FETCH_SUCCESS:
      console.log(state.post);
      return {
        ...state,
        loading: false,
        post: action.payload,
      };

    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
