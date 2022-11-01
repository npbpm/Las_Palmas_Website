import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CocoravivaStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

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

  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.container}>
      <Typography variant="h1">
        Cocora Viva - {language === "spanish" ? "Vivero" : "Florist"}
      </Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"800px"} height={"600px"} />
        {language === "spanish" ? (
          <p>
            Somos un empresa de talla humana, fundada hace ya 5 años, contamos
            con una gran variedad de plantas para todos los gustos.
            <br />
            <br />
            Contamos con arreglos florales de todos los tamaños, hechos 100% a
            mano.
            <br />
            <br />
            Venga y aproveche la oportunidad de llevarse con usted un recuerdo
            de la flora del Valle, con el toque único del{" "}
            <strong>Vivero Cocora Viva</strong>
          </p>
        ) : (
          <p>
            We are a small business with more than 5 years of experience in the
            flowers field, we have a great variety of flowers and plants for
            every taste.
            <br /> <br />
            We have flower arrangements of every size, 100% handmade.
            <br /> <br />
            Comme and take advantage of this opportunity to bring back home a
            memory with the special touch of the{" "}
            <strong>Florist Cocora Viva</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(Cocoraviva);
