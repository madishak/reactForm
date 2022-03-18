import { CONTACT_ADD, CONTACT_REMOVE } from "../../constants";

export const contactAdd = (contactInputs) => ({
    type: CONTACT_ADD,
    contactAdd,
})

export const contactRemove = (contactId) => ({
    type: CONTACT_REMOVE,
    contactId,
})