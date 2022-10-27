import React from "react";
import style from "./styles/ErrorSiteStyle";
import { withStyles } from "@mui/styles";

function ErrorSite(props) {
  const { classes } = props;

  return <div className={classes.container}>Error 404: Page not Found</div>;
}

export default withStyles(style)(ErrorSite);
