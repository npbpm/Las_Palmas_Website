import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/WhoAreWeStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/WhoAreWeWords";

function WhoAreWe(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, history, societies } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.description}>
        {language === "spanish" ? (
          <p className={classes.paragraphHistory}>
            Tenemos el orgullo de decir que somos el primer restaurante en el
            Valle de Cocora, gestores de la corriente turística hacia la región
            con una tradición de más de 30 años en el departamento del Quindío.
            <br />
            El Eco-Hotel Las Palmas de Cocora ha sido desde hace más de 30 años
            un gran pilar en el turismo de la zona, precursores en la hotelería
            y restaurantería. <br />
          </p>
        ) : (
          <p className={classes.paragraphHistory}>
            We are proud to say that we are the first restaurant in the Cocora
            Valley, we are pioneers in the region tourism with more than 30
            years of tradition in the department of El Quindío
          </p>
        )}

        <img
          className={classes.imgEntrance}
          src={require("./images/Entrada.jpeg")}
          alt="Not found"
        />
      </div>
      <Typography variant="h3">{history}</Typography>
      <div className={classes.history}>
        {language === "spanish" ? (
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
        ) : (
          <p className={classes.paragraph}>
            Since its beginning, Las Palmas de Cocora has been a family
            restaurant, founded 30 years ago by the farmer Alberto Pérez Puerta
            alongside with his wife Maria Teresa Puerta Manzano.
            <br />
            It was the first restaurant in the Valley, with its arrival, the
            region was stormed by tourists of all around the world.
            <br />
            As a family business, we know what matters the most when it comes to
            going out with your family, so we make every effort for you to feel
            like you are at home.
          </p>
        )}

        <img
          className={classes.img}
          src={require("./images/MariaTYAlberto.jpeg")}
          alt="img Not found"
        />
        {language === "spanish" ? (
          <p className={classes.paragraph}>
            Todos nuestros esfuerzos siempre han sido y siempre serán para hacer
            de este el lugar por excelencia para pasar un buen momento lejos de
            la ciudad, en familia, impregnandose de la naturaleza y de la
            hermosura del Valle.
          </p>
        ) : (
          <p className={classes.paragraph}>
            All of our efforts have gone and will continue to go towards the
            same objective, to make this a great place to spend some time away
            from the city, in family, filling your soul with nature and the
            beauty of the Valley
          </p>
        )}
      </div>
      <Typography variant="h3">{societies}</Typography>
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

export default withStyles(style)(WhoAreWe);
