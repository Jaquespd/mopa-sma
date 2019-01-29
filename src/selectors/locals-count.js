export default (routes) => {
  return routes
      .map((route) => route.locals.length)
      .reduce((sum, value) => sum + value, 0);
};
