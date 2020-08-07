import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './Home/Home';
import ErrorDefault from './Error/error';
import RepoComponent from './component/repoComponent';
import { useAuth0 } from '@auth0/auth0-react';


const App = () =>{
  const {
    isAuthenticated
  } = useAuth0();

  if(isAuthenticated){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repo" component={RepoComponent} />
        <Route component={ErrorDefault} />
      </Switch>
    )
  }
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={ErrorDefault} />
      </Switch>
    </>
  );
}

export default App;
