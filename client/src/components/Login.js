import React, { useState, useEffect } from 'react';
import TextInput from './TextInput'


function Login(props){

    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);

    function onChangeForm(e) {
        console.log(e.target.value);
        if (e.target.name === 'email') {
            setUser(e.target.value);
        } else if (e.target.name === 'password') {
            setPass(e.target.value);
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Login</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <TextInput label={"Email"} id={"email"} className={'form-control'} onChange={(e) => onChangeForm(e)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <TextInput label={"Password"} id={"password"} className={'form-control'} type={"password"} onChange={(e) => onChangeForm(e)} />
                            </div>
                        </div>
                        <button type="button" onClick={props.login({ user, pass })} className="btn btn-danger">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login