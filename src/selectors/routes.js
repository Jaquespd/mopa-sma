import moment from 'moment';

// Get visible routes

export default (routes, { text, sortBy, startDate, endDate }) => {
  return routes.filter((route) => {
    const textMatch = (employees) => {
      const length = employees.length;
      let match = false;
      for (let i = 0; i < length; i++) {
        if (employees[i].toLowerCase().includes(text.toLowerCase())) {
          match = true;
        }
      }
      return match;
    };
    // const textMatch = route.employees[0].toLowerCase().includes(text.toLowerCase());
    const createdAtMoment = moment(route.dateService);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    
    return (textMatch(route.employees) || textMatch(route.locals) || textMatch(route.vehicles)) && startDateMatch && endDateMatch;
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? -1 : 1;
    }
  });
};
