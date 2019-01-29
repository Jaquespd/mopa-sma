import React from 'react';
import LocalList from './LocalList';
import LocalListFilters from './LocalListFilters';
import LocalSummary from './LocalSummary';

const LocalDashboardPage = () => (
  <div className="page-content__main">
    <LocalSummary />
    <LocalListFilters />
    <LocalList />
  </div>
);

export default LocalDashboardPage;
