import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: "3%" }}>
      <div>
        <Button variant="outlined" color="secondary">
          Default
        </Button>
        <Button svariant="outlined" color="secondary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
      </div>
      <hr style={{ height: "2px", backgroundColor: "red" }}></hr>
    </div>
  );
}
