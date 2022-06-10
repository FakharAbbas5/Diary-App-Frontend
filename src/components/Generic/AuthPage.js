import { Box, Container, Grid } from "@mui/material";
import React from "react";

const AuthPage = ({ title, children, onSubmit, data }) => {
  const submitHandler = async () => {
    console.log("here!");
    await onSubmit(data);
  };

  return (
    <Box className='authPage'>
      <Grid container className='row-centered'>
        <Grid className='authPage__box' xs={10} sm={10} md={8} lg={6} xl={6}>
          <Container className='authPage__box__content'>
            <h1 className='themeColor primary_heading'>{title}</h1>
            <Box
              component='form'
              onSubmit={submitHandler}
              className='authPage__box__content__form u-margin-top-medium'
              validate
            >
              {children}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPage;
