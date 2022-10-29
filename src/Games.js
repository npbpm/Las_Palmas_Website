import React, { memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/GamesStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

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

const words = {
  spanish: {
    title: "Atracciones",
    content:
      "LAS PALMAS DE COCORA lo invita a que disfrute de nuestras instalaciones para niños y adultos:",
    games: "PARQUE INFANTIL",
    volley: "CANCHA DE VOLEY-VERDE",
    football: "CANCHA DE MICRO FÚTBOL",
    animals: "TERNEROS",
    lake: "LAGO CON GANSOS",
    horses: "CABALLOS PARA CABALGATAS",
  },
  english: {
    title: "Attractions",
    content:
      "LAS PALMAS DE COCORA invites you to enjoy our installations for children and adults: ",
    games: "PLAY ZONE",
    volley: "VOLLEYBALL FIELD",
    football: "FOOTBALL FIELD",
    animals: "COW CALVES",
    lake: "GEESE LAKE",
    horses: "HORSE RIDING",
  },
};

function Games(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, content, games, volley, football, animals, lake, horses } =
    words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"630px"} height={"600px"} />
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            backgroundColor: "#eeeeee",
            borderRadius: "13px",
            marginLeft: "40px",
          }}
        >
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

export default withStyles(style)(memo(Games));
