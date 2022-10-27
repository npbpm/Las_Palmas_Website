import React from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CocoravivaStyle";

const images = [
  {
    url: "./images/vivero1.jpeg",
  },
  {
    url: "./images/vivero2.jpeg",
  },
  {
    url: "./images/vivero3.jpeg",
  },
  {
    url: "./images/vivero4.jpeg",
  },
  {
    url: "./images/vivero5.jpeg",
  },
  {
    url: "./images/vivero6.jpeg",
  },
];

function Cocoraviva(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>Cocora Viva - Vivero</h1>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"800px"} height={"700px"} />
        <p style={{ padding: "5px" }}>
          Somos un empresa de talla humana, fundada hace ya 5 años, contamos con
          una gran variedad de plantas para todos los gustos.
          <br />
          Contamos con arreglos florales de todos los tamaños, hechos 100% a
          mano.
          <br />
          Venga y aproveche la oportunidad de llevarse con usted un recuerdo de
          la flora del Valle, con el toque único del{" "}
          <strong>Vivero Cocora Viva</strong>
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(Cocoraviva);
