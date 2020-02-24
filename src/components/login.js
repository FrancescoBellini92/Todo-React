import React, {useState} from 'react';
import Auth from '../auth/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAction = (e) => {
        e.preventDefault();
        Auth.signin(email, password)
        .then(payload => {
            console.log(payload.access_token);
        })

    }

    return (
        <form className="form-login mx-auto mt-5">
            <h1 className="h3 mb-3 font-weight-normal text-center">Please login</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" 
            onChange={ e => setEmail(e.target.value)} autofocus/>
            <label for="inputPassword" className="sr-only">Password</label>
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
