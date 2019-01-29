import moment from 'moment';

// Routes Filters Reducer

const routesFiltersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('day'),
  endDate: moment().endOf('day')
};

export default (state = routesFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
