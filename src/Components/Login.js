import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Login.css';
import { Paper } from 'material-ui/Paper'

export default class Login extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
         this.onChange = this.onChange.bind(this)
         this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const { username, password } =this.state
        if(username ==="shashwat" && password==="shash"){
            localStorage.setItem("token","shashwattiwariismyname")
            this.setState({
                loggedIn:true
            })
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
  
        return (
            
            <div className= "formdiv">
                <h1 >LOGIN</h1>
                <br/>
                <form onSubmit={this.submitForm}>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                <br/>
                <br/>
                <br/>
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                <br/>
                <br/>
                <br/>
                <input type="Submit"  />
                <br/>  
                </form>
            </div>
            
        )
    }
}

