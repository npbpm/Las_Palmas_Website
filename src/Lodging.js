import React from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/LodgingStyle";

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

  return (
    <div className={classes.container}>
      <h1>La Cabaña</h1>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
        <p>
          Viva una experiencia de paz, tranquilidad y armonía que le ofrece las
          palmas de cocora en su cabaña construida en madera, rodeada de
          coloridas flores, palmas de cera y enmarcada por la silueta de las
          montañas de la cordillera central.
          <br />
          <span style={{ textDecoration: "underline", fontWeight: "900" }}>
            NOTA: EN TEMPORADA BAJA HAY DESCUENTOS EN LAS TARIFAS!!!
          </span>{" "}
          <br /> La cabaña es de 2 pisos completamente independiente.
          <br />
          Capacidad para 16 personas
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(Lodging);
