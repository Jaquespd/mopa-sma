import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import EditLocal from '../components/EditLocal';
import EmployeeDashboardPage from '../components/EmployeeDashboardPage';
import LocalDashboardPage from '../components/LocalDashboardPage';
import VehicleDashboardPage from '../components/VehicleDashboardPage';
import AddLocal from '../components/AddLocal';
import AddVehicle from '../components/AddVehicle';
import EditVehicle from '../components/EditVehicle';
import EditRoute from '../components/EditRoute';
import RouteDashboardPage from '../components/RouteDashboardPage';
import AddRoute from '../components/AddRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={RouteDashboardPage} />
        <PrivateRoute path="/employees" component={EmployeeDashboardPage} />
        <PrivateRoute path="/locals" component={LocalDashboardPage} />
        <PrivateRoute path="/vehicles" component={VehicleDashboardPage} />
        <PrivateRoute path="/routes" component={RouteDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/edit_employee/:id" component={EditEmployee} />
        <PrivateRoute path="/create_employee" component={AddEmployee} />
        <PrivateRoute path="/create_local" component={AddLocal} />
        <PrivateRoute path="/create_route" component={AddRoute} />
        <PrivateRoute path="/edit_route/:id" component={EditRoute} />
        <PrivateRoute path="/edit_local/:id" component={EditLocal} />
        <PrivateRoute path="/create_vehicle" component={AddVehicle} />
        <PrivateRoute path="/edit_vehicle/:id" component={EditVehicle} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
