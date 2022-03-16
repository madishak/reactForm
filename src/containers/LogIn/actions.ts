import {
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILURE,
  } from "../../constants";
//   import { Book } from "../../types";
  
  export const loginFetchRequest = (username, pass) => ({
      type: LOGIN_FETCH_REQUEST,
      username, 
      pass,
  })
  
  export const loginFetchSuccess = (users) => ({
      type: LOGIN_FETCH_SUCCESS,
      users,      
  })
  
  export const loginFetchFailure = (message: Error) => ({
      type: LOGIN_FETCH_FAILURE,
      message,
  })