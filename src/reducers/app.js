export default (state = { isNavOpen: false }, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        isNavOpen: true
      };
    case 'CLOSE':
      return {
        isNavOpen: false
      };
    case 'TOGGLE':
      return {
        isNavOpen: !state.isNavOpen
      };
    default:
      return state;
  }
};
