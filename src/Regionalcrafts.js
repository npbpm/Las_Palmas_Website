import React from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/RegionalcraftsStyle";

function Regionalcrafts(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>Artesanías de la región</h1>
      <div className={classes.content}>
        <img src={require("./images/artesanias.jpeg")} alt="Error: Not Found" />
        <p>
          Visite nuestro almacén de artesanía con productos exclusivos
          fabricados por artesanos de Salento donde podrá adquirir un lindo
          souvenir para llevar de recuerdo.
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(Regionalcrafts);
