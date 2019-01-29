import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByOffice, sortByName, setShowActiveFilter, setShowNotActiveFilter, setShowBothFilter } from '../actions/employeesFilters';

export class EmployeeListFilters extends React.Component {
  state = {
    error: ''
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'name') {
      this.props.sortByName();
    } else if (e.target.value === 'office') {
      this.props.sortByOffice();
    }
  };
  onShowStateChange = (e) => {
    if (e.target.value === 'active') {
      this.props.setShowActiveFilter();
    } else if (e.target.value === 'notActive') {
      this.props.setShowNotActiveFilter();
    } else if (e.target.value === 'both') {
      this.props.setShowBothFilter();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Pesquisar"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="name">Name</option>
              <option value="office">Office</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.showState}
              onChange={this.onShowStateChange}
            >
              <option value="active">Active</option>
              <option value="notActive">Not Active</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.employeesFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByOffice: () => dispatch(sortByOffice()),
  sortByName: () => dispatch(sortByName()),
  setShowActiveFilter: () => dispatch(setShowActiveFilter()),
  setShowNotActiveFilter: () => dispatch(setShowNotActiveFilter()),
  setShowBothFilter: () => dispatch(setShowBothFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListFilters);
