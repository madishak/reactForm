import { CONTACT_ADD, CONTACT_REMOVE } from "../../constants";

const testContacts = {
    '1': {
        'id': 1,
        'name': 'Obi-Wan',
        'phone': '895623',
        'description': 'friend',
    },
    '2': {
      'id': 2,
        'name': 'Leya',
        'phone': '895652623',
        'description': 'collegue',
    },
    '3': {
      'id': 3,
        'name': 'Bern',
        'phone': '895652623',
        'description': 'friend',
    }
}

let count = 4;

const contacts = (state = [], action) => {
    switch (action.type) {
      case CONTACT_ADD: {
        const { contactInputs } = action;
        const { [1]: value1, [2]: value2, [3]: value3 } = testContacts
        const res = [ ...state, value1, value2, value3, { ...contactInputs }]
        console.log(res);
        return res;
      }
      case CONTACT_REMOVE: {
        const { contactId } = action;
        return state.filter(({ id }) => id !== contactId);
      }
      default:
        return state;
    }
  };

  export default contacts;