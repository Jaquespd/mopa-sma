import React from 'react';
import { connect } from 'react-redux';
import RouteForm from './RouteForm';
import { startAddRoute } from '../actions/routes';


export class AddRoute extends React.Component {
  state = {
    calendarFocused: false
  };
  onSubmit = (route) => {
    this.props.startAddRoute(route);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Rota</h1>
          </div>
        </div>
        <div className="content-container">
          <RouteForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddRoute: (route) => dispatch(startAddRoute(route))
});

export default connect(undefined, mapDispatchToProps)(AddRoute);
