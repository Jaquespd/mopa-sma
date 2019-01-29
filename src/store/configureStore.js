import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import employeesReducer from '../reducers/employees';
import employeesFiltersReducer from '../reducers/employeesFilters';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import localsReducer from '../reducers/locals';
import localsFiltersReducer from '../reducers/localsFilters';
import vehiclesReducer from '../reducers/vehicles';
import vehiclesFiltersReducer from '../reducers/vehiclesFilters';
import routesReducer from '../reducers/routes';
import routesFiltersReducer from '../reducers/routesFilters';
import appReducer from '../reducers/app';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      employees: employeesReducer,
      employeesFilters: employeesFiltersReducer,
      expenses: expensesReducer,
      filters: filtersReducer,
      locals: localsReducer,
      localsFilters: localsFiltersReducer,
      vehicles: vehiclesReducer,
      vehiclesFilters: vehiclesFiltersReducer,
      routes: routesReducer,
      routesFilters: routesFiltersReducer,
      auth: authReducer,
      app: appReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
