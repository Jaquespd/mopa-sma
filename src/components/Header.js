import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { toggleNav } from '../actions/app';

export const Header = ({ startLogout, handleNavToggle, isNavOpen }) => {
  const navImageSrc = isNavOpen ? '/images/x.svg' : '/images/bars.svg';
  return (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <img className="header__nav-toggle" src={navImageSrc} onClick={handleNavToggle} />
        <Link className="header__title" to="/dashboard">
          <h1>MOPA - SMA</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);
  }

const mapStateToProps = (state) => {
  return {
    isNavOpen: state.app.isNavOpen

  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  handleNavToggle: () => dispatch(toggleNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

if (variavel < 0) {
cont++;

}