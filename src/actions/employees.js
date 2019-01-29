import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EMPLOYEE
export const addEmployee = (employee) => ({
  type: 'ADD_EMPLOYEE',
  employee
});

export const startAddEmployee = (employeeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      phone = '',
      office = 0,
      createdAt = 0,
      createdUser = uid,
      note = '',
      isActive = true
    } = employeeData;
    const employee = { name, phone, office, note, createdUser, createdAt, isActive };

    return database.ref(`employees`).push(employee).then((ref) => {
      dispatch(addEmployee({
        id: ref.key,
        ...employee
      }));
    });
  };
};

// REMOVE_EMPLOYEE
export const removeEmployee = ({ id } = {}) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});

export const startRemoveEmployee = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`employees/${id}`).remove().then(() => {
      dispatch(removeEmployee({ id }));
    });
  };
};

// EDIT_EMPLOYEE
export const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

export const startEditEmployee = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`employees/${id}`).update(updates).then(() => {
      dispatch(editEmployee(id, updates));
    });
  };
};

// SET_EMPLOYEE
export const setEmployees = (employees) => ({
  type: 'SET_EMPLOYEES',
  employees
});

export const startSetEmployees = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`employees`).once('value').then((snapshot) => {
      const employees = [];

      snapshot.forEach((childSnapshot) => {
        employees.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setEmployees(employees));
    });
  };
};
