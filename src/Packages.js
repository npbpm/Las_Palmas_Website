import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import style from "./styles/PackagesStyle";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/PackagesWords";

function Packages(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const {
    title,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    dawnTitle,
    dawnText1,
    dawnText2,
    includes,
    breakfast,
    lodging,
    mainDish,
    horseRide,
    restingTitle,
    restingText,
    ecoSeedTitle,
    arrival,
    hike,
    comeback,
    outdoor,
    ownStyleTitle,
    ownStyleText1,
    ownStyleText2,
    natureTitle,
    natureText,
    fogRide,
    lunch,
    romanticTitle,
    romanticText,
    romanticArrival,
    romanticDinner,
    romanticDessert,
    romanticDrink,
    moonTitle,
    moonText,
    moonRoom,
    moonBreakfast,
    friendsText,
    friendsArrival,
    friendsLunch,
    friendsRefreshment,
    friendsTitle,
  } = words[language];

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.sales}>
        <img
          alt="Error: Not Found"
          src={require("./images/promocion.jpg")}
          style={{ width: "700px", height: "600px" }}
        />
        <p>
          <strong>{description1}</strong> {description2}
          <strong>{description3}</strong> {description4}
          <br /> <strong>{description5}</strong> {description6}
        </p>
      </div>
      <div className={classes.packages}>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/glamping22.jpeg")}
          />
          <Typography variant="h4">{dawnTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            {dawnText1}
            <br />
            {dawnText2}
            <br />
            <ul>
              <strong>{includes}</strong>
              <li>{breakfast}</li>
              <li>{lodging}</li>
              <li>{mainDish}</li>
              <li>{horseRide}</li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/plan_cabana.jpg")}
          />
          <Typography variant="h4">{restingTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            {restingText}
            <ul>
              <strong>{includes}</strong>
              <li>{lodging}</li>
              <li>{breakfast}</li>
              <li>{horseRide}</li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/ecosemilla.jpg")}
          />
          <Typography variant="h4">{ecoSeedTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            {language === "spanish"
              ? "Dirigido a los estudiantes"
              : "For students"}
            <ul>
              <strong>{includes}</strong>
              <li>{arrival}</li>
              <li>{hike}</li>
              <li>{comeback}</li>
              <li>{outdoor}</li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/estiloPropio.jpeg")}
          />
          <Typography variant="h4">{ownStyleTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            {ownStyleText1}
            <br />
            {ownStyleText2}
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/naturaleza_y_yo.jpg")}
          />
          <Typography variant="h4">{natureTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>{natureText}</p>
          <ul>
            <strong>{includes}</strong>
            <li>{fogRide}</li>
            <li>{lunch}</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img alt="Error: Not Found" src={require("./images/romance.jpg")} />
          <Typography variant="h4">{romanticTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            {romanticText}
          </p>
          <ul>
            <strong>{includes}</strong>
            <li>{romanticArrival}</li>
            <li>{romanticDinner}</li>
            <li>{romanticDrink}</li>
            <li>{romanticDessert}</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/amor_de_luna.jpeg")}
          />
          <Typography variant="h4">{moonTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>{moonText}</p>
          <ul>
            <strong>{includes}</strong>
            <li>{arrival}</li>
            <li>{romanticDinner}</li>
            <li>{romanticDrink}</li>
            <li>{romanticDessert}</li>
            <li>{moonRoom}</li>
            <li>{moonBreakfast}</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/valley-ge1efec97d_1920.jpg")}
          />
          <Typography variant="h4">{friendsTitle}</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>{friendsText}</p>
          <ul>
            <strong>{includes}</strong>
            <li>{friendsArrival}</li>
            <li>{friendsLunch}</li>
            <li>{friendsRefreshment}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(Packages);
