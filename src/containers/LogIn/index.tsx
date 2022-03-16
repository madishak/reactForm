import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from '@mui/styles';
import { TextField, Button, Typography } from "@mui/material";
import { LOGIN_FETCH_REQUEST } from "../../constants";

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap column",
    maxWidth: "250px",
  },
  button: {
    marginTop: "15px",
  },
});

const LogIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
   
    setUsername(evt.target.value);
  };

  const handleChangePass = (evt: React.ChangeEvent<HTMLInputElement>) => {
    
    setPass(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // if (!login.length || !pass.length) {
    //     console.log('Error')
    // }
   
    console.log(username, pass);
    dispatch({ type: LOGIN_FETCH_REQUEST, username, pass });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography>Error</Typography>
      <TextField
        onChange={handleChangeUsername}
        label="username"
        variant="standard"
        required={true}
        value={username}
      />
      <TextField
        onChange={handleChangePass}
        label="email"
        variant="standard"
        required={true}
        value={pass}
      />
      <Button className={classes.button} type="submit" variant="contained">
        SUBMIT
      </Button>
    </form>
  );
};

export default LogIn;
