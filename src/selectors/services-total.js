export default (routes) => {
  return routes
      .map((route) => parseInt(route.numServicesOpen))
      .reduce((sum, value) => sum + value, 0);
};
