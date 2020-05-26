import React, { useState, SFC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Icon, Grid } from "@material-ui/core";
import { revenueCells } from "../../../core/entities/revenue.entity";
import { IRevenueDTO } from "../../../core/DTO/revenue.DTO";
import { useDispatch } from "react-redux";
import { createRevenueUseCase } from "../../../core/use-cases/revenue.use-case";
import { Layout } from "../layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const AddRevenue: SFC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [revenue, setRevenue] = useState<IRevenueDTO>({
    amountExcludingTax: 0,
    amountIncludingTax: 0,
    amountVAT: 0,
    customerName: "",
    paiementMethod: "",
    reference: "",
  });

  const onChange = (e: any) => {
    setRevenue({
      ...revenue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout title="Ajouter un revenu">
      <Grid container spacing={3} wrap="nowrap">
        {revenueCells.map((revenue) => (
          <TextField
            onChange={onChange}
            key={revenue.key}
            id="outlined-basic"
            label={revenue.title}
            name={revenue.key}
            variant="outlined"
          />
        ))}
        <Button
          onClick={() => dispatch(createRevenueUseCase(revenue))}
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Ok
        </Button>
      </Grid>
    </Layout>
  );
};
