import {
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILURE,
  } from "../../constants";
  
  export const loginFetchRequest = (inputs) => ({
      type: LOGIN_FETCH_REQUEST,
      inputs,
  })
  
  export const loginFetchSuccess = (users, inputs) => ({
      type: LOGIN_FETCH_SUCCESS,
      users,     
      inputs, 
  })
  
  export const loginFetchFailure = (message: Error) => ({
      type: LOGIN_FETCH_FAILURE,
      message,
  })