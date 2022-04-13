import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Players from "./components/Players";
import Player from "./components/Player";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import Splash from "./components/Splash";
import { authenticate } from "./store/session";
import { Component } from "react";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
  <div className='container'>
    <Router history={history}>
      <div className='Header'> 
      <NavBar />
      </div>
      <Switch>
      <div className='Main'>
      <Route path="/welcome" exact={true}>
          <Splash />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/player/:playerId" exact={true} >
          <Player /><Comment/>
          
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          
          <Players/>
        </ProtectedRoute>
        <Route>
         
        </Route>
        </div>
      </Switch>
      <div className='Footer'> 
      <Footer />
      </div>
    </Router>
  </div>
  );
}


export default App;
