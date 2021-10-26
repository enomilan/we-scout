import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { Button } from "@material-ui/core";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <Button onClick={onLogout} >Logout</Button>;
};

export default LogoutButton;
