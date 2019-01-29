import React from 'react';
import { connect } from 'react-redux';
import RouteForm from './RouteForm';
import { startEditRoute, startRemoveRoute } from '../actions/routes';

export class EditRoute extends React.Component {
  onSubmit = (route) => {
    this.props.startEditRoute(this.props.route.id, route);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveRoute({ id: this.props.route.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Route</h1>
          </div>
        </div>
        <div className="content-container">
          <RouteForm
            route={this.props.route}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Route</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  route: state.routes.find((route) => route.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditRoute: (id, route) => dispatch(startEditRoute(id, route)),
  startRemoveRoute: (data) => dispatch(startRemoveRoute(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRoute);
