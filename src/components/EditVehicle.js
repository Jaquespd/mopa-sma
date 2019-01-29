import React from 'react';
import { connect } from 'react-redux';
import VehicleForm from './VehicleForm';
import { startEditVehicle, startRemoveVehicle } from '../actions/vehicles';

export class EditVehicle extends React.Component {
  onSubmit = (vehicle) => {
    this.props.startEditVehicle(this.props.vehicle.id, vehicle);
    this.props.history.push('/vehicles');
  };
  onRemove = () => {
    this.props.startRemoveVehicle({ id: this.props.vehicle.id });
    this.props.history.push('/vehicles');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Vehicle</h1>
          </div>
        </div>
        <div className="content-container">
          <VehicleForm
            vehicle={this.props.vehicle}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  vehicle: state.vehicles.find((vehicle) => vehicle.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditVehicle: (id, vehicle) => dispatch(startEditVehicle(id, vehicle)),
  startRemoveVehicle: (data) => dispatch(startRemoveVehicle(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle);
