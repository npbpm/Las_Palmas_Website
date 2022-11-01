import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/LodgingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/lodgingWords";

const images = [
  {
    url: "./images/Cabin.jpeg",
  },
  {
    url: "./images/cabin2.jpeg",
  },
  {
    url: "./images/cabin1.jpeg",
  },
];

function Lodging(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
        {language === "spanish" ? (
          <p>
            Viva una experiencia de paz, tranquilidad y armonía que le ofrece
            las Palmas de Cocora en su cabaña construida en madera, rodeada de
            coloridas flores, palmas de cera y enmarcada por la silueta de las
            montañas de la cordillera central, hogar del cóndor andino.
            <br />
            <span style={{ textDecoration: "underline", fontWeight: "900" }}>
              NOTA: EN TEMPORADA BAJA HAY DESCUENTOS EN LAS TARIFAS!!!
            </span>{" "}
            <br /> La cabaña es de 2 pisos completamente independiente.
            <br />
            Capacidad para 16 personas.
          </p>
        ) : (
          <p>
            Here you can experience true peace and bond with the nature that
            offers Las Palmas de Cocora in its cabin built with wood surrounded
            by flowers, wax palm trees and the mountains of the Valley, home of
            the Condor de los Andes.
            <br />
            <span style={{ textDecoration: "underline", fontWeight: "900" }}>
              NOTE: DURING THE LOW SEASON THE PRICES ARE REDUCED!!!
            </span>{" "}
            <br />
            The cabin has 2 floors completely independent from one another.
            <br />
            Capacity for 16 people.
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(Lodging);
