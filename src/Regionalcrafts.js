import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/RegionalcraftsStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/RegionalcraftsWords";

function Regionalcrafts(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, text1, text2, text3 } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <img src={require("./images/artesanias.jpeg")} alt="Error: Not Found" />
        <p>
          {text1}
          <br /> <br />
          {text2}
          <br /> <br />
          {text3}
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(Regionalcrafts);
