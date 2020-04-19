import React, {useState, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Nav, FormControl, Form, Button} from 'react-bootstrap';
import {UserContext} from '../containers/UserContext';
import  {FaLogin} from './Icons';
import Auth from '../auth/auth';

export default function Login(pars) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [,setUser] = useContext(UserContext);
  const loginAction = (e) => {
    e.preventDefault();
    Auth.signin(email, password)
    .then(payload => {
        setUser(true);
        pars.history.push('/lists');
    })
    .catch(rejection => alert(rejection));
  }

  return (
    <>
      <header className="navbar navbar-light bg-light">
        <Nav variant="tabs" className=" mx-auto">
          <Nav.Item className="px-2">
            <NavLink className="nav-link" activeClassName="active" to="/login">LOGIN</NavLink>
          </Nav.Item >
        </Nav>
      </header>
      <Form className="form-login mt-5 mx-auto">
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <FormControl type="email" id="inputEmail" placeholder="witting.jana@example.net"
          onChange={ e => setEmail(e.target.value)} autoFocus/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <FormControl type="password" id="inputPassword" className="mt-1" placeholder="test" 
          onChange={ e => setPassword(e.target.value)} required/>
        <Container className="justify-content-center">
          <Button variant="primary" className="btn-lg btn-block mt-2" type="submit" onClick={loginAction}>
            <FaLogin /> log in
          </Button>
        </Container>
      </Form>
    </>
  );
}
