import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_LOCAL
export const addLocal = (local) => ({
  type: 'ADD_LOCAL',
  local
});

export const startAddLocal = (localData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      phone = '',
      adress = '',
      linkMaps = '',
      createdAt = 0,
      createdUser = uid,
      note = '',
      isActive = true
    } = localData;
    const local = { name, phone, adress, note, createdUser, createdAt, isActive, linkMaps };

    return database.ref(`locals`).push(local).then((ref) => {
      dispatch(addLocal({
        id: ref.key,
        ...local
      }));
    });
  };
};

// REMOVE_LOCAL
export const removeLocal = ({ id } = {}) => ({
  type: 'REMOVE_LOCAL',
  id
});

export const startRemoveLocal = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`locals/${id}`).remove().then(() => {
      dispatch(removeLocal({ id }));
    });
  };
};

// EDIT_LOCAL
export const editLocal = (id, updates) => ({
  type: 'EDIT_LOCAL',
  id,
  updates
});

export const startEditLocal = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`locals/${id}`).update(updates).then(() => {
      dispatch(editLocal(id, updates));
    });
  };
};

// SET_LOCALS
export const setLocals = (locals) => ({
  type: 'SET_LOCALS',
  locals
});

export const startSetLocals = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`locals`).once('value').then((snapshot) => {
      const locals = [];

      snapshot.forEach((childSnapshot) => {
        locals.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setLocals(locals));
    });
  };
};
