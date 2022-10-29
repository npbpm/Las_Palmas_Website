import React, { memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/ArriveStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: {
    title: "Como llegar",
  },
  english: {
    title: "How to Arrive",
  },
};

function Arrive(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <img
        className={classes.img}
        src={require("./images/FrenteEnteroRestaurante.jpeg")}
        alt="Restaurant not found"
      />
      <a
        href="https://g.page/valle-del-cocora-salento?share"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={classes.img}
          src={require("./images/MapaLasPalmas.PNG")}
          alt="Google Maps not found"
        />
      </a>

      <div className={classes.description}>
        {language === "spanish" ? (
          <p className={classes.paragraph}>
            Estamos Ubicados en el km 10 del Valle de Cocora.
            <br />A 15 minutos en carro desde salento, somos el primer
            restaurante a su izquierda
            <br />
            Si no cuentan con un vehículo personal, siempre pueden optar por los
            jeeps que suben al valle, estos los dejaran justo en la entrada del
            restaurante.
          </p>
        ) : (
          <p className={classes.paragraph}>
            We are located on the 10<sup>th</sup> Km of the Cocora Valley.{" "}
            <br /> We are just 15 minutes away from Salento, the first
            restaurant to your left.
            <br />
            If you don't have a vehicle, you can always hire a jeep in Salento,
            they will take you into the Valley and leave right at our door.
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(memo(Arrive));
