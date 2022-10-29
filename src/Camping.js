import React, { memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CampingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

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

const words = {
  spanish: {
    title: "Campamento",
    description:
      "El Eco-Hotel Las Palmas de Cócora cuenta con un amplio espacio verde bajo un cielo descubierto, en las noches poblado de estrellas y constelaciones, se ubica en el centro de un paisaje exótico y exuberante, adaptado para camping.",
    services: "En esta zona ofrecemos servicios de: ",
    parking: "Parqueadero",
    pagoda: "Ramada con Iluminación",
    bathrooms: "Baterías sanitarias",
    showers: "Duchas para damas",
    horsemen: "Caballeros",
    sink: "Lava Platos",
    firewood: "Venta de leña seca, lista para ser encendida",
    firewoodPrice: "Valor leña: ",
    campingPrice: "Valor Camping por Persona la noche: ",
    ownCampingEquipment: "llevando su equipo de camping",
    note: "NOTA: ",
    rules:
      "El camping maneja un reglamento de uso y comportamiento, con la finalidad de lograr mantener un ambiente tranquilo y armonioso.",
  },
  english: {
    title: "Camping",
    description:
      "The Eco-Hotel Las Palmas de Cocora has a vast green space under the night sky, at night full with shining stars and constellations. The camping is located in the middle of an exotic scenery where you can feel connected with nature.",
    services: "Camping zone services: ",
    parking: "Parking",
    pagoda: "Illuminated Pagoda for the night",
    bathrooms: "Bathrooms",
    showers: "Shower for ladies",
    horsemen: "Horsemen",
    sink: "Dish washing zone",
    firewood: "We sell dry firewood ready to be lit",
    firewoodPrice: "Firewood Price: ",
    campingPrice: "Camping Price per Person per Night: ",
    ownCampingEquipment: "bringing your camping equipment",
    note: "NOTE: ",
    rules:
      "The camping zone has a regulation with the objective of maintaining order and keep a safe and calm environment.",
  },
};

function Camping(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description,
    services,
    parking,
    pagoda,
    bathrooms,
    showers,
    horsemen,
    sink,
    firewood,
    firewoodPrice,
    campingPrice,
    ownCampingEquipment,
    note,
    rules,
  } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={images} width={"700px"} height={"500px"} />
        <div className={classes.description}>
          <p>{description}</p>
          <ul className={classes.list}>
            <Typography variant="h4">{services}</Typography>
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>{parking}</li>
              <li>{pagoda}</li>
              <li>{bathrooms}</li>
              <li>{showers}</li>
              <li>{horsemen}</li>
              <li>{sink}</li>
            </div>
          </ul>
          <ul className={classes.list}>
            {firewood}
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <li>
                <span style={{ fontWeight: "900" }}>{firewoodPrice}</span>
                <span style={{ textDecoration: "underline" }}>$20.000</span>
              </li>
              <li>
                <span style={{ fontWeight: "900" }}>{campingPrice}</span>
                <span style={{ textDecoration: "underline" }}>$20.000</span>,
                {ownCampingEquipment}
              </li>
            </div>
          </ul>
          <p>
            <span style={{ fontWeight: "900" }}>{note}</span>
            {rules}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Camping));
