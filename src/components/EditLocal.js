import React from 'react';
import { connect } from 'react-redux';
import LocalForm from './LocalForm';
import { startEditLocal, startRemoveLocal } from '../actions/locals';

export class EditLocal extends React.Component {
  onSubmit = (local) => {
    this.props.startEditLocal(this.props.local.id, local);
    this.props.history.push('/locals');
  };
  onRemove = () => {
    this.props.startRemoveLocal({ id: this.props.local.id });
    this.props.history.push('/locals');
  };
  render() {
    return (
      <div className="page-content__main">
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Local</h1>
          </div>
        </div>
        <div className="content-container">
          <LocalForm
            local={this.props.local}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  local: state.locals.find((local) => local.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditLocal: (id, local) => dispatch(startEditLocal(id, local)),
  startRemoveLocal: (data) => dispatch(startRemoveLocal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLocal);
