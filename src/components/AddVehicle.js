import React from 'react';
import { connect } from 'react-redux';
import VehicleForm from './VehicleForm';
import { startAddVehicle } from '../actions/vehicles';


export class AddVehicle extends React.Component {
  onSubmit = (vehicle) => {
    this.props.startAddVehicle(vehicle);
    this.props.history.push('/vehicles');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Vehicle</h1>
          </div>
        </div>
        <div className="content-container">
          <VehicleForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddVehicle: (vehicle) => dispatch(startAddVehicle(vehicle))
});

export default connect(undefined, mapDispatchToProps)(AddVehicle);
