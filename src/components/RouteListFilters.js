import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import { setTextFilter, sortByDate, setStartDate, setEndDate } from '../actions/routesFilters';

export class RouteListFilters extends React.Component {
  state = {
    calendarFocused: null,
    calendarFocusedSingle: false,
    dateService: moment(),
    checkbox: false,
    error: ''
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onDateChange = ( dateService ) => {
    this.setState(() => ({ dateService }));
    this.props.setStartDate(dateService.startOf('day'));
    this.props.setEndDate(dateService.endOf('day'));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    }
  };
  onChangeCheckbox = () => {
    const checkbox = !this.state.checkbox;
    this.setState(() => ({ checkbox }));
    if (checkbox) {
      this.props.setStartDate(moment().startOf('month'));
      this.props.setEndDate(moment().endOf('month'));
    } else if (!checkbox) {
      const dateService = this.state.dateService;
      this.props.setStartDate(dateService.startOf('day'));
      this.props.setEndDate(dateService.endOf('day'));
    }
  };
  onFocusChangeSingle = ({ focused }) => {
    this.setState(() => ({ calendarFocusedSingle: focused }));
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
              <option value="date">Date</option>
            </select>
          </div>
          <div className="input-group__item">
            {
              this.state.checkbox ? (
                <DateRangePicker
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              ) : (
                <SingleDatePicker
                  date={this.state.dateService}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocusedSingle}
                  onFocusChange={this.onFocusChangeSingle}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              )
            }
          </div>
          <div className="input-group__item">
            <input type="checkbox" checked={this.state.checkbox} onChange={this.onChangeCheckbox} />
          </div>
          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.routesFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteListFilters);
