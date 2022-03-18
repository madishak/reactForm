import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import { uniqueId } from 'lodash';
import { CONTACT_ADD } from "../../constants";
import ContactsView from "../Contacts/ContactsView";

type ContactFormInputs = {
  id: string,
  name?: string,
  phone?: string,
  description?: string,
}

const count = 4;

const defaultInputs: ContactFormInputs = {
  id: uniqueId(1),
  name: '',
  phone: '',
  description: '',
}

const Contacts = () => {
  const [contactInputs, setContactInputs] = useState(defaultInputs);
  const dispatch = useDispatch();


    const handleChange = <P extends keyof ContactFormInputs>(key: P, value: ContactFormInputs[P]) => {
      setContactInputs(values => ({ ...values, [key]: value }))
    }


    const handleAdd = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      console.log(contactInputs)
      dispatch({ type: CONTACT_ADD, contactInputs })

    }

  return (
    <div>
      Contacts
      <form onSubmit={handleAdd}>
        <Typography>Error</Typography>
        <TextField
          onChange={(evt) => handleChange('name', evt.currentTarget.value)}
          label="name"
          variant="standard"
          required={true}
          name="name"
          value={contactInputs?.name || ''}
        />
         <TextField
          onChange={(evt) => handleChange('phone', evt.currentTarget.value)}
          label="phone"
          type="phone"
          variant="standard"
          required={true}
          name="phone"
          value={contactInputs?.phone || ''}
        />
         <TextField
          onChange={(evt) => handleChange('description', evt.currentTarget.value)}
          label="description"
          type="text"
          variant="standard"
          required={true}
          name="description"
          value={contactInputs?.description || ''}
        />
        <Button type="submit" variant="contained">
          ADD
        </Button>
      </form>

      <ContactsView/>
    </div>
  );
};

export default Contacts;
