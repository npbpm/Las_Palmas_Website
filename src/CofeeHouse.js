import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CofeeHouseStyle";
import { Typography } from "@mui/material";

function CofeeHouse(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h1">Casita del Sabor </Typography>

      <div className={classes.content}>
        <img
          src={require("./images/CasitaDelSabor.jpeg")}
          alt="Error: Not found"
        />
        <p>
          Sean bienvenidos a la Casita del Sabor, el lugar perfecto para pasar
          el rato después de comer, tomarse un café o incluso comerse un postre!
          <br /> <br />
          En su terraza podrá disfrutar de la naturaleza, el aire fresco y de la
          tranquilidad del campo mientras disfruta de los mejores helados
          acompañados del mejor café de la región.
          <br /> <br />
          Desde la terraza se tiene una clara vista de la zona de juegos para
          niños, por lo que podrá disfrutar de su postre mientras vigila a sus
          hijos.
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(CofeeHouse));
