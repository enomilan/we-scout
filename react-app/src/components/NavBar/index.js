import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import logo from '../../images/wescout.png'

const NavBar = () => {
const user = useSelector(state => state.session.user)  

  return (
    <nav>
        <div className= 'left'>
          <a href="/"><img src={logo} alt='logo' /></a>
        </div>
        <div className= 'right'>
          
        
      

        {  !user ? (<> <NavLink to="/login" exact={true} activeClassName="active" id="login">
            Login
          </NavLink>
        
        
          <NavLink to="/sign-up" exact={true} activeClassName="active" id="signup">
            Sign Up
          </NavLink> </>)
        
        
          : (<> <NavLink to="/users" exact={true} activeClassName="active">
            {/* Users */}
          </NavLink>

          <NavLink to="/" exact={true} activeClassName="active" id='home'>
            Home
          </NavLink>
        
          <LogoutButton /> </>)
          }
        
 
      </div>
    </nav>
  );
}

export default NavBar;
