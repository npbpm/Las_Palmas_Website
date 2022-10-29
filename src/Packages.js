import React, { memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import style from "./styles/PackagesStyle";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: {
    title: "Planes y Promociones",
    description1: "APROVECHA!!!",
    description2: "ESTA TEMPORADA Y DISFRUTE DEL VALLE DE COCORA CON LOS ",
    description3: "'DESCUENTOS ESPECIALES'",
    description4:
      "QUE LE OFRECE EL RESTAURANTE LAS PALMAS DE COCORA. 'NO LO DEJES PASAR' ",
    description5: "CUMPLEAÑOS: ",
    description6:
      "celebra tu cumpleaños en el RESTAURANTE LAS PALMAS DE COCORA, presenta tu cedula y de cortesía de la casa te invitamos a un delicioso POSTRE de tu elección y 15 POR CIENTO DE DESCUENTO!! En tu plato. SI VAS EN DOMINGO PODRAS DISFRUTAR DE MUSICA EN VIVO.",
    dawnTitle: "Plan Atardecer de los Venados",
    dawnText1:
      "Deje que su espíritu vuele al encuentro de un placentero atardecer cuando el sol se oculta tras la silueta de montañas y las palmas de cera en el Eco Hotel Las Palmas de Cócora.",
    dawnText2:
      "Este plan es especial para desconectarse del dìa a dìa con hospedaje para 2 personas, desayuno, almuerzo ó cena y cabalgata de 1 hora a la peña de la virgen.",
    includes: "Incluye: ",
    breakfast: "Desayuno",
    lodging: "Hospedaje",
    mainDish: "Plato Principal",
    horseRide: "Cabalgata",
    restingTitle: "Plan Descanso - Cabaña tipo Canadiense",
    restingText:
      "Este plan es perfecto para las personas que quiren despejar su mente, recargar de energía su espíritu disfrutando de una relación total con la naturaleza EN LAS PALMAS DE COCORA",
    ecoSeedTitle: "Plan Ecosemilla",
    arrival: "Recibimiento en le restaurante a las 9 am",
    hike: "Caminata ecológica (duración 2 horas)",
    comebakc: "Regreso al eco-hotel y Almuerzo",
    outdoor:
      "Actividades deportivas al aire libre - voley verde - micro futbol",
    ownStyleTitle: "Plan Estilo Propio",
    ownStyleText1:
      "Disfruta, vive y aprende del valle del cocora y la trucha arco iris con el plan al estilo propio, OPORTUNIDAD QUE NO PUEDES DEJAR PASAR",
    ownStyleText2:
      "Ven y disfruta del eco-hotel Las Palmas de Cocora, incluso si no tienes un plan, aquí encontrarás comida tipica colombiana, paisajes hermosos y una experiencia inolvidable.",
    natureTitle: "Plan Naturaleza y Yo",
    natureText:
      " El plan Naturaleza y Yo le brinda la oportunidad de que disfrutes de una hermosa cabalgata por el bosque de niebla permitiendole apreciar las hermosas palmas de cera y el imponente morrogacho, el morro mas alto del Quindìo.",
    fogRide: "Cabalgata por el bosque de niebla",
    lunch: "Almuerzo en el restaurante",
    romanticTitle: "Plan Tardes de Romance",
    romanticText:
      "Este plan esta dirigido especialmente para parejas, para que vivan una experiencia llena de amor y sorpresas , enamorate en LAS PALMAS DE COCORA",
    romanticArrival: "Recibimiento en el Restaurante (Coctel o Vino)",
    romanticDinner: "Cena romántica a la carta",
    romanticDrink: "Botella de Vino Tinto o Vino Blanco",
    romanticDessert: "Delicioso postre para endulzar la cena",
    moonTitle: "Plan Amor de Luna",
    moonText:
      "Vive una noche inolvidable llena de amor y pasión en un ambiente romántico al calor de la chimenea.",
    moonRoom: "Habitación Romantica",
    moonBreakfast: "Desayuno dulce amanecer",
    friendsTitle: "Plan Básico Amigos",
    friendsText:
      "Este plan es dirigido para las personas que quieran vivir una experiencia llena de diversiòn y aventuras.",
    friendsArrival: "Bienvenida con aperitivos",
    friendsLunch: "Almuerzo",
    friendsRefreshment: "Refrigerio",
  },
  english: {
    title: "Packages & Sales",
    description1: "PROFIT!!!",
    description2: "THIS SEASON ENJOY COCORA VALLEY WITH THE ",
    description3: "'SPECIAL DISCOUNTS'",
    description4:
      "THAT THE RESTAURANT LAS PALMAS OFFERS YOU. 'DON'T LET IT SLIP' ",
    description5: "BIRTHDAY: ",
    description6:
      "celebrate your birthday in the Restaurant LAS PALMAS DE COCORA, show us your ID and we'll give you a free dessert & a 15% DISCOUNT!! There's live music on Sundays.",
    dawnTitle: "Package Sunset of the Deers",
    dawnText1:
      "Let your spirit fly with a eautiful sunset between the green mountains and the wax palm trees in the Eco-Hotel Las Palmas.",
    dawnText2:
      "This package is special for those who want to disconnect from the daily routine, with lodging for 2 people, breakfast, lunch or dinner and a 1 hour horse ride to the Peña de La Virgen.",
    includes: "Includes: ",
    breakfast: "Breakfast",
    lodging: "Lodging",
    mainDish: "Main Dish",
    horseRide: "Horse Ride",
    restingTitle: "Package Chill - Canadian Cabin",
    restingText:
      "This package is perfect for those who want to rest their minds recharge spiritual energies while enjoying of a deep connection with nature at LAS PALMAS DE COCORA",
    ecoSeedTitle: "Package EcoSeed",
    arrival: "Arrivla at the restaurant at 9 am",
    hike: "Ecological hike (2 hours)",
    comebakc: "Return to the Cabin and Lunch",
    outdoor: "Outdoor activities - volleyball - football",
    ownStyleTitle: "Package My Own Style",
    ownStyleText1:
      "Enjoy, live and learn about the Cocora Valley and the rainbow trout with this package, a once in a lifetime opportunity.",
    ownStyleText2:
      "Come and enjoy of the Eco-Hotel Las Palmas de Cocora, even if you don't have a plan, here you'll find typical colombian food, beautiful landscapes and an unforgetable experience.",
    natureTitle: "Package Nature and I",
    natureText:
      "The Package Nature and I gives you the opportunity to enjoy a beautiful horse ride inside the fog forest allowing you to appreciate the magnificent wax palms and imposing Morrogacho, the tallest mountain on the Quindío.",
    fogRide: "Fog Forest Horse Ride",
    lunch: "Lunch at the Restaurant",
    romanticTitle: "Package Romantic Afternoon",
    romanticText:
      "This package is special for couples, for you to live an experience full of love and surprises, enamorate en LAS PALMAS DE COCORA",
    romanticArrival: "Arrival at the Restaurant (Cocktail or Wine)",
    romanticDinner: "Romantic Dinner",
    romanticDrink: "Bottle of Wine, Red or White",
    romanticDessert: "Delicious dessert for you to sweeten your dinner",
    moonTitle: "Package Lunar Love",
    moonText:
      "Live an unforgetable night filled with love and passion in a romantic environment with the bonfire heat.",
    moonRoom: "Romantic Room",
    moonBreakfast: "Sweet Sunrise Breakfast",
    friendsTitle: "Package Only Friends",
    friendsText:
      "This package is for those who want to live an experience full of fun and adventures.",
    friendsArrival: "Welcome to the restaurant with appetizers",
    friendsLunch: "Lunch",
    friendsRefreshment: "Little treats",
  },
};

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
        <p
          style={{
            marginLeft: "5px",
            backgroundColor: "#eeeeee",
            fontSize: "1.2em",
          }}
        >
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

export default withStyles(style)(memo(Packages));
