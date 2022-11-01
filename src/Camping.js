import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import style from "./styles/CampingStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/CampingWords";

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

export default withStyles(style)(Camping);
