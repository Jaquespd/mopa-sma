import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectVehicles from '../selectors/vehicles';

export const VehicleSummary = ({ vehiclesCount }) => {
  const vehicleWord = vehiclesCount === 1 ? 'vehicle' : 'vehicles';
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Cadastrado <span>{vehiclesCount}</span> {vehicleWord}.</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create_vehicle">Add Vehicle</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleVehicles = selectVehicles(state.vehicles, state.vehiclesFilters);

  return {
    vehiclesCount: visibleVehicles.length,
  };
};

export default connect(mapStateToProps)(VehicleSummary);
