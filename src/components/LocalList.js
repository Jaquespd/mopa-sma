import React from 'react';
import { connect } from 'react-redux';
import LocalListItem from './LocalListItem';
import selectLocals from '../selectors/locals';

export const LocalList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Locals</div>
      <div className="show-for-desktop">Local</div>
      <div className="show-for-desktop">Phone</div>
    </div>
    <div className="list-body">
      {
        props.locals.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No locals</span>
          </div>
        ) : (
            props.locals.map((local) => {
              return <LocalListItem key={local.id} {...local} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    locals: selectLocals(state.locals, state.localsFilters)
  };
};

export default connect(mapStateToProps)(LocalList);
