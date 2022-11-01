import React from "react";
import { Typography } from "@mui/material";
import "./styles/LoadingStyles.css";

function Loading() {
  return (
    <div id="container">
      <div className="words word-1">
        <Typography variant="h1">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </Typography>
      </div>
    </div>
  );
}

export default Loading;
