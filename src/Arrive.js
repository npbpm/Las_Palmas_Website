import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/ArriveStyle";
import { Typography } from "@mui/material";

function Arrive(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h1">Como llegar</Typography>
      <img
        className={classes.img}
        src={require("./images/FrenteEnteroRestaurante.jpeg")}
        alt="Restaurant not found"
      />
      <a href="https://g.page/valle-del-cocora-salento?share" target="_blank">
        <img
          className={classes.img}
          src={require("./images/MapaLasPalmas.PNG")}
          alt="Google Maps not found"
        />
      </a>

      <div className={classes.description}>
        <p className={classes.paragraph}>
          Estamos Ubicados en el km 10 del Valle de Cocora.
          <br />A 15 minutos en carro desde salento, somos el primer restaurante
          a su izquierda
          <br />
          Si no cuentan con un vehículo personal, siempre pueden optar por los
          jeeps que suben al valle, estos los dejaran justo en la entrada del
          restaurante.
        </p>
      </div>
    </div>
  );
}

export default withStyles(styles)(memo(Arrive));
