import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import EmployeeForm from './EmployeeForm';
import { startAddEmployee } from '../actions/employees';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log(this.props);
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Equipe</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  startAddEmployee: (employee) => dispatch(startAddEmployee(employee))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
