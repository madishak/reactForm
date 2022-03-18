import { combineReducers } from "redux";
import users from "./containers/LogIn/reducer";
import contacts from "./containers/Contacts/reducer";


export default combineReducers({
    users,
    contacts,
});