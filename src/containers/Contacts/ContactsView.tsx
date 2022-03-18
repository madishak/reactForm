import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button, Typography } from "@mui/material";
import { CONTACT_REMOVE } from "../../constants";


const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const ContactsView = (props) => {
  const { contacts } = props;
  const dispatch = useDispatch();
  console.log("Con", contacts);
  contacts.map((el) => console.log(el.id, el.name));

  const handleRemove = (contactId: String) => () => {
      console.log(contactId)
      dispatch({ type: CONTACT_REMOVE, contactId })

  }

  const handleEdit= () => {
      
}

  return (
    <div>
      {!contacts.lengh
        ? contacts.map(({ id, name, phone, description }) => (
            <div key={Number(id)}>
              {name}, {phone}, {description}

              <Button onClick={handleRemove(id)} type="button" variant="contained">Delete</Button>
              <Button type="button" variant="contained">Edit</Button>
            </div>
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps)(ContactsView);
