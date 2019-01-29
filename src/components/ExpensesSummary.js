import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, ...props }) => {
  
  const expenseWord = expenseCount === 1 ? 'equipe' : 'equipes';
  // const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const formattedExpensesTotal = expensesTotal/100;

  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Demandadas <span>{expenseCount}</span> {expenseWord} totalizando <span>{formattedExpensesTotal} </span>pessoas.</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create_route">Add Equipe</Link>
        </div>
      </div>
    </div>
  );
};
 
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    employees: state.employees
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
