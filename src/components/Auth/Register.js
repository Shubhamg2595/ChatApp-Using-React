import React from "react";
import firebase from "../../firebase";

import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading:false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      //throw errors
      error = { message: "Fill in all the Fields" };
      this.setState({ errors: errors.concat(error) });
      return false; //indicates we should not perform handle submit
    } else if (!this.isPasswordValid(this.state)) {
      //throw errors
      error = { message: "Password is Invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      //form is valid
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    //if we have length of 0 for any of these inputs , function will return True
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleSubmit = event => {
    if (this.isFormValid()) {
      this.setState({errors:[],loading:true})
      event.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
          this.setState({loading:false})
        })
        .catch(err => {
          console.log(err);
          this.setState({ errors:this.state.errors.concat(err),loading:false})
        });
    }
  };

  render() {
    const { username, email, password, passwordConfirmation,errors,loading } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register For DevChat
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username" 
                icon="user"
                iconPosition="left"
                placeholder="username"
                onChange={this.handleChange}
                value={username}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="email address"
                onChange={this.handleChange}
                value={email}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="password"
                onChange={this.handleChange}
                value={password}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="password confirmation"
                onChange={this.handleChange}
                value={passwordConfirmation}
                type="password"
              />
              <Button disabled={loading}
              className={loading?'loading':''} color="orange" fluid size="large">
                Submit
              </Button>
              <Message>
                Already a user? <Link to="/login">Login</Link>
              </Message>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
