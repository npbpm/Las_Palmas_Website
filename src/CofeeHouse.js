import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CofeeHouseStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/CoffeHouseWords";

function CofeeHouse(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>

      <div className={classes.content}>
        <img
          src={require("./images/CasitaDelSabor.jpeg")}
          alt="Error: Not found"
        />
        {language === "spanish" ? (
          <p>
            Sean bienvenidos a la Casita del Sabor, el lugar perfecto para pasar
            el rato después de comer, tomarse un café o incluso comerse un
            postre!
            <br /> <br />
            En su terraza podrá disfrutar de la naturaleza, el aire fresco y de
            la tranquilidad del campo mientras disfruta de los mejores helados
            acompañados del mejor café de la región.
            <br /> <br />
            Desde la terraza se tiene una clara vista de la zona de juegos para
            niños, por lo que podrá disfrutar de su postre mientras vigila a sus
            hijos.
          </p>
        ) : (
          <p>
            Welcome to our Coffe House! This is the perfect place for you to
            spend some time after eating, to drink a cup of the best coffee of
            the region or even give yourself a treat.
            <br /> <br />
            In our terrace you can enjoy the nature, the fresh air y the
            tranquility of the countryside while eating some delicious ice cream
            with a cup of coffee.
            <br /> <br />
            If you have children, you can let them go to the play zone while you
            make sure they are ok from our terrace, where you can have a clear
            view of the play zone.
          </p>
        )}
      </div>
    </div>
  );
}

export default withStyles(style)(CofeeHouse);
