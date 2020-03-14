import React from 'react';
import { LoginContext } from './context.js';

const If = props => {
  return props.condition ? props.children : null;
}

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showDetails: false

    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
    e.target.reset();
  }

  toggleDetails = id => {
    let showDetails = !this.state.showDetails;
    let details = this.state.todoList.filter(item => item._id === id)[0] || {};
    this.setState({ details, showDetails });
  }

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button className="log" onClick={this.context.logout}>Log Out!</button>
        </If>



        <If condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <legend className="login">
              Username

                  <input name="username" onChange={this.handleChange} className="logg"/>
            </legend>
            <legend className="login">
              Password

                  <input name="password" onChange={this.handleChange} className="logg" />
            </legend>
            <button className="log">Log In!</button>
          </form>
        </If>

      </>
    )
  }
}

export default Login;