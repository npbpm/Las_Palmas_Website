import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import Slideshow from "./SlideShow";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Typography } from "@mui/material";
import style from "./styles/GlampingStyle";
import { LanguageContext } from "./context/LanguageContext";

const images = [
  {
    url: "./images/glamping2.jpeg",
  },
  {
    url: "./images/glamping3.jpeg",
  },
  {
    url: "./images/glamping1.jpeg",
  },
  {
    url: "./images/glamping4.jpeg",
  },

  {
    url: "./images/glamping6.jpeg",
  },
  {
    url: "./images/glamping7.jpeg",
  },

  {
    url: "./images/glamping11.jpeg",
  },
  {
    url: "./images/glamping12.jpeg",
  },
  {
    url: "./images/glamping18.jpeg",
  },
  {
    url: "./images/glamping19.jpeg",
  },

  {
    url: "./images/glamping23.jpeg",
  },

  {
    url: "./images/glamping25.jpeg",
  },
  {
    url: "./images/glamping26.jpeg",
  },
  {
    url: "./images/glamping27.jpeg",
  },
  {
    url: "./images/glamping28.jpeg",
  },
];

const insideImages = [
  {
    url: "./images/glamping10.jpeg",
  },
  {
    url: "./images/glamping8.jpeg",
  },
  {
    url: "./images/glamping13.jpeg",
  },
  {
    url: "./images/glamping14.jpeg",
  },
  {
    url: "./images/glamping15.jpeg",
  },
  {
    url: "./images/glamping24.jpeg",
  },
];

const outsideImages = [
  {
    url: "./images/glamping20.jpeg",
  },
  {
    url: "./images/glamping5.jpeg",
  },
  {
    url: "./images/glamping21.jpeg",
  },
  {
    url: "./images/glamping22.jpeg",
  },
];

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Glamping(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.container}>
      <Typography variant="h1">Cocora Nidos del Condor - Glamping</Typography>
      <div className={classes.content}>
        <div className={classes.intro}>
          <Slideshow slideImages={images} width={"800px"} height={"600px"} />
          <div
            style={{
              padding: "5px",
              textAlign: "center",
            }}
          >
            {language === "spanish" ? (
              <p>
                Les damos la bienvenida al glamping{" "}
                <span style={{ fontWeight: "800" }}>Nidos del Condor</span>, el
                único glamping ubicado en la cima del Valle de Cocora. Este es
                el lugar perfecto para esas escapadas de un fin de semana en
                pareja, para sacarse el peso de la ciudad y disfrutar de una
                experiencia única dentro de las montañas del Valle de Cocora.
              </p>
            ) : (
              <p>
                We welcome you to our Glamping{" "}
                <span style={{ fintWeight: "800" }}>Nidos del Cóndor</span>, the
                only glamping located on the top of the Cocora Valley. This is
                the perfect place for those one weekend couple runaways, take
                this chance to take the city's weight of your shoulders and
                enjoy of this unique experience deep inside the Valley's
                mountains.
              </p>
            )}
          </div>
        </div>
        <div
          className={classes.intro}
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            marginBottom: "20px",
          }}
        >
          <Slideshow
            slideImages={insideImages}
            width={"500px"}
            height={"400px"}
          />
          {language === "spanish" ? (
            <p style={{ width: "700px" }}>
              Nuestro servicio es de la mejor calidad, podrá disfrutar de la
              naturaleza, la fauna y la flora del valle todo con un servicio de
              alojamiento al aire libre VIP.
            </p>
          ) : (
            <p style={{ width: "700px" }}>
              With our first class service you will enjoy the nature, the fauna
              and flora of the Valley, all with a VIP lodging service.
            </p>
          )}
        </div>
        <div
          className={classes.intro}
          style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
        >
          <Slideshow
            slideImages={outsideImages}
            width={"500px"}
            height={"400px"}
          />
          {language === "spanish" ? (
            <p style={{ width: "700px" }}>
              Cada una de nuestras carpas cuenta con una mesa particular y una
              fogata para que puedan disfrutar de un momento inolvidable bajo
              las estrellas.
            </p>
          ) : (
            <p style={{ width: "700px" }}>
              Every single one of our tents is integrated with an outside table
              and a bonfire so you can enjoy an unforgetable moment under the
              starlight.
            </p>
          )}
        </div>
        <div className={classes.contact}>
          <Typography variant="h4">
            {language === "spanish" ? "Nuestras Redes" : "Our Social Media"}
          </Typography>
          <div style={{ marginTop: "-5px" }}>
            <IconButton
              onClick={(e) =>
                openNewTab(e, "https://www.facebook.com/Cocoranidosdelcondor")
              }
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={(e) =>
                openNewTab(
                  e,
                  "https://api.whatsapp.com/send/?phone=573232269201&text&type=phone_number&app_absent=0"
                )
              }
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={(e) =>
                openNewTab(e, "https://www.instagram.com/cocoranidosdelcondor/")
              }
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Glamping);
