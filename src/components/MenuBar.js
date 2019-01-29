import React from 'react';
import { connect } from 'react-redux';
import { closeNav, toggleNav } from '../actions/app';

export class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
  }
  onClickDashboard = () => {
    this.props.handleNavClose();
    this.props.history.push('/dashboard');
  };
  onClickInclination = () => {
    this.props.handleNavClose();
    this.props.history.push('/employees');
  };
  onClickThreeRules = () => {
    this.props.handleNavClose();
    this.props.history.push('/vehicles');
  };
  onClickHistory = () => {
    this.props.handleNavClose();
    this.props.history.push('/locals');
  };
  render() {
    const classNameNav = this.props.isNavOpen ? 'is-nav-open' : '';
    const pathname = this.props.history.location.pathname.split("/")[1];
    return (
      <div className={classNameNav}>
        <div className="page-content__sidebar" >
          <div className="item-list">
            <div className="item-list-button">
              <p className={pathname === 'dashboard' ? 'item item--selected' : 'item'} onClick={this.onClickDashboard} >Rotas</p>
              <p className={pathname === 'employees' ? 'item item--selected' : 'item'} onClick={this.onClickInclination} >Funcionarios</p>
              <p className={pathname === 'vehicles' ? 'item item--selected' : 'item'} onClick={this.onClickThreeRules} >Veiculos</p>
              <p className={pathname === 'locals' ? 'item item--selected' : 'item'} onClick={this.onClickHistory} >Locais</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNavOpen: state.app.isNavOpen

  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNavClose: () => dispatch(closeNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);