import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import Menu from "./images/Menu.pdf";
import style from "./styles/RestaurantStyle";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, green, yellow } from "@mui/material/colors";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AirIcon from "@mui/icons-material/Air";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/RestaurantWords";

const slideImages = [
  {
    url: "./images/Who-are-we.jpeg",
  },
  {
    url: "./images/FrontRestaurant.jpeg",
  },
  {
    url: "./images/FrenteRestaurante.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.43 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.37 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.40 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM.jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(1).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(2).jpeg",
  },
  {
    url: "./images/WhatsApp Image 2022-10-02 at 11.50.45 PM(3).jpeg",
  },
];

function Restaurant(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description,
    menuTitle,
    menu,
    ambientTitle,
    romantic,
    romanticText,
    nature,
    natureText,
    cultural,
    culturalText,
  } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={slideImages} width={"500px"} height={"470px"} />
        <div className={classes.text}>
          <div className={classes.description}>
            <p>{description}</p>
            <div className={classes.menu}>
              <p>
                {menuTitle}{" "}
                <a
                  className={classes.menuItem}
                  href={Menu}
                  target="_ blank"
                  rel="noreferrer"
                >
                  {menu}
                </a>
              </p>
            </div>
            <div className={classes.environments}>
              <h2>{ambientTitle}</h2>
              <ul>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <FavoriteIcon sx={{ color: `${red[700]}` }} />
                    </span>
                    <p>{romantic}</p>
                    <span>
                      <FavoriteIcon sx={{ color: `${red[700]}` }} />
                    </span>
                  </div>

                  <br />
                  <div style={{ marginLeft: "10px" }}>{romanticText}</div>
                </li>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <LandscapeIcon sx={{ color: `${green[700]}` }} />
                    </span>
                    <p>{nature}</p>
                    <span>
                      <LandscapeIcon sx={{ color: `${green[700]}` }} />
                    </span>
                  </div>

                  <br />
                  <div style={{ marginLeft: "10px" }}>{natureText}</div>
                </li>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <AirIcon sx={{ color: yellow[800] }} />
                    </span>
                    <p>{cultural}</p>
                    <span>
                      <AirIcon sx={{ color: yellow[800] }} />
                    </span>
                  </div>
                  <br />
                  <div style={{ marginLeft: "10px" }}>{culturalText}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Restaurant);
