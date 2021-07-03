import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValidationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Enter Your Name 💁";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid E-mail 📧";
    }
    if (!this.state.passwordError) {
      passwordError = "Password Cannot Be Blank 🔐";
    }


    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form  className=" mt-5 mx-auto form-control" style={{backgroundColor:"#028371",width:'30%'}} onSubmit={this.handleSubmit}>
      <h4 style={{fontFamily:'verdana',textAlign:'center'}}>Form-Validation</h4>
        <div>
          <input className=" mt-3 form-control "
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "black" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input className=" mt-3 form-control"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "black" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input className=" mt-3 form-control"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "black" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button className=" mt-3 btn btn-dark" type="submit">submit</button>
      </form>
    );
  }
}
