// routes Reducer

const routesReducerDefaultState = [];

export default (state = routesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      return [
        ...state,
        action.route
      ];
    case 'REMOVE_ROUTE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ROUTE':
      return state.map((route) => {
        if (route.id === action.id) {
          return {
            ...route,
            ...action.updates
          };
        } else {
          return route;
        };
      });
    case 'SET_ROUTES':
      return action.routes;
    default:
      return state;
  }
};
