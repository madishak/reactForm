import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@mui/material";


const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const ContactsView = (props) => {
  const { contacts } = props;
  console.log("Con", contacts);
  contacts.map((el) => console.log(el.id, el.name));

  const handleRemove = (id: String) => () => {
      console.log(id)

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
