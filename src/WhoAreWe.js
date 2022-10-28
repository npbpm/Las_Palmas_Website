import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/WhoAreWeStyle";
import { Typography } from "@mui/material";

function WhoAreWe(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h1">Quienes Somos?</Typography>
      <div className={classes.description}>
        <p className={classes.paragraphHistory}>
          Tenemos el orgullo de decir que somos el primer restaurante en el
          Valle de Cocora; gestores de la corriente turística hacia la región
          con una tradición de más de 30 años en el departamento del Quindío.
          <br />
          El Eco-Hotel Las Palmas de Cocora ha sido desde hace más de 30 años un
          gran pilar en el turismo de la zona, precursores en la hotelería y
          restaurantería. <br />
        </p>
        <img
          className={classes.imgEntrance}
          src={require("./images/Entrada.jpeg")}
          alt="Not found"
        />
      </div>
      <Typography variant="h3">Nuestra Historia</Typography>
      <div className={classes.history}>
        <p className={classes.paragraph}>
          Desde sus inicios, Las Palmas de Cocora han sido un restaurante
          familial, fundado hace más de 30 años por el ganadero Alberto Pérez
          Puerta y su esposa Maria Teresa Puerta Manzano.
          <br />
          Fue el primer restaurante que apareció en el Valle de Cocora
          impulsando así el turismo y el desarrollo de la región.
          <br />
          Hemos sido durante años un negocio familiar, por lo que nos
          preocupamos por hacer que cada quién se sienta como en su casa
        </p>
        <img
          className={classes.img}
          src={require("./images/MariaTYAlberto.jpeg")}
          alt="img Not found"
        />
        <p className={classes.paragraph}>
          Todos nuestros esfuerzos siempre han sido y siempre serán para hacer
          de este el lugar por excelencia para pasar un buen momento lejos de la
          ciudad, en familia, impregnandose de la naturaleza y de la hermosura
          del Valle.
          <br />
        </p>
      </div>
      <Typography variant="h3">Asociaciones</Typography>
      <div className={classes.society}>
        <img
          className={classes.imgCertificate}
          src={require("./images/CertificacionPalmas.png")}
          alt="Error: Not Found"
        />
      </div>
    </div>
  );
}

export default withStyles(style)(memo(WhoAreWe));
