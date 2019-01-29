import React from 'react';
import RouteList from './RouteList';
import RouteListFilters from './RouteListFilters';
import RouteSummary from './RouteSummary';

const RouteDashboardPage = () => (
  <div className="page-content__main">
    <RouteSummary />
    <RouteListFilters />
    <RouteList />
  </div>
);

export default RouteDashboardPage;
