import React from 'react';
import { connect } from 'react-redux';
import LocalForm from './LocalForm';
import { startAddLocal } from '../actions/locals';


export class AddLocal extends React.Component {
  onSubmit = (local) => {
    this.props.startAddLocal(local);
    this.props.history.push('/locals');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Local</h1>
          </div>
        </div>
        <div className="content-container">
          <LocalForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddLocal: (local) => dispatch(startAddLocal(local))
});

export default connect(undefined, mapDispatchToProps)(AddLocal);
