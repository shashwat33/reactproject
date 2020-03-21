
import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Logout from './Components/Logout';

class App extends Component {
  render(){
  return (
    <div className="main">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/admin" component={Admin} />
      <Route  path="/logout" component={Logout} />
    </Switch>
    </div>
  );
}
}

 /*const A = () =>{
  return(
    <div>
    <h1>this is A component</h1>
    <Link to="/b">B component</Link>
    </div>
  )
}*/
  /*const B = ()=>{
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
  }*/





export default App;
