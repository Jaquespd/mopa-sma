import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_VEHICLE
export const addVehicle = (vehicle) => ({
  type: 'ADD_VEHICLE',
  vehicle
});

export const startAddVehicle = (vehicleData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      model = '',
      board = '',
      createdAt = 0,
      createdUser = uid,
      note = '',
      isActive = true
    } = vehicleData;
    const vehicle = { name, model, board, note, createdUser, createdAt, isActive };

    return database.ref(`vehicles`).push(vehicle).then((ref) => {
      dispatch(addVehicle({
        id: ref.key,
        ...vehicle
      }));
    });
  };
};

// REMOVE_VEHICLE
export const removeVehicle = ({ id } = {}) => ({
  type: 'REMOVE_VEHICLE',
  id
});

export const startRemoveVehicle = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`vehicles/${id}`).remove().then(() => {
      dispatch(removeVehicle({ id }));
    });
  };
};

// EDIT_VEHICLE
export const editVehicle = (id, updates) => ({
  type: 'EDIT_VEHICLE',
  id,
  updates
});

export const startEditVehicle = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`vehicles/${id}`).update(updates).then(() => {
      dispatch(editVehicle(id, updates));
    });
  };
};

// SET_VEHICLES
export const setVehicles = (vehicles) => ({
  type: 'SET_VEHICLES',
  vehicles
});

export const startSetVehicles = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`vehicles`).once('value').then((snapshot) => {
      const vehicles = [];

      snapshot.forEach((childSnapshot) => {
        vehicles.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setVehicles(vehicles));
    });
  };
};
