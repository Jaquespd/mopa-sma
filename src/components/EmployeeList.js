import React from 'react';
import { connect } from 'react-redux';
import EmployeeListItem from './EmployeeListItem';
import selectEmployees from '../selectors/employees';

export const EmployeeList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Funcionários</div>
      <div className="show-for-desktop">Funcionário</div>
      <div className="show-for-desktop">Telefone</div>
    </div>
    <div className="list-body">
      {
        props.employees.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No employees</span>
          </div>
        ) : (
            props.employees.map((employee) => {
              return <EmployeeListItem key={employee.id} {...employee} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    employees: selectEmployees(state.employees, state.employeesFilters)
  };
};

export default connect(mapStateToProps)(EmployeeList);
