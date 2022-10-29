import React, { memo, useContext } from "react";
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

const words = {
  spanish: {
    title: "Restaurante",
    description:
      "Permítase exaltar todos sus sentidos en este hermoso valle, apreciando la belleza paisajística del lugar con su majestuosa Palma de cera matizada con la gran gama de verdes de sus montañas, disfrutando de su exquisita gastronomía con su protagonista, la trucha, plato típico de la región preparada en variadas y deliciosas formas. Las palmas de Cocora ofrece a sus clientes la posibilidad de degustar de un delicioso plato en diferentes ambientes según su gusto.",
    menuTitle: "Echale un vistazo a nuestro ",
    menu: "menú",
    ambientTitle: "Ambientes",
    romantic: "Ambiente Romántico",
    romanticText:
      "Deléitese al interior del restaurante con ambiente romántico alrededor de una calurosa chimenea.",
    nature: "Ambiente de Naturaleza",
    natureText:
      "Déjese llevar por la naturaleza sentado en mesas rusticas bajo los árboles en el jardín de los gnomos disfrutando de un exquisito plato mientras apreciamos la danza de los gansos en la tranquilidad nuestro lago.",
    cultural: "Ambiente Folclórico Quindiano",
    culturalText:
      "Si desea un ambiente folclórico disfrute de la pagoda, con sus mesas de tronco de árbol, sintiendo la pureza del aire y el aroma de una buena taza de café de la casita quindiana.",
  },
  english: {
    title: "Restaurant",
    description:
      "Allow yourself to connect with all of your senses in this beautiful valley, admiring the amazing landscape with its wax palm trees that fill its mountains, enjoying the exquisit cuisine with the main character, the trout, a traditional dish cooked in all of its variants. Las Palmas de Cocora offers its clients the possibility to enjoy a delicious meal in the environment that best suits you.",
    menuTitle: "Take a look at our ",
    menu: "menu",
    ambientTitle: "Environments",
    romantic: "Romantic Environment",
    romanticText:
      "Give yourself a treat inside the restaurant with a romantic environment around a hot fireplace",
    nature: "Natural Environment",
    natureText:
      "Embrace the nature while you are sitting in our rustic tables under the troll's garden trees, enjoy your meal while amiring the geese dance in the tranquility of our lake.",
    cultural: "Flokloric Environment",
    culturalText:
      "If what you are looking for is a traditional Quindian experience, enjoy our Pagoda with its tables made out of regional trees, all while breathing the purest of airs and the scent of a good cup of coffee from our coffee house.",
  },
};

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
              <h3>
                {menuTitle}{" "}
                <a
                  className={classes.menu}
                  href={Menu}
                  target="_ blank"
                  rel="noreferrer"
                >
                  {menu}
                </a>
              </h3>
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

export default withStyles(style)(memo(Restaurant));
