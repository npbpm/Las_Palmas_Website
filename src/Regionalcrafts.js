import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/RegionalcraftsStyle";
import { Typography } from "@mui/material";

function Regionalcrafts(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h1">Artesanías de la región</Typography>
      <div className={classes.content}>
        <img src={require("./images/artesanias.jpeg")} alt="Error: Not Found" />
        <p>
          Visite nuestro almacén de artesanías con productos exclusivos
          fabricados por artesanos de Salento donde podrá adquirir un lindo
          souvenir para llevar de recuerdo.
          <br /> <br />
          Nuestras artesanías son fabricadas 100% a mano, con tecnicas tanto
          regionales como de otros paises.
          <br /> <br />
          No pierdas la oportunidad de llevarte un pedazo de la cultura del
          Valle!
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Regionalcrafts));
