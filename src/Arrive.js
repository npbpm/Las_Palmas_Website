import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/ArriveStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/ArriveWords";

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
        href="https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=ALiCzsahgPAlD5SdZC-i4R02AmNiPDM9hA:1667215479376&q=las%20palmas%20de%20cocora&ved=2ahUKEwiW6KXTrYr7AhVRgc4BHRyxBqAQvS56BAgREAE&biw=1920&bih=994&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13620438303685816251&lqi=ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF&rlst=f#rlfi=hd:;si:13620438303685816251,l,ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF;mv:[[4.639404799999999,-75.4798235],[4.635233400000001,-75.5664604]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
        target="_blank"
        rel="noreferrer"
        className={classes.clickableImg}
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

export default withStyles(styles)(Arrive);
