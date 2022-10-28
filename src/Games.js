import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/GamesStyle";
import { Typography } from "@mui/material";

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

  return (
    <div className={classes.container}>
      <Typography variant="h1">Atracciones</Typography>
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
            <h4>
              LAS PALMAS DE COCORA lo invita a que disfrute de nuestras
              instalaciones para niños y adultos:
            </h4>
            <li>PARQUE INFANTIL</li>
            <li>CANCHA DE VOLEY-VERDE</li>
            <li>CANCHA DE MICRO FÚTBOl</li>
            <li>TERNEROS</li>
            <li>LAGO CON GANSOS</li>
            <li>CABALLOS PARA HACER CABALGATAS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Games));
