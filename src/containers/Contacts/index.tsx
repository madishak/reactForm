import React from "react";
import { TextField, Button, Typography } from "@mui/material";

const Contacts = () => {


    const handleChange = () => {

    }


    const handleAdd = () => {

    }

  return (
    <div>
      Contacts
      <form>
        <Typography>Error</Typography>
        <TextField
      
          label="username"
          variant="standard"
          required={true}
          name="username"
        
        />
        <Button type="submit" variant="contained">
          ADD
        </Button>
      </form>
    </div>
  );
};

export default Contacts;
