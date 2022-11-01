import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/HorsebackridingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/HorsebackridingWords";

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

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"610px"} height={"600px"} />
        {language === "spanish" ? (
          <p>
            Deguste de un exquisito plato de trucha y continúe su experiencia en
            el Valle de Cócora en Salento Quindío con cabalgatas y caminatas,
            aventuras que no pueden faltar en su agenda de vacaciones, un
            paisaje único en el mundo rodeado de palmas de cera en medio de la
            montaña.
            <br /> <br />
            Adentrese en los misteriosos y lujosos paisajes del valle, dejese
            llevar por la naturaleza y disfrute de una paz y tranquilidad que
            solo encontrará en medio de estas montañas.
            <br /> <br />
            Dejese contagiar por los paisajes verdes, la fauna silvestre y el
            sentimiento de libertad!
          </p>
        ) : (
          <p>
            Enjoy a exquisit dish of trout and continue with your experience
            inside the Cocora Valley in Salento, Quindío, with a horse ride or a
            hike, an adventure that you cannot miss, an unique scenery surround
            of wax palm trees in the middle of the Andes range.
            <br /> <br />
            Enter the mysterious and luxiurious landscapes of the Valley,
            embrace the nature and enjoy the peace and tranquility that you will
            only find here.
            <br /> <br />
            Let yourself be charmed by the green landscape, the fauna of the
            Valley and the feeling of freedom!
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(Horsebackriding);
