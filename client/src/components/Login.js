import React from 'react'
import TextInput from './TextInput'


const Login = ({ onChangeForm, createUser }) => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Login</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <TextInput label={"First Name"} id={"firstname"} className={'form-control'} onChange={onChangeForm} />
                            </div>
                            <div className="form-group col-md-6">
                                <TextInput label={"Last Name"} id={"lastname"} className={'form-control'} onChange={onChangeForm} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <TextInput label={"Email"} id={"email"} className={'form-control'} onChange={onChangeForm} />
                            </div>
                        </div>
                        <button type="button" onClick={(e) => createUser()} className="btn btn-danger">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login