import React from 'react';
import { connect } from 'react-redux';
import RouteListItem from './RouteListItem';
import selectRoutes from '../selectors/routes';

export const RouteList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Equipes</div>
      <div className="show-for-desktop">Equipes</div>
      <div className="show-for-desktop">Chamados</div>
    </div>
    <div className="list-body">
      {
        props.routes.length === 0 ? (
          <div className="list-item list-item--message">
            <span>Não há equipes designadas.</span>
          </div>
        ) : (
            props.routes.map((route) => {
              return <RouteListItem key={route.id} {...route} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    routes: selectRoutes(state.routes, state.routesFilters)
  };
};

export default connect(mapStateToProps)(RouteList);
