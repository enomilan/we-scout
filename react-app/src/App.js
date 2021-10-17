import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
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
    <BrowserRouter>
      <NavBar />
      <Switch>
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
          <Comment/><Player />
          
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <div className='welcome'>
            <h1>Welcome to WeScout.  Scout your favorite players or discover new ones</h1> 
          </div>
          <Players/>
        </ProtectedRoute>
        <Route>
         
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
