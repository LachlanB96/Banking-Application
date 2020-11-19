import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import { getAllUsers, createUser } from './services/UserService'
import { login } from './services/Login'

class App extends Component {

    state = {
        user: {},
        users: [],
        numberOfUsers: 0
    }

    createUser = (e) => {
        createUser(this.state.user)
            .then(response => {
                console.log(response);
                this.setState({ numberOfUsers: this.state.numberOfUsers + 1 })
            });
    }

    login = (e) => {
        console.log("EE")
        console.log(e);
        login(e)
    }

    getAllUsers = () => {
        getAllUsers()
            .then(users => {
                console.log(users)
                this.setState({ users: users, numberOfUsers: users.length })
            });
    }

    onChangeForm = (e) => {
        console.log(e.target.name);
        let user = this.state.user
        if (e.target.name === 'firstname') {
            user.firstName = e.target.value;
        } else if (e.target.name === 'lastname') {
            user.lastName = e.target.value;
        } else if (e.target.name === 'email') {
            user.email = e.target.value;
        } else if (e.target.name === 'password') {
            user.password = e.target.value;
        }
        this.setState({ user })
        console.log(this.state.user)
    }

    render() {

        return (
            <div className="App">
                <Header></Header>
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <CreateUser
                                user={this.state.user}
                                onChangeForm={this.onChangeForm}
                                createUser={this.createUser}
                            >
                            </CreateUser>
                            <Login login={this.login}/>
                        </div>
                        <div className="col-md-4">
                            <DisplayBoard
                                numberOfUsers={this.state.numberOfUsers}
                                getAllUsers={this.getAllUsers}
                            >
                            </DisplayBoard>
                        </div>
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Users users={this.state.users}></Users>
                </div>
            </div>
        );
    }
}

export default App;
