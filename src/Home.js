import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";
import { Typography } from "@mui/material";
import style from "./styles/HomeStyle";

function Home(props) {
  const { classes } = props;

  const servicesInfo = [
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
  ];

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
          <Typography variant="h1">El Lugar</Typography>
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
            <p
              style={{
                textAlign: "left",
                margin: "15px",
                padding: "20px",
                borderRadius: "13px",
                backgroundColor: "#eeeeee",
              }}
            >
              Adentrados en el valle de cocora, ubicados en el Km 10 del Valle,
              primer restaurante a la izquierda.
              <br />
              Este es un lugar perfecto para pasar tiempo en familía, con amigos
              y/o familiares, incluso pueden traer a sus familiares peludos!
              <br />
              Dese la oportunidad de vivir nuevas experiencias en la profundidad
              del valle de cocora, los esperamos con los brazos abiertos!
            </p>
          </section>
        </div>
        <div className={classes.services}>
          <Typography variant="h3">Nuestros Servicios</Typography>
          <div className={classes.serviceCards}>{services}</div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Home));
