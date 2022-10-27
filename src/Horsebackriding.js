import React from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/HorsebackridingStyle";

const images = [
  {
    url: "./images/caballos1.jpeg",
  },
  {
    url: "./images/caminata1.jpg",
  },
];

function Horsebackriding(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>Paseos Ecológicos a Caballo y Caminatas</h1>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"710px"} height={"800px"} />
        <p style={{ padding: "5px", margin: "5px" }}>
          Deguste de un exquisito plato de trucha y continúe su experiencia en
          el Valle de Cócora en Salento Quindío con cabalgatas y caminatas,
          aventuras que no pueden faltar en su agenda de vacaciones, un paisaje
          único en el mundo rodeado de palmas de cera en medio de la montaña.
          <br />
          Adentrese en los misteriosos y lujosos paisajes del valle, dejese
          llevar por la naturaleza y disfrute de una paz y tranquilidad que solo
          encontrará en medio de estas montañas.
          <br />
          Dejese contagiar por los paisajes verdes, la fauna silvestre y el
          sentimiento de libertad!
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(Horsebackriding);
