import React from 'react';
import moment from 'moment';

export default class LocalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.local ? props.local.name : '',
      note: props.local ? props.local.note : '',
      phone: props.local ? props.local.phone : '',
      adress: props.local ? props.local.adress : '',
      linkMaps: props.local ? props.local.linkMaps : '',
      isActive: props.local ? props.local.isActive : true,
      createdAt: props.local ? moment(props.local.createdAt) : moment(),
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
  onAdressChange = (e) => {
    const adress = e.target.value;
    this.setState(() => ({ adress }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onLinkMapsChange = (e) => {
    const linkMaps = e.target.value;
    this.setState(() => ({ linkMaps }));
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

    if (!this.state.name || !this.state.adress || !this.state.phone) {
      this.setState(() => ({ error: 'Please provide name, adress and phone.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        phone: this.state.phone,
        adress: this.state.adress,
        linkMaps: this.state.linkMaps,
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
          placeholder="Adress"
          className="text-input"
          value={this.state.adress}
          onChange={this.onAdressChange}
        />
        <input
          type="text"
          placeholder="Phone"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <input
          type="text"
          placeholder="Link Maps"
          className="text-input"
          value={this.state.linkMaps}
          onChange={this.onLinkMapsChange}
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
