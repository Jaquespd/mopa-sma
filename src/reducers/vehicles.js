// vehicles Reducer

const vehiclesReducerDefaultState = [];

export default (state = vehiclesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return [
        ...state,
        action.vehicle
      ];
    case 'REMOVE_VEHICLE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_VEHICLE':
      return state.map((vehicle) => {
        if (vehicle.id === action.id) {
          return {
            ...vehicle,
            ...action.updates
          };
        } else {
          return vehicle;
        };
      });
    case 'SET_VEHICLES':
      return action.vehicles;
    default:
      return state;
  }
};
