import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';

const NavBar = () => {
const user = useSelector(state => state.session.user)  

  return (
    <nav>
      
        
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        
      <div className= 'right'>

        {  !user ? (<> <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        
        
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink> </>)
        
        
          : (<> <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        
        
          <LogoutButton /> </>)
          }
        
 
      </div>
    </nav>
  );
}

export default NavBar;
