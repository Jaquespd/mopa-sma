// locals Reducer

const localsReducerDefaultState = [];

export default (state = localsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LOCAL':
      return [
        ...state,
        action.local
      ];
    case 'REMOVE_LOCAL':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LOCAL':
      return state.map((local) => {
        if (local.id === action.id) {
          return {
            ...local,
            ...action.updates
          };
        } else {
          return local;
        };
      });
    case 'SET_LOCALS':
      return action.locals;
    default:
      return state;
  }
};
