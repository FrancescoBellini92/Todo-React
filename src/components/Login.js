/*
Here we define the login component, that consume UserContext state by using the useContext hook
*/

import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../containers/UserContext';
import  {FaLogin } from './Icons';
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
            <nav className="navbar navbar-light bg-light">
                <ul className="nav nav-tabs mx-auto">
                    <li className="nav-item px-2">
                        <NavLink className="nav-link" activeClassName="active" to="/login">LOGIN</NavLink>
                    </li>
                </ul>
            </nav>
            <form className="form-login container mt-5 mx-auto">
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeHolder="troy18@example.org"
                    onChange={ e => setEmail(e.target.value)} autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control mt-1" placeHolder="test" 
                    onChange={ e => setPassword(e.target.value)} required/>
                <div className="container  justify-content-center">
                    <button className="btn btn-lg btn-block btn-primary mt-2 " type="submit" onClick={loginAction}>
                        <FaLogin /> log in
                    </button>
                </div>
            </form>
        </>
    );
}
