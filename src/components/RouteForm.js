import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      note: props.route ? props.route.note : '',
      createdAt: props.route ? moment(props.route.createdAt) : moment(),
      dateService: props.route ? moment(props.route.dateService) : moment(),
      employee: 'chose',
      employeeList: props.route ? props.route.employees : [''],
      local: 'chose',
      localList: props.route ? props.route.locals : [''],
      vehicle: 'chose',
      vehicleList: props.route ? props.route.vehicles : [''],
      service: '',
      serviceList: props.route ? props.route.services : [''],
      numServicesOpen: props.route ? props.route.numServicesOpen : '',
      numServicesClose: props.route ? props.route.numServicesClose : '',
      calendarFocused: false,
      error: ''
    };
  }
  onDateChange = (dateService) => {
    if (dateService) {
      const employeeList = [''];
      const vehicleList = [''];
      this.setState(() => ({ dateService, employeeList, vehicleList }));

    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onEmployeeChange = (e) => {
    const employee = e.target.value;
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
  onServiceChange = (e) => {
    const service = e.target.value;
    this.setState (() => ({ service }));
  };
  onNumServicesOpenChange = (e) => {
    const numServicesOpen = e.target.value;
    this.setState (() => ({ numServicesOpen }));
  };
  onNumServicesCloseChange = (e) => {
    const numServicesClose = e.target.value;
    this.setState (() => ({ numServicesClose }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    // Tratar as entradas ou eliminar a necessidade.
    if (false) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        employees: this.state.employeeList,
        locals: this.state.localList,
        vehicles: this.state.vehicleList,
        services: this.state.serviceList,
        numServicesOpen: this.state.numServicesOpen,
        numServicesClose: this.state.numServicesClose,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        dateService: this.state.dateService.valueOf()
      });
    }
  };
  onSubmitLocal = (e) => {
    e.preventDefault();

    if (!this.state.local) {
      this.setState(() => ({ error: 'Please provide local.' }));
    } else {
      this.setState(() => ({ error: '' }));
      const local = this.state.local;
      if ( local !== 'chose' ) {
        const localList = this.state.localList;
        if (localList[0] === '') {
          localList.splice(0, 1);
        }
        localList.push(local);
        this.setState(() => ({ local: 'chose' }));
      } else {
        console.log('Sem local');
      }
    }
  };
  onSubmitVehicle = (e) => {
    e.preventDefault();

    if (!this.state.vehicle) {
      this.setState(() => ({ error: 'Please provide vehicle.' }));
    } else {
      this.setState(() => ({ error: '' }));
      const vehicle = this.state.vehicle;
      if ( vehicle !== 'chose') {
        const vehicleList = this.state.vehicleList;
        if (vehicleList[0] === '') {
          vehicleList.splice(0, 1);
        }
        vehicleList.push(vehicle);
        this.setState(() => ({ vehicle: 'chose' }));
      } else {
        console.log('sem vehicle');
      }
    }
  };
  onSubmitService = (e) => {
    e.preventDefault();

    if (!this.state.service) {
      this.setState(() => ({ error: 'Please provide service.' }));
    } else {
      this.setState(() => ({ error: '' }));
      const service = this.state.service;
      const serviceList = this.state.serviceList;
      if (serviceList[0] === '') {
        serviceList.splice(0, 1);
      }
      serviceList.push(service);
      this.setState(() => ({ service: '' }));
      
    }
  };
  onSubmitEmployee = (e) => {
    e.preventDefault();

    if (!this.state.employee) {
      this.setState(() => ({ error: 'Please provide employee.' }));
    } else {
      this.setState(() => ({ error: '' }));
      
      const employeeSelected = this.state.employee;
      if ( employeeSelected !== 'chose') {
        const employeeList = this.state.employeeList;
        if (employeeList[0] === '') {
          employeeList.splice(0, 1);
        }
        employeeList.push(employeeSelected);
        this.setState(() => ({ employee: 'chose' }));
      }
      
    }
  };
  optionEmployees = () => {
    const employeesActive = this.props.employees.filter((employee) => {
      return employee.isActive;
    });
    const names = employeesActive.map((employee) => {
      return employee.name;
    });
    
    const employeesNotAvai = [];
    this.props.routes.map((route) => {
      const length = route.employees.length;
      const dateService = moment(route.dateService).format('YYYY MM DD');
      const dateServiceChose = this.state.dateService.format('YYYY MM DD');
      for (let i = 0; i < length; i++) {
        if (dateService === dateServiceChose) {
          employeesNotAvai.push(route.employees[i]);
        }
      }
      return;
    });
    const employeeList = this.state.employeeList;
    
    const options = names.filter((name) => {
      if (employeeList.length === 0 && employeesNotAvai.length === 0) {
        return true;
      } else if (employeeList.length === 0 && employeesNotAvai.length !== 0) {
        let match = false;
        for (let j = 0; j < employeesNotAvai.length; j++) {
          if (name === employeesNotAvai[j]) {
            match = true;
          }
        }
        return !match;
      } else if (employeeList.length !== 0 && employeesNotAvai.length === 0) {
        let match = false;
        for (let i = 0; i < employeeList.length; i++) {
          if (name === employeeList[i]) {
            match = true;
          }
        }
        return !match;  
      } else if (employeeList.length !== 0 && employeesNotAvai.length !== 0) {
        let match = false;
        for (let i = 0; i < employeeList.length; i++) {
          for (let j = 0; j < employeesNotAvai.length; j++) {
            if (name === employeeList[i] || name === employeesNotAvai[j]) {
              match = true;
            }
          }
        }
        return !match;
      }
    }).sort((a, b) => {
        return a < b ? -1 : 1;
    });
    
    return options.map((employee) => {
      return <option key={employee} value={employee}> {employee} </option>;
    });
  };
  optionLocals = () => {
    const names = this.props.locals.map((local) => {
      return local.name;
    });
    
    const localList = this.state.localList;
    
    const options = names.filter((name) => {
      if (localList.length === 0) {
        return true;
      } else if (localList.length !== 0) {
        let match = false;
        for (let i = 0; i < localList.length; i++) {
          if (name === localList[i]) {
            match = true;
          }
        }
        return !match;  
      }
    });

    return options.map((local) => {
      return <option key={local} value={local}> {local} </option>;
    });
  };
  optionVehicles = () => {
    const names = this.props.vehicles.map((vehicle) => {
      return vehicle.name;
    });
    const vehiclesNotAvai = [];
    this.props.routes.map((route) => {
      const length = route.vehicles.length;
      const dateService = moment(route.dateService).format('YYYY MM DD');
      const dateServiceChose = this.state.dateService.format('YYYY MM DD');
      for (let i = 0; i < length; i++) {
        if (dateService === dateServiceChose) {
          vehiclesNotAvai.push(route.vehicles[i]);
        }
      }
      return;
    });
    const vehicleList = this.state.vehicleList;
    
    const options = names.filter((name) => {
      if (vehicleList.length === 0 && vehiclesNotAvai.length === 0) {
        return true;
      } else if (vehicleList.length === 0 && vehiclesNotAvai.length !== 0) {
        let match = false;
        for (let j = 0; j < vehiclesNotAvai.length; j++) {
          if (name === vehiclesNotAvai[j]) {
            match = true;
          }
        }
        return !match;
      } else if (vehicleList.length !== 0 && vehiclesNotAvai.length === 0) {
        let match = false;
        for (let i = 0; i < vehicleList.length; i++) {
          if (name === vehicleList[i]) {
            match = true;
          }
        }
        return !match;  
      } else if (vehicleList.length !== 0 && vehiclesNotAvai.length !== 0) {
        let match = false;
        for (let i = 0; i < vehicleList.length; i++) {
          for (let j = 0; j < vehiclesNotAvai.length; j++) {
            if (name === vehicleList[i] || name === vehiclesNotAvai[j]) {
              match = true;
            }
          }
        }
        return !match;
      }
    }).sort((a, b) => {
        return a < b ? -1 : 1;
    });

    return options.map((vehicle) => {
      return <option key={vehicle} value={vehicle}> {vehicle} </option>;
    });
  };
  render() {
    return (
      <div>
      <SingleDatePicker
        date={this.state.dateService}
        onDateChange={this.onDateChange}
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <ol>
        {this.state.employeeList.map((employee) => {
          return <li key={employee} >{employee} <button>x</button></li>;
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
              this.optionEmployees()
            )
        }
        </select>
        <button className="button">OK</button>
      </form>
        
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
              this.optionLocals()
            )
        }
        </select>
        <button className="button">OK</button>
      </form>

      <ol>
        {this.state.vehicleList.map((vehicle) => {
          return <li key={vehicle} >{vehicle}</li>;
        })}
      </ol>
      <form className="form" onSubmit={this.onSubmitVehicle}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <select
          className="select"
          value={this.state.vehicle}
          onChange={this.onVehicleChange}
        >
          <option value="chose">Escolha o vehicle.</option>
        {
          this.props.vehicles.length === 0 ? (
            <option value="empty">
              Não há vehicles.
            </option>
          ) : (
              this.optionVehicles()
            )
        }
        </select>
        <button className="button">OK</button>
      </form>

      <ol>
        {
          this.state.serviceList.length !== 0 ? (
            this.state.serviceList.map((service) => {
            return <li key={service} >{service}</li>;
            })
          ) : (
            <p>Não há serviços.</p>
            ) 
        }
      </ol>
      <form className="form" onSubmit={this.onSubmitService}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        
        <input
          type="number"
          placeholder="Services"
          className="text-input"
          value={this.state.service}
          onChange={this.onServiceChange}
        />
        <button className="button">OK</button>
      </form>

      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
      
        <input
          type="number"
          placeholder="Number open services"
          className="text-input"
          value={this.state.numServicesOpen}
          onChange={this.onNumServicesOpenChange}
        />
        <input
          type="number"
          placeholder="Number closed services"
          className="text-input"
          value={this.state.numServicesClose}
          onChange={this.onNumServicesCloseChange}
        />
        <textarea
          placeholder="Add a note for your route (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Rota</button>
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
    locals: state.locals,
    routes: state.routes
  };
};

export default connect(mapStateToProps)(RouteForm);
