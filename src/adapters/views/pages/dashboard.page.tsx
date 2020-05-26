import React, { useEffect, SFC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { receiveRevenuesUseCase } from "../../../core/use-cases/revenue.use-case";
import { IAppState } from "../../../core/store/root-reducer";
import { IRevenueState } from "../../../core/store/revenue/revenue.types";
import { Loader } from "../components/loader.component";
import { revenueCells } from "../../../core/entities/revenue.entity";
import { Layout } from "../layout";

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
  },
}));

export const Dashboard: SFC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectRevenue = useSelector<IAppState, IRevenueState>((state) => state.revenue);

  useEffect(() => {
    dispatch(receiveRevenuesUseCase());
  }, []);

  if (selectRevenue.isLoading) return <Loader />;

  return (
    <Layout title="Dashboard">
      <Grid container spacing={3} wrap="nowrap">
        {revenueCells.map((revenueProp) => (
          <Grid item key={revenueProp.key} xs>
            <Paper id="outlined-basic" className={classes.paper}>
              {revenueProp.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {selectRevenue.revenues.map((revenue) => (
        <Grid key={revenue.uid} container spacing={3} wrap="nowrap">
          {revenueCells.map((revenueProp) => (
            <Grid item key={revenueProp.key} xs>
              <Paper id="outlined-basic" className={classes.paper} variant="outlined">
                {revenue[revenueProp.key]}
              </Paper>
            </Grid>
          ))}
        </Grid>
      ))}
    </Layout>
  );
};
