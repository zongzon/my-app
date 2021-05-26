import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import info from './info/info';
import login from './login/login';

class App extends React.Component {
  render(){
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path='/login' component={login}/>
          <Route path='/info' component={info}/>
        </Switch>
      </Router>
    </div>
    )
    }
  
}

export default App;
