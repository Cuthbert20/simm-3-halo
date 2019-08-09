import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Auth extends Component {
    state={
        username:'',
        user_password:''
    }
    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    register = () => {
        const {username, user_password} = this.state
        axios.post('/auth/register', {username, user_password})
        .then(res => {
            console.log(res.data[0])
            this.setState({
                username: '',
                user_password: ''
            })
        })
        .catch(err => {
            alert(err, 'not registering')
        })
    }
    render() {
        return (
            <div>
                Auth
                <input onChange={e => this.handleChange(e, "username")} value={this.state.username} placeholder='username' type="text"/>
                <input onChange={e => this.handleChange(e, "user_password")} value={this.state.user_password} placeholder='password' type="password"/>
                <button >Login</button>
               <Link to='/dashboard' ><button onClick={this.register}>Register</button></Link>
            </div>
        )
    }
}
