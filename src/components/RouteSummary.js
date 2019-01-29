import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectRoutes from '../selectors/routes';
import servicesTotal from '../selectors/services-total';
import servicesClose from '../selectors/services-close';
import employeesCount from '../selectors/employees-count';
import localsCount from '../selectors/locals-count';
import vehiclesCount from '../selectors/vehicles-count';

// <h1 className="page-header__title">Cadastrada <span>{routesCount}</span> {routeWord}. Totalizando <span> {servicesTotal} </span> {serviceWord}.</h1>
        

export const RouteSummary = ({ routesCount, servicesTotal, servicesClose, employeesCount, localsCount, vehiclesCount }) => {
  const routeWord = routesCount === 1 ? 'Equipe: ' : 'Equipes: ';
  const serviceAWord = servicesTotal === 1 ? 'Chamado A: ' : 'Chamados A: ';
  const serviceFWord = servicesClose === 1 ? 'Chamado F: ' : 'Chamados F: ';
  const employeeWord = employeesCount === 1 ? 'Funcionário: ' : 'Funcionários: ';
  const localWord = localsCount === 1 ? 'Local: ' : 'Locais: ';
  const vehicleWord = vehiclesCount === 1 ? 'Veiculo: ' : 'Veiculos: ';
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
        {routeWord} <span>{routesCount}</span>.
        {serviceAWord}<span>{servicesTotal}</span>.
        {serviceFWord}<span>{servicesClose}</span>.
        {employeeWord}<span>{employeesCount}</span>.
        {localWord}<span>{localsCount}</span>.
        {vehicleWord}<span>{vehiclesCount}</span>.
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create_route">Add Route</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleRoutes = selectRoutes(state.routes, state.routesFilters);

  return {
    routesCount: visibleRoutes.length,
    servicesTotal: servicesTotal(visibleRoutes),
    servicesClose: servicesClose(visibleRoutes),
    employeesCount: employeesCount(visibleRoutes),
    localsCount: localsCount(visibleRoutes),
    vehiclesCount: vehiclesCount(visibleRoutes)
  };
};

export default connect(mapStateToProps)(RouteSummary);
