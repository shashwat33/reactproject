 import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'
 
 export default class Logout extends Component {
     constructor(props){
         super(props)
         localStorage.removeItem("token")
     }
     render() {
         return (
             //<div>
                 //<h1>you have been logged out!!!!</h1>

                 <div class="bgimg1">
                 <div class="menu1">
                     <div class="leftmenu1">
                     <h4>Logout Page</h4>	
                     </div>
                      <div class="rightmenu1">
                      <ul>
                          
                          <Link to="/"><li>Login Again</li>	</Link> 								
                      </ul>
                      </div>
                 </div>
                      <div class="text1">
                        
                        <h1>You Have Been Logged Out!!! </h1>
                       
                        
                        
                      </div> 		
                        
            </div>


                 
             //</div>
         )
     }
 }
 