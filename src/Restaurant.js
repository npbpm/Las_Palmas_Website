import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import Menu from "./images/Menu.pdf";
import style from "./styles/RestaurantStyle";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, green, yellow } from "@mui/material/colors";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AirIcon from "@mui/icons-material/Air";

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

  return (
    <div className={classes.container}>
      <Typography variant="h1">Restaurante</Typography>
      <div className={classes.content}>
        <Slideshow slideImages={slideImages} width={"500px"} height={"470px"} />
        <div className={classes.text}>
          <div className={classes.description}>
            <p>
              Permítase exaltar todos sus sentidos en este hermoso valle,
              apreciando la belleza paisajística del lugar con su majestuosa
              Palma de cera matizada con la gran gama de verdes de sus montañas,
              disfrutando de su exquisita gastronomía con su protagonista, la
              trucha, plato típico de la región preparada en variadas y
              deliciosas formas. Las palmas de Cocora ofrece a sus clientes la
              posibilidad de degustar de un delicioso plato en diferentes
              ambientes según su gusto.
            </p>
            <div className={classes.menu}>
              <h3>
                Échale un vistazo a nuestro{" "}
                <a
                  className={classes.menu}
                  href={Menu}
                  target="_ blank"
                  rel="noreferrer"
                >
                  menu
                </a>
              </h3>
            </div>
            <div className={classes.environments}>
              <h2>Ambientes</h2>
              <ul>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <FavoriteIcon sx={{ color: `${red[700]}` }} />
                    </span>
                    <p>Ambiente Romántico</p>
                    <span>
                      <FavoriteIcon sx={{ color: `${red[700]}` }} />
                    </span>
                  </div>

                  <br />
                  <div style={{ marginLeft: "10px" }}>
                    Deléitese al interior del restaurante con ambiente romántico
                    alrededor de una calurosa chimenea.
                  </div>
                </li>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <LandscapeIcon sx={{ color: `${green[700]}` }} />
                    </span>
                    <p>Ambiente de Naturaleza</p>
                    <span>
                      <LandscapeIcon sx={{ color: `${green[700]}` }} />
                    </span>
                  </div>

                  <br />
                  <div style={{ marginLeft: "10px" }}>
                    Déjese llevar por la naturaleza sentado en mesas rusticas
                    bajo los árboles en el jardín de los gnomos disfrutando de
                    un exquisito plato mientras apreciamos la danza de los
                    gansos en la tranquilidad nuestro lago.
                  </div>
                </li>
                <li>
                  <div className={classes.plans}>
                    <span>
                      <AirIcon sx={{ color: yellow[800] }} />
                    </span>
                    <p>Ambiente Folclórico Quindiano</p>
                    <span>
                      <AirIcon sx={{ color: yellow[800] }} />
                    </span>
                  </div>
                  <br />
                  <div style={{ marginLeft: "10px" }}>
                    Si desea un ambiente folclórico disfrute de la pagoda, con
                    sus mesas de tronco de árbol, sintiendo la pureza del aire y
                    el aroma de una buena taza de café de la casita quindiana.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Restaurant));
