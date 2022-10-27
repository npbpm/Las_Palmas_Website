import React from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CampingStyle";

const images = [
  {
    url: "./images/CampingZone.jpeg",
  },
  {
    url: "./images/camping1.jpeg",
  },
  {
    url: "./images/camping3.jpeg",
  },
];

function Camping(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <h1>Camping</h1>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
        <div className={classes.description}>
          <p>
            El Eco-Hotel Las Palmas de Cócora cuenta con un amplio espacio verde
            bajo un cielo descubierto, en las noches poblado de estrellas y
            constelaciones, se ubica en el centro de un paisaje exótico y
            exuberante, adaptado para camping.
          </p>
          <ul className={classes.list}>
            <h4>En esta zona ofrecemos servicios de: </h4>
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>Parqueadero</li>
              <li>Ramada con Iluminación</li>
              <li>Baterías sanitarias</li>
              <li>Duchas para damas</li>
              <li>Caballeros</li>
              <li>Lava platos</li>
            </div>
          </ul>
          <ul className={classes.list}>
            Venta de leña seca, lista para ser encendida
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>
                <span style={{ fontWeight: "900" }}>Valor leña: </span>
                <span style={{ textDecoration: "underline" }}>$20.000</span>
              </li>
              <li>
                <span style={{ fontWeight: "900" }}>
                  Valor Camping por Persona la noche:{" "}
                </span>
                <span style={{ textDecoration: "underline" }}>$20.000</span>,
                llevando su equipo de camping
              </li>
            </div>
          </ul>
          <p>
            <span style={{ fontWeight: "900" }}>NOTA: </span>
            El camping maneja un reglamento de uso y comportamiento, con la
            finalidad de lograr mantener un ambiente tranquilo y armonioso.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Camping);
