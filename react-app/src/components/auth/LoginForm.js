import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { Button, InputLabel } from "@material-ui/core";


const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
 

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demouser = async (e) => {
    e.preventDefault()
    await dispatch(login('demo@aa.io', 'password'))
            
    history.push('/')
    
  }

  if (user) {
    return <Redirect to="/" />;
  }


  return (
    <div className='log_in'>
         
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div>
          <Button type="submit" id='log'>Login</Button>
          </div>
        </div>
        <div>
          <Button onClick={demouser} id='demo'>
            Demo Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
