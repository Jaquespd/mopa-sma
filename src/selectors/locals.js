import moment from 'moment';

// Get visible locals

export default (locals, { text, sortBy, showState }) => {
  return locals.filter((local) => {
    const textMatch = local.name.toLowerCase().includes(text.toLowerCase());
    const stateMatch = (showState, local) => {
      if ( showState === 'both' ) {
        return true;
      } else if ( showState === 'active' ) {
        return local.isActive;
      } else if ( showState === 'notActive' ) {
        return !local.isActive;
      }
    }
    
    return textMatch && stateMatch(showState, local);
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (sortBy === 'name') {
      return a.name < b.name ? -1 : 1;
    }
  });
};
