import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectLocals from '../selectors/locals';

export const LocalSummary = ({ localsCount }) => {
  const localWord = localsCount === 1 ? 'local' : 'locals';
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Cadastrado <span>{localsCount}</span> {localWord}.</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create_local">Add Local</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleLocals = selectLocals(state.locals, state.localsFilters);

  return {
    localsCount: visibleLocals.length,
  };
};

export default connect(mapStateToProps)(LocalSummary);
