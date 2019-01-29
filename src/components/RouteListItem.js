import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    
const RouteListItem = ({ id, employees, locals, vehicles, numServicesOpen, note, services, createdAt }) => (
  <Link className="list-item" to={`/edit_route/${id}`}>
    <div className="list-item__column">
      <div className="list-item__row">
        <div className="list-item__employees">
          <h3 className="list-item__data">Funcionários</h3>
          <span className="list-item__title">
          {
            <ol>
              {employees.map((employee) => {
                return <li key={employee} >{employee}</li>;
              })}
            </ol>
          }
          </span>
        </div>
        <div className="list-item__locals">
          <h3 className="list-item__data">Locais</h3>
          <span className="list-item__title">
          {
            <ol>
              {locals.map((local) => {
                return <li key={local} >{local}</li>;
              })}
            </ol>  
          }
          </span>
        </div>
        <div className="list-item__os">
          <h3 className="list-item__data">Chamados</h3>
          <span className="list-item__title">
          {
            <ol>
              {services.map((service) => {
                return <li key={service} >{service}</li>;
              })}
            </ol>  
          }
          </span>
        </div>
        <div className="list-item__os">
          <h3 className="list-item__data">Veiculos</h3>
          <span className="list-item__title">
          {
            <ol>
              {vehicles.map((vehicle) => {
                return <li key={vehicle} >{vehicle}</li>;
              })}
            </ol>  
          }
          </span>
        </div>
      </div>
      <div className="list-item__row">
        <div className="list-item__large">
          <h3 className="list-item__data">Observações</h3>
          <span className="list-item__title"><ol>{note}</ol></span>
        </div>
      </div>
    </div>
  </Link>
);

export default RouteListItem;
