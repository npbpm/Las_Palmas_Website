import React, { useContext, memo } from "react";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";
import { Typography } from "@mui/material";
import style from "./styles/HomeStyle";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: [
    {
      title: "Restaurante",
      description:
        "Permitase exaltar todos sus sentidos en este hermoso valle, apreciando la belleza paisajastica del lugar con su majestuosa Palma de cera matizada con la gran gama de verdes de sus montañas.",
      img: "./images/FrenteRestaurante.jpeg",
      path: "/restaurant",
    },
    {
      title: "Casita del sabor",
      description:
        "Dejese atrapar por el aroma del cafe, disfrute de esta deliciosa bebida preparada en diferentes formas, en nuestra casita de arquitectura quindiana.",
      img: "./images/CasitaDelSabor.jpeg",
      path: "/cofee-house",
    },
    {
      title: "Hospedaje",
      description:
        "Viva una experiencia de paz, tranquilidad y armonía que le ofrece las palmas de cocora en su cabaña construida en madera rodeada de coloridas flores y palma de cera.",
      img: "./images/Cabin.jpeg",
      path: "/lodging",
    },
    {
      title: "Camping",
      description:
        "El Eco-Hotel Las Palmas de Cocora cuenta con un amplio espacio verde bajo un cielo descubierto, en las noches poblado de estrellas y constelaciones.",
      img: "./images/CampingZone.jpeg",
      path: "/camping",
    },
    {
      title: "Atracciones",
      description:
        "Contamos con una zona adaptada para los niños, para que los más chicos puedan divertirse, mientras los más grandes disfrutan de los servicios del Restaurante",
      img: "./images/Atracciones.jpeg",
      path: "/games",
    },
    {
      title: "Paseos Ecologicos a Caballo y Caminatas",
      description:
        "Una cabalgata por el Valle de Cocora en Salento Quindio es la experiencia que no puede faltar en la agenda de vacaciones, un paisaje unico en el mundo rodeado de palmas de cera en medio de la montaña.",
      img: "./images/HorseRiding.jpeg",
      path: "/horseback-riding",
    },
    {
      title: "Artesanías de la región",
      description:
        "Visite nuestro almacén de artesanía con productos exclusivos fabricados por artesanos de Salento donde podrá adquirir un lindo souvenir para llevar de recuerdo.",
      img: "./images/artesanias.jpeg",
      path: "/regional-crafts",
    },
  ],
  english: [
    {
      title: "Restaurant",
      description:
        "Allow yourself to awake all of your senses in this beautiful Valley, while admiring the beauty of the land with its majestic wax palm trees and its green mountains.",
      img: "./images/FrenteRestaurante.jpeg",
      path: "/restaurant",
    },
    {
      title: "Coffee House",
      description:
        "Let yourself be infected with the aroma of coffee, enjoy this delicious beverage in all of its different forms inside our little house of regional architechture.",
      img: "./images/CasitaDelSabor.jpeg",
      path: "/cofee-house",
    },
    {
      title: "Lodging",
      description:
        "Let yourself experience the peace, tranquility and harmony that the restaurant Las Palmas offers you with its wooden cabin in the middle of colourful flowers and wax palm trees",
      img: "./images/Cabin.jpeg",
      path: "/lodging",
    },
    {
      title: "Camping",
      description:
        "The Eco-Hotel Las Palmas de Cocora has a large green space, under the light of the night sky filled with stars and constellations",
      img: "./images/CampingZone.jpeg",
      path: "/camping",
    },
    {
      title: "Games",
      description:
        "We have a special zone for the kids, so that the little ones can have fun while the grown-ups enjoy of the restaurant's services.",
      img: "./images/Atracciones.jpeg",
      path: "/games",
    },
    {
      title: "Horse Back Riding",
      description:
        "A Horse Back Ride inside the Cocora Valley at Salento, Quindio is and experience you cannot miss on your agenda, an unique landscape filled with wax palm trees in the middle of the mountains.",
      img: "./images/HorseRiding.jpeg",
      path: "/horseback-riding",
    },
    {
      title: "Regional Crafts",
      description:
        "Come visit our craft store, we have exclusive products handmade by Salento's craftsmen, here you can buy a nice souvenir so you can bring a part of the Valley with you!",
      img: "./images/artesanias.jpeg",
      path: "/regional-crafts",
    },
  ],
};

function Home(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const servicesInfo = words[language];

  const services = servicesInfo.map((service, idx) => (
    <ServiceCard
      key={idx}
      img={service.img}
      title={service.title}
      description={service.description}
      display={idx}
      path={service.path}
    />
  ));

  return (
    <div className={classes.home}>
      <div className={classes.homeBody}>
        <div>
          <Typography variant="h1">
            {language === "spanish" ? "El Lugar" : "The Place"}
          </Typography>
          <section className={classes.location}>
            <img
              src={require("./images/EntradaParqueadero.jpeg")}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
                width: "45%",
              }}
              alt="Error: Not found"
            />

            {language === "spanish" ? (
              <p
                style={{
                  textAlign: "left",
                  margin: "15px",
                  padding: "20px",
                  borderRadius: "13px",
                  backgroundColor: "#eeeeee",
                }}
              >
                Adentrados en el valle de cocora, ubicados en el Km 10 del
                Valle, primer restaurante a la izquierda.
                <br />
                Este es un lugar perfecto para pasar tiempo en familía y/o con
                amigos, incluso pueden traer a sus familiares peludos!
                <br />
                Dese la oportunidad de vivir nuevas experiencias en la
                profundidad del valle de cocora, los esperamos con los brazos
                abiertos!
              </p>
            ) : (
              <p
                style={{
                  textAlign: "left",
                  margin: "15px",
                  padding: "20px",
                  borderRadius: "13px",
                  backgroundColor: "#eeeeee",
                }}
              >
                Deep inside the Cocora Valley, we are located on the 10
                <sup>th</sup> Km of the Valley, first restaurant to your left.
                <br />
                This is the perfect place to spend spend time with your family
                and friends, you can even bring your pets!
                <br />
                Let yourself live this new experience in the deeps of the
                Valley, we are waiting for you with open arms!
              </p>
            )}
          </section>
        </div>
        <div className={classes.services}>
          <Typography variant="h3">
            {language === "spanish" ? "Nuestros Servicios" : "Our Services"}
          </Typography>
          <div className={classes.serviceCards}>{services}</div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Home));
