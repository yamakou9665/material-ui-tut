import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({});

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        gutterBottom
        component="h2"
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log("Yout clicked me!")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
