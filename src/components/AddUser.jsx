import React, { useState } from "react";
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from "@mui/material";
import { addUser } from "../service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  lastname: "",
  email: "",
  rent: "",
  time: ""
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, lastname, email, rent, time } = user;

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("/all");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Add Residents Details
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>First Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Last Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="lastname" value={lastname}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Email address</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email" value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Rent ($)</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="rent" value={rent}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Time In e.g: 10:30</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="time" value={time}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained" onClick={() => addUserDetails()}
              color="primary" align="center"
            >
              Add User
            </Button>
            <Button
              onClick={() => history.push("/all")} variant="contained"
              color="secondary" align="center" style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default AddUser;
