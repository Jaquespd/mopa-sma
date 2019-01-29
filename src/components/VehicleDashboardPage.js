import React from 'react';
import VehicleList from './VehicleList';
import VehicleListFilters from './VehicleListFilters';
import VehicleSummary from './VehicleSummary';

const VehicleDashboardPage = () => (
  <div className="page-content__main">
    <VehicleSummary />
    <VehicleListFilters />
    <VehicleList />
  </div>
);

export default VehicleDashboardPage;
