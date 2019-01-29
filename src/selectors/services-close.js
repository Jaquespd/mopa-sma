export default (routes) => {
  return routes
      .map((route) => parseInt(route.numServicesClose))
      .reduce((sum, value) => sum + value, 0);
};
