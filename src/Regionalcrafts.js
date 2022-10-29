import React, { memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/RegionalcraftsStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: {
    title: "Artesanías de la región",
    text1:
      "Visite nuestro almacén de artesanías con productos exclusivos fabricados por artesanos de Salento donde podrá adquirir un lindo souvenir para llevar de recuerdo.",
    text2:
      "Nuestras artesanías son fabricadas 100% a mano, con tecnicas tanto regionales como de otros paises.",
    text3:
      "No pierdas la oportunidad de llevarte un pedazo de la cultura del Valle!",
  },
  english: {
    title: "Regional Crafts",
    text1:
      "Come visit our crafts store with exclusive products handmade by Salento's craftsmen, here you can buy a souvenir to take home this amazing experience!",
    text2:
      "Every single craft is 100% handmade, using regional and international techniques.",
    text3:
      "Take this once in a lifetime opportunity to bring home a piece of the Cocora Valley!",
  },
};

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

export default withStyles(style)(memo(Regionalcrafts));
