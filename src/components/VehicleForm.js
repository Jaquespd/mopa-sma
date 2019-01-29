import React from 'react';
import moment from 'moment';

export default class VehicleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.vehicle ? props.vehicle.name : '',
      note: props.vehicle ? props.vehicle.note : '',
      model: props.vehicle ? props.vehicle.model : '',
      board: props.vehicle ? props.vehicle.board : '',
      isActive: props.vehicle ? props.vehicle.isActive : true,
      createdAt: props.vehicle ? moment(props.vehicle.createdAt) : moment(),
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
  onBoardChange = (e) => {
    const board = e.target.value;
    this.setState(() => ({ board }));
  };
  onModelChange = (e) => {
    const model = e.target.value;
    this.setState(() => ({ model }));
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

    if (!this.state.name || !this.state.board || !this.state.model) {
      this.setState(() => ({ error: 'Please provide name, board and model.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        model: this.state.model,
        board: this.state.board,
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
          placeholder="Model"
          className="text-input"
          value={this.state.model}
          onChange={this.onModelChange}
        />
        <input
          type="text"
          placeholder="Board"
          className="text-input"
          value={this.state.board}
          onChange={this.onBoardChange}
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
          placeholder="Add a note for your local (optional)"
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
