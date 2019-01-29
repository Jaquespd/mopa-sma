import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const VehicleListItem = ({ id, name, board, createdAt }) => (
  <Link className="list-item" to={`/edit_vehicle/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{board}</h3>
  </Link>
);

export default VehicleListItem;