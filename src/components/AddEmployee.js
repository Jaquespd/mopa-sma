import React from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { startAddEmployee } from '../actions/employees';


export class AddEmployee extends React.Component {
  onSubmit = (employee) => {
    this.props.startAddEmployee(employee);
    this.props.history.push('/employees');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Funcionário</h1>
          </div>
        </div>
        <div className="content-container">
          <EmployeeForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddEmployee: (employee) => dispatch(startAddEmployee(employee))
});

export default connect(undefined, mapDispatchToProps)(AddEmployee);
