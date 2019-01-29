import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeListFilters from './EmployeeListFilters';
import EmployeeSummary from './EmployeeSummary';

const EmployeeDashboardPage = () => (
  <div className="page-content__main">
    <EmployeeSummary />
    <EmployeeListFilters />
    <EmployeeList />
  </div>
);

export default EmployeeDashboardPage;
