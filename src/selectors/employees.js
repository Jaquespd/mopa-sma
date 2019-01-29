import moment from 'moment';

// Get visible employees

export default (employees, { text, sortBy, showState }) => {
  return employees.filter((employee) => {
    const textMatch = employee.name.toLowerCase().includes(text.toLowerCase());
    const stateMatch = (showState, employee) => {
      if ( showState === 'both' ) {
        return true;
      } else if ( showState === 'active' ) {
        return employee.isActive;
      } else if ( showState === 'notActive' ) {
        return !employee.isActive;
      }
    }
    
    return textMatch && stateMatch(showState, employee);
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (sortBy === 'name') {
      return a.name < b.name ? -1 : 1;
    } else if (sortBy === 'office') {
      return a.office < b.office ? -1 : 1;
    }
  });
};
