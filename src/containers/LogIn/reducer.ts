import {
    LOGIN_FETCH_REQUEST,
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_FAILURE,
  } from "../../constants";
//   import { BooksAction } from "../../types";


  const users = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_FETCH_REQUEST: {
        return state;
      }
      case LOGIN_FETCH_SUCCESS: {
        const { users } = action;
        console.log(users)
        return { ...state, users };
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