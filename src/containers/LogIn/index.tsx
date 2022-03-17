import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { TextField, Button, Typography } from "@mui/material";
import { LOGIN_FETCH_REQUEST } from "../../constants";

type FormInputs = {
  username?: string,
  password?: string,
}

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

const defaultInputs: FormInputs = {
  username: '',
  password: '',
}

const mapStateToProps = state => ({
  allowAuthorization: state.users.allowAuthorization
})

const LogIn = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(defaultInputs);
  const { allowAuthorization } = props;
  
  console.log(allowAuthorization)



  const handleChange = <P extends keyof FormInputs>(username: P, password: FormInputs[P]) => {
    setInputs(values => ({...values, [username]: password}))
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    // evt.preventDefault();
    
    console.log(inputs);
    dispatch({ type: LOGIN_FETCH_REQUEST, inputs });
    navigate(`/contacts`);
  
  };


  // useEffect(() => {
  //   if (allowAuthorization === true) {
  //     console.log('OK')
  //     navigate(`/contacts`);
  //   }
  //   console.log('&&&&&&&&&OK')
  // }, [])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography>Error</Typography>
      <TextField
        onChange={(evt) => handleChange('username', evt.currentTarget.value)}
        label="username"
        variant="standard"
        required={true}
        name="username"
        value={inputs?.username || ''}
      />
      <TextField
        onChange={(evt) => handleChange('password', evt.currentTarget.value)}
        label="email"
        variant="standard"
        required={true}
        name="password"
        value={inputs?.password || ''}
      />
      <Button className={classes.button} type="submit" variant="contained">
        SUBMIT
      </Button>
    </form>
  );
};

export default connect(mapStateToProps)(LogIn);
