import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/GamesStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/GamesWords";

const images = [
  {
    url: "./images/Atracciones.jpeg",
  },
  {
    url: "./images/atracciones1.jpeg",
  },
  {
    url: "./images/ternero1.jpeg",
  },
  {
    url: "./images/gansos1.jpeg",
  },
  {
    url: "./images/caballos1.jpeg",
  },
];

function Games(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, content, games, volley, football, animals, lake, horses } =
    words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"630px"} height={"500px"} />
        <div className={classes.description}>
          <ul>
            <Typography variant="h4">{content}</Typography>
            <li>{games}</li>
            <li>{volley}</li>
            <li>{football}</li>
            <li>{animals}</li>
            <li>{lake}</li>
            <li>{horses}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Games);
