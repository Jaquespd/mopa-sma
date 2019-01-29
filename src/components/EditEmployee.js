import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { startEditEmployee, startRemoveEmployee } from '../actions/employees';

export class EditEmployee extends React.Component {
  onSubmit = (employee) => {
    this.props.startEditEmployee(this.props.employee.id, employee);
    this.props.history.push('/employees');
  };
  onRemove = () => {
    this.props.startRemoveEmployee({ id: this.props.employee.id });
    this.props.history.push('/employees');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Employee</h1>
          </div>
        </div>
        <div className="content-container">
          <EmployeeForm
            employee={this.props.employee}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  employee: state.employees.find((employee) => employee.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditEmployee: (id, employee) => dispatch(startEditEmployee(id, employee)),
  startRemoveEmployee: (data) => dispatch(startRemoveEmployee(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
