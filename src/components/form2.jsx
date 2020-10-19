import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields1() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Country of recidence"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="landline" variant="outlined" />
      <TextField id="outlined-basic" label="City" variant="outlined" />
      <TextField id="outlined-basic" label="middle name" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
      <TextField id="outlined-basic" label="Street" variant="outlined" />
    </form>
  );
}
