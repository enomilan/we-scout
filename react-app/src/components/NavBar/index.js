import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import logo from '../../images/wescout.png'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#101820FF',
  border: '1px solid #000',
  boxShadow: 14,
  p: 0,
};


const NavBar = () => {
const user = useSelector(state => state.session.user)

// Login Modal
const [login, setLogin] = useState(false);
const loginOpen = () => setLogin(true);
const loginClose = () => setLogin(false);
//Sign Up Modal
const [signup, setSignup] = useState(false)
const signupOpen = () => setSignup(true);
const signupClose = () => setSignup(false);
  return (
  <div>

   
  
    <nav>
        <div className= 'left'>
          <a href="/"><img src={logo} alt='logo' /></a>
        </div>
        <div className= 'right'>
        
        
        

        {  !user ? (<> 
        <Button onClick={loginOpen}>login </Button>  
        <Modal open={login}
              onClose={loginClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
        
        <Box sx={style}>
          <LoginForm></LoginForm> 
        </Box>
        </Modal>

        <Button onClick={signupOpen}>signup</Button>  
        <Modal open={signup}
              onClose={signupClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
        
        <Box sx={style}>
          <SignUpForm></SignUpForm>
        </Box>
        </Modal>
        
          <NavLink to="/login" exact={true} activeClassName="active" >
            {/* Login */}
          </NavLink>
        
        

          <NavLink to="/sign-up" exact={true} activeClassName="active" >
            {/* Sign Up */}
          </NavLink> </>)
          
          

          : (<> <NavLink to="/users" exact={true} activeClassName="active">
            {/* Users */}
          </NavLink>

          <NavLink to="/" exact={true} activeClassName="active" >
            <Button>Home</Button>
          </NavLink>
          
          <LogoutButton /> </>)
          }
          
          
 
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
