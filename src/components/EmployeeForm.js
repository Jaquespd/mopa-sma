import React from 'react';
import moment from 'moment';

export default class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.employee ? props.employee.name : '',
      note: props.employee ? props.employee.note : '',
      phone: props.employee ? props.employee.phone : '',
      office: props.employee ? props.employee.office : '',
      isActive: props.employee ? props.employee.isActive : true,
      createdAt: props.employee ? moment(props.employee.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onOfficeChange = (e) => {
    const office = e.target.value;
    this.setState(() => ({ office }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onIsActiveChange = (e) => {
    const selected = e.target.value;
    if ( selected === 'true' ) {
      this.setState (() => ({ isActive: true }));
    } else {
      this.setState (() => ({  isActive: false }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.office || !this.state.phone) {
      this.setState(() => ({ error: 'Please provide name, office and phone.' }));
    } else {
      this.setState(() => ({ error: '' }));
      // let isActiveAux;
      // if (this.state.isActive === 'active' ) {
      //   isActiveAux = true;
      // } else {
      //   isActiveAux = false;
      // } 
      console.log(this.state.isActive);
      this.props.onSubmit({
        name: this.state.name,
        phone: this.state.phone,
        office: this.state.office,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        isActive: this.state.isActive
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Office"
          className="text-input"
          value={this.state.office}
          onChange={this.onOfficeChange}
        />
        <input
          type="text"
          placeholder="Phone"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <div className="input-group__item">
          <select
            className="select"
            value={this.state.isActive}
            onChange={this.onIsActiveChange}
          >
            <option value={true}>Ativo</option>
            <option value={false}>Inativo</option>
          </select>
        </div>
        <textarea
          placeholder="Add a note for your employee (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Salvar</button>
        </div>
      </form>
    )
  }
}
