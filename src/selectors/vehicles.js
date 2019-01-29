import moment from 'moment';

// Get visible vehicles

export default (vehicles, { text, sortBy, showState }) => {
  return vehicles.filter((vehicle) => {
    const textMatch = vehicle.name.toLowerCase().includes(text.toLowerCase());
    const stateMatch = (showState, vehicle) => {
      if ( showState === 'both' ) {
        return true;
      } else if ( showState === 'active' ) {
        return vehicle.isActive;
      } else if ( showState === 'notActive' ) {
        return !vehicle.isActive;
      }
    }
    
    return textMatch && stateMatch(showState, vehicle);
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? -1 : 1;
    } else if (sortBy === 'name') {
      return a.name < b.name ? -1 : 1;
    }
  });
};
