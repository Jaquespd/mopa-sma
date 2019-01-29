import moment from 'moment';

// Vehicles Filters Reducer

const vehiclesFiltersReducerDefaultState = {
  text: '',
  sortBy: 'name',
  showState: 'active'
};

export default (state = vehiclesFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_SHOW_ACTIVE_FILTER':
      return {
        ...state,
        showState: 'active'
      };
    case 'SET_SHOW_NOT_ACTIVE_FILTER':
      return {
        ...state,
        showState: 'notActive'
      };
    case 'SET_SHOW_BOTH_FILTER':
      return {
        ...state,
        showState: 'both'
      };
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    default:
      return state;
  }
};
