import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar'
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

//import Paper from 'material-ui/Paper';
//import Paper1 from './Paper'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';



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

       /* const style = {
           button: { margin: 12
           }
          };*/
  
        return (
 <div>
                <Navbar />           
            <div className= "formdiv">   
            
                <h1 >LOGIN</h1>
                <br/>
                <br/>
                <form >
            
            <TextField
      hintText="Enter Your Username here"
      floatingLabelText="Username"
      underlineStyle={styles.underlineStyle}
      name="username" value={this.state.username} onChange={this.onChange}
    />
                <br/>               
                <br/>
                
                <TextField
      hintText="password"
      floatingLabelText="Enter Password"
      type="password"
      name="password" value={this.state.password} onChange={this.onChange}
      underlineStyle={styles.underlineStyle}
      
    />
                <br/>
                <br/>
                <br/>
                
                <RaisedButton label="Submit" primary={true} name="Submit" onClick={this.submitForm} />                
                <br/>  
                </form>
                
                
            </div>
    
 </div>
            
        )
    }
}
//const styles = {
   // button: { 
       // margin: 12
   // }
 //  }
/* const style = {
    height: 500,
    width: 350,
    margin:20,
    textAlign: 'center',
    display: 'inline-block',
  };*/
  const styles = {
    errorStyle: {
      color: blue500,
    },
    underlineStyle: {
      borderColor: blue500,
    },
    
  };
  

