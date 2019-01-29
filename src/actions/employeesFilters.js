// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_SHOW_ACTIVE_FILTER
export const setShowActiveFilter = () => ({
  type: 'SET_SHOW_ACTIVE_FILTER'
});

// SET_SHOW_NOT_ACTIVE_FILTER
export const setShowNotActiveFilter = () => ({
  type: 'SET_SHOW_NOT_ACTIVE_FILTER'
});

// SET_SHOW_BOTH_FILTER
export const setShowBothFilter = () => ({
  type: 'SET_SHOW_BOTH_FILTER'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_NAME
export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

// SORT_BY_OFFICE
export const sortByOffice = () => ({
  type: 'SORT_BY_OFFICE'
});
