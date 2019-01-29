export default (routes) => {
  return routes
      .map((route) => route.vehicles.length)
      .reduce((sum, value) => sum + value, 0);
};
