import React from 'react';
import { connect } from 'react-redux';
import VehicleListItem from './VehicleListItem';
import selectVehicles from '../selectors/vehicles';

export const VehicleList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Vehicles</div>
      <div className="show-for-desktop">Vehicle</div>
      <div className="show-for-desktop">Board</div>
    </div>
    <div className="list-body">
      {
        props.vehicles.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No vehicles</span>
          </div>
        ) : (
            props.vehicles.map((vehicle) => {
              return <VehicleListItem key={vehicle.id} {...vehicle} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    vehicles: selectVehicles(state.vehicles, state.vehiclesFilters)
  };
};

export default connect(mapStateToProps)(VehicleList);
