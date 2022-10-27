import React from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CofeeHouseStyle";

function CofeeHouse(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>Casita del Sabor</h1>
      <div className={classes.content}>
        <img
          src={require("./images/CasitaDelSabor.jpeg")}
          alt="Error: Not found"
        />
        <p style={{ padding: "5px" }}>
          Sean todos bienvenidos a la casita del sabor, el lugar perfecto para
          pasar el rato después de comer, tomarse un café o incluso comerse un
          postre!
          <br />
          En su terraza podrá disfrutar de la naturaleza, el aire fresco y de la
          tranquilidad del campo mientras disfruta de los mejores helados
          acompañados del mejor café de la región.
          <br />
          Desde la terraza se tiene una clara vista de la zona de juegos para
          niños, por lo que podrá disfrutar de su postre mientras vigila a sus
          hijo.
        </p>
      </div>
    </div>
  );
}

export default withStyles(style)(CofeeHouse);
