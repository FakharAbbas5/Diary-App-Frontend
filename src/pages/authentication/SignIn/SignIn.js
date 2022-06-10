import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthPage from "../../../components/Generic/AuthPage";
import { THEME_COLOR, USER_STORAGE_KEY } from "../../../helpers/variables";
import useAuthentication from "../../../hooks/useAuthentication";

const SignIn = () => {
  const history = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthentication();

  const changeHandler = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    const { password, email } = form;
    if (!email || !password) return alert("Please fill the form correctly!");
    const response = await login(form);

    if (response) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response));
      history("/home");
    }
  };

  return (
    <AuthPage title='Sign In' onSubmit={submitHandler} data={form}>
      <Grid container className='column-centered'>
        <Grid item xl={7} lg={7} md={7} sm={7} xs={8}>
          <TextField
            type='email'
            name='email'
            label='Email'
            id=''
            className='form__input'
            onChange={changeHandler}
            required
            inputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
        </Grid>
        <Grid item xl={7} lg={7} md={7} sm={7} xs={8}>
          <TextField
            type='password'
            name='password'
            label='Password'
            id=''
            className='form__input'
            onChange={changeHandler}
            required
            inputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
        </Grid>
        <Container>
          <Button
            className='u-margin-top-medium medium-theme-button'
            sx={{ background: THEME_COLOR, color: "white" }}
            onClick={submitHandler}
          >
            Sign In
          </Button>
        </Container>
      </Grid>
    </AuthPage>
  );
};

export default SignIn;
