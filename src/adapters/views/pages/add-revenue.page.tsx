import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Icon, Grid } from "@material-ui/core";
import { Drawer } from "../components/drawer.component";
import { revenueCells } from "../../../core/entities/revenue.entity";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const AddRevenue = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>
        <Grid container spacing={3} wrap="nowrap">
          {revenueCells.map((revenue) => (
            <TextField key={revenue.key} id="outlined-basic" label={revenue.title} variant="outlined" />
          ))}
          <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
            Ok
          </Button>
        </Grid>
      </main>
    </div>
  );
};
