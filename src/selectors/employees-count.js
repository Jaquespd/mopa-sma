export default (routes) => {
  return routes
      .map((route) => route.employees.length)
      .reduce((sum, value) => sum + value, 0);
};
