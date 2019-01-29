// Employees Reducer

const employeesReducerDefaultState = [];

export default (state = employeesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
        ...state,
        action.employee
      ];
    case 'REMOVE_EMPLOYEE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EMPLOYEE':
      return state.map((employee) => {
        if (employee.id === action.id) {
          return {
            ...employee,
            ...action.updates
          };
        } else {
          return employee;
        };
      });
    case 'SET_EMPLOYEES':
      return action.employees;
    default:
      return state;
  }
};
