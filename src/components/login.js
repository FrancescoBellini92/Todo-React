/*
Here we define the login component, that consume UserContext state by using the useContext hook
*/

import React, {useState, useContext} from 'react';
import {UserContext} from '../containers/userContext';
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
            console.log(payload.access_token);
        })
        .catch(rejection => alert(rejection));

    }

    return (
        <form className="form-login mx-auto mt-5">
            <h1 className="h3 mb-3 font-weight-normal text-center">Please login</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" 
            onChange={ e => setEmail(e.target.value)} autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control mt-1" placeholder="Password" 
             onChange={ e => setPassword(e.target.value)} required/>
            <div className="checkbox my-2">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-secondary btn-block" type="submit" onClick={loginAction}>Log in</button>
        </form>
    );
}
