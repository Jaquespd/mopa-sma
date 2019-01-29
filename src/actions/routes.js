import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_ROUTE
export const addRoute = (route) => ({
  type: 'ADD_ROUTE',
  route
});

export const startAddRoute = (routeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      employees = [],
      locals = [],
      vehicles = [],
      services = [],
      numServicesOpen = '',
      numServicesClose = '',
      createdAt = 0,
      createdUser = uid,
      note = '',
      dateService = 0
    } = routeData;
    const route = { employees, locals, vehicles, services, dateService, numServicesClose, numServicesOpen, note, createdUser, createdAt };

    return database.ref(`routes`).push(route).then((ref) => {
      dispatch(addRoute({
        id: ref.key,
        ...route
      }));
    });
  };
};

// REMOVE_ROUTE
export const removeRoute = ({ id } = {}) => ({
  type: 'REMOVE_ROUTE',
  id
});

export const startRemoveRoute = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`routes/${id}`).remove().then(() => {
      dispatch(removeRoute({ id }));
    });
  };
};

// EDIT_ROUTE
export const editRoute = (id, updates) => ({
  type: 'EDIT_ROUTE',
  id,
  updates
});

export const startEditRoute = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`routes/${id}`).update(updates).then(() => {
      dispatch(editRoute(id, updates));
    });
  };
};

// SET_ROUTES
export const setRoutes = (routes) => ({
  type: 'SET_ROUTES',
  routes
});

export const startSetRoutes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`routes`).once('value').then((snapshot) => {
      const routes = [];
      snapshot.forEach((childSnapshot) => {
        routes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setRoutes(routes));
    });
  };
};
