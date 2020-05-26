import React, { SFC } from "react";
import { Drawer } from "../components/drawer.component";
import { Header } from "../components/header.component";
import { makeStyles } from "@material-ui/core";

interface IProps {
  title: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 60,
  },
}));

export const Layout: SFC<IProps> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={title} />
      <Drawer />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
