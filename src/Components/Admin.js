import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Admin.css';

export default class Admin extends Component {

    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/" />

        }
        return (
            //<div>
                //<h1>this is an admin page only auth people can see this</h1>












                <div class="bgimg">
	       <div class="menu">
		       <div class="leftmenu">
			   <h4> ADMIN PAGE</h4>	
			   </div>
			    <div class="rightmenu">
				<ul>
				    <li>HOME</li>
					<li>SERVICES</li>
					<li>CONTACT US</li>
					<li>ABOUT US</li>
					 <Link to="/logout"><li>LOGOUT</li></Link>									
				</ul>
				</div>
		   </div>
                <div class="text">
				  <h4>DESIGN .  DEVLOPMENT  .BRANDING</h4>
				  <h1>CREATIVE AND EXPERIENCED</h1>
				  <h3>WE ARE ONE OF THE MOST POWERFULL DEVLOPERS</h3>
				  <button id="one"> BUTTON</button>
				  <button id="two"> BUTTON </button>
				  
				</div> 		
                  
	  </div>














                
            //</div>
        )
    }
}
