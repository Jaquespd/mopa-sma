import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      employee: props.expense ? props.expense.employee : 'chose',
      employeeList: [],
      employeesOptions: props.employees,
      local: props.expense ? props.expense.local : 'chose',
      localList: [],
      vehicle: props.expense ? props.expense.vehicle : 'chose',
      phone: props.local ? props.local.phone : '',
      calendarFocused: false,
      error: ''
    };
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      console.log(createdAt.format('L'));
      console.log(moment('08/31/2018'));
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onEmployeeChange = (e) => {
    const employee = e.target.value;
    console.log('change', employee);
    if ( employee === 'chose' || employee === 'empty' ) {
      this.setState (() => ({ employee: 'chose' }));
    } else {
      this.setState (() => ({ employee }));
    }
  };
  onLocalChange = (e) => {
    const local = e.target.value;
    if ( local === 'chose' || local === 'empty' ) {
      this.setState (() => ({ local: 'chose' }));
    } else {
      this.setState (() => ({ local }));
    }
  };
  onVehicleChange = (e) => {
    const vehicle = e.target.value;
    if ( vehicle === 'chose' || vehicle === 'empty' ) {
      this.setState (() => ({ vehicle: 'chose' }));
    } else {
      this.setState (() => ({ vehicle }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  onSubmitEmployee = (e) => {
    e.preventDefault();

    if (!this.state.employee) {
      this.setState(() => ({ error: 'Please provide employee.' }));
    } else {
      this.setState(() => ({ error: '' }));
      
      const employeeSelected = this.state.employee;
      const employeeList = this.state.employeeList;
      employeeList.push(employeeSelected);
      this.setState(() => ({ employee: 'chose' }));

      console.log('employeeSelected' , employeeSelected);
      console.log('employeeList', employeeList);

      const employeesOptions = this.state.employeesOptions.filter((employee) => {
        return employee.name !== employeeSelected;
      });
      this.setState(() => ({ employeesOptions }));
      console.log('employeesOptions', employeesOptions);
      
    }
  };
  onSubmitLocal = (e) => {
    e.preventDefault();

    if (!this.state.local) {
      this.setState(() => ({ error: 'Please provide local.' }));
    } else {
      this.setState(() => ({ error: '' }));
      // this.props.onSubmit({
      //   createdAt: this.state.createdAt.valueOf(),
      //   note: this.state.note
      // });
      const local = this.state.local;
      const localList = this.state.localList;
      localList.push(local);
      this.setState(() => ({ local: 'chose' }));
      
    }
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  render() {
    return (
      <div>
      <ol>
        {this.state.employeeList.map((employee) => {
          return <li key={employee} >{employee}</li>;
        })}
      </ol>  
      <form className="form" onSubmit={this.onSubmitEmployee}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <select
          className="select"
          value={this.state.employee}
          onChange={this.onEmployeeChange}
        >
          <option value="chose">Escolha o funcionário.</option>
        {
          this.props.employees.length === 0 ? (
            <option value="empty">
              Não há funcionários.
            </option>
          ) : (
              this.props.employees.map((employee) => {
                return <option key={employee.id} value={employee.name}> {employee.name} </option>;
              })
              
              
            )
        }
        </select>
        <button className="button">OK</button>
      </form>
      <SingleDatePicker
        date={moment('08/05/2018')}
        onDateChange={this.onDateChange}
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      /> 
        
      <ol>
        {this.state.localList.map((local) => {
          return <li key={local} >{local}</li>;
        })}
      </ol>
      <form className="form" onSubmit={this.onSubmitLocal}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
      
        <select
          className="select"
          value={this.state.local}
          onChange={this.onLocalChange}
        >
          <option value="chose">Escolha o local.</option>
        {
          this.props.locals.length === 0 ? (
            <option value="empty">
              Não há locals.
            </option>
          ) : (
              this.props.locals.map((local) => {
                return <option key={local.id} value={local.name}> {local.name} </option>;
              })
            )
        }
        </select>
        <button className="button">OK</button>
        </form>  
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
      
        <select
          className="select"
          value={this.state.local}
          onChange={this.onLocalChange}
        >
          <option value="chose">Escolha o local.</option>
        {
          this.props.locals.length === 0 ? (
            <option value="empty">
              Não há locals.
            </option>
          ) : (
              this.props.locals.map((local) => {
                return <option key={local.id} value={local.id}> {local.name} </option>;
              })
            )
        }
        </select>
        <input type="button" value="Selecionar" />
        
        <select
          className="select"
          value={this.state.vehicle}
          onChange={this.onVehicleChange}
        >
          <option value="chose">Escolha o veiculo.</option>
        {
          this.props.vehicles.length === 0 ? (
            <option value="empty">
              Não há veiculos.
            </option>
          ) : (
              this.props.vehicles.map((vehicle) => {
                return <option key={vehicle.id} value={vehicle.id}> {vehicle.name} </option>;
              })
            )
        }
        </select>
        <input type="button" value="Selecionar" />
        
        <input
          type="text"
          placeholder="Services"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <input type="button" value="Selecionar" />
        
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        /> 
        <input
          type="text"
          placeholder="Number open services"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <input
          type="text"
          placeholder="Number closed services"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Equipe</button>
        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // vehicles: selectExpenses(state.expenses, state.filters)
    vehicles: state.vehicles,
    employees: state.employees,
    locals: state.locals
  };
};

export default connect(mapStateToProps)(ExpenseForm);
