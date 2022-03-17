import {
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILURE,
  } from "../../constants";

  const users = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_FETCH_REQUEST: {
        return state;
      }
      case LOGIN_FETCH_SUCCESS: {
        const { users, inputs } = action;
        let allowAuthorization = false;
        users.forEach(({username}) => username === inputs.username ? allowAuthorization = true : allowAuthorization)
      
        console.log(users)
        // console.log('R', inputs)
        // console.log(allowAuthorization)
        return { ...state, users, allowAuthorization };
      }
      case LOGIN_FETCH_FAILURE: {
        const { message } = action;
        return { ...state, message };
      }
      default:
        return state;
    }
  };

  export default users;