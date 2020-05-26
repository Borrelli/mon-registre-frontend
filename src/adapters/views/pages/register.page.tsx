import React, { useEffect, SFC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Icon, Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createUserUseCase } from "../../../core/use-cases/user.use-case";
import { IUserDTO } from "../../../core/DTO/user.DTO";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
  },
}));

export const Register: SFC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUserDTO>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <form className={classes.root} noValidate autoComplete="off">
          <Container maxWidth="md">
            <TextField onChange={onChange} fullWidth required label="Prénom" name="firstname" />
            <TextField onChange={onChange} fullWidth required label="Nom" name="lastname" />
            <TextField onChange={onChange} fullWidth required label="Email" name="email" />
            <TextField onChange={onChange} fullWidth required label="Password" type="password" name="password" />
            <Button
              onClick={() => dispatch(createUserUseCase(user))}
              fullWidth
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
            >
              Ok
            </Button>
          </Container>
        </form>
      </main>
    </div>
  );
};
