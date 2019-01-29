import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEmployees from '../selectors/employees';

export const EmployeeSummary = ({ employeesCount }) => {
  const employeeWord = employeesCount === 1 ? 'funcionário' : 'funcionários';
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Cadastrado <span>{employeesCount}</span> {employeeWord}.</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create_employee">Add Funcionário</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleEmployees = selectEmployees(state.employees, state.employeesFilters);

  return {
    employeesCount: visibleEmployees.length,
  };
};

export default connect(mapStateToProps)(EmployeeSummary);
