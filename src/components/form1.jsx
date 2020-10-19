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

export default function BasicTextFields() {
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
      <TextField
        id="outlined-basic"
        label="Zip/Postal Code"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Secondary mobile Number"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Email address" variant="outlined" />
      <TextField id="outlined-basic" label="ID number" variant="outlined" />
      <TextField type="date" InputLabelProps={{ shrink: true }}></TextField>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}
