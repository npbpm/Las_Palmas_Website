import React, { memo } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import style from "./styles/PackagesStyle";

function Packages(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="h1">Planes y Promociones</Typography>
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
          <strong>APROVECHA!!!</strong> ESTA TEMPORADA Y DISFRUTE DEL VALLE DE
          COCORA CON LOS <strong>“DESCUENTOS ESPECIALES”</strong> QUE LE OFRECE
          EL RESTAURANTE LAS PALMAS DE COCORA. “NO LO DEJES PASAR “<br />{" "}
          <strong>CUMPLEAÑOS:</strong> celebra tú cumple años en RESTAURANTE LAS
          PALMAS DE COCORA, presenta tú cedula y de cortesía de la casa te
          invitamos a un delicioso POSTRE de tu elección y 15 POR CIENTO DE
          DESCUENTO!! En tu plato. SI VAS EN DOMINGO PODRAS DISFRUTAR DE MUSICA
          EN VIVO.
        </p>
      </div>
      <div className={classes.packages}>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/glamping22.jpeg")}
          />
          <Typography variant="h4">Plan Atardecer de los Venados</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Deje que su espíritu vuele al encuentro de un placentero atardecer
            cuando el sol se oculta tras la silueta de montañas y las palmas de
            cera en el Eco Hotel Las Palmas de Cócora.
            <br />
            Este plan es especial para desconectarse del dìa a dìa con hospedaje
            para 2 personas, desayuno, almuerzo ó cena y cabalgata de 1 hora a
            la peña de la virgen.
            <br />
            <ul>
              <strong>Incluye:</strong>
              <li>Desayuno</li>
              <li>Hospedaje</li>
              <li>Plato Principal</li>
              <li>Cabalgata</li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/plan_cabana.jpg")}
          />
          <Typography variant="h4">
            Plan Descanso - Cabaña tipo Canadiense
          </Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Este plan es perfecto para las personas que quiren despejar su
            mente, recargar de energía su espíritu disfrutando de una relación
            total con la naturaleza EN LAS PALMAS DE COCORA
            <ul>
              <strong>Incluye:</strong>
              <li>Hospedaje</li>
              <li>Desayuno</li>
              <li>Cabalgata</li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/ecosemilla.jpg")}
          />
          <Typography variant="h4">Plan Ecosemilla</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Dirigido a los estudiantes
            <ul>
              <strong>Incluye:</strong>
              <li>Recibimiento en le restaurante a las 9 am</li>
              <li>Caminata ecológica (duración 2 horas)</li>
              <li>Regreso al eco-hotel y Almuerzo</li>
              <li>
                Actividades deportivas al aire libre - voley verde - micro
                futbol
              </li>
            </ul>
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/estiloPropio.jpeg")}
          />
          <Typography variant="h4">Plan Estilo Propio</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Disfruta, vive y aprende del valle del cocora y la trucha arco iris
            con el plan al estilo propio, OPORTUNIDAD QUE NO PUEDES DEJAR PASAR
            <br />
            Ven y disfruta del eco-hotel Las Palmas de Cocora, incluso si no
            tienes un plan, aquí encontrarás comida tipica colombiana, paisajes
            hermosos y una experiencia inolvidable.
          </p>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/naturaleza_y_yo.jpg")}
          />
          <Typography variant="h4">Plan Naturaleza y Yo</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            El plan Naturaleza y Yo le brinda la oportunidad de que disfrutes de
            una hermosa cabalgata por el bosque de niebla permitiendole apreciar
            las hermosas palmas de cera y el imponente morrogacho, el morro mas
            alto del Quindìo.
          </p>
          <ul>
            <strong>Incluye:</strong>
            <li>Cabalgata por el bosque de niebla</li>
            <li>Almuerzo en el restaurante</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img alt="Error: Not Found" src={require("./images/romance.jpg")} />
          <Typography variant="h4">Plan Tardes de Romance</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Este plan esta dirigido especialmente para parajas, para que vivan
            una experiencia llena de amor y sorpresas , enamorate en LAS PALMAS
            DE COCORA
          </p>
          <ul>
            <strong>Incluye:</strong>
            <li>Recibimiento en el Restaurante (Coctel o Vino)</li>
            <li>Cena romántica a la carta</li>
            <li>Botella de Vino Tinto o Vino Blanco</li>
            <li>Delicioso postre para endulzar la cena</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/amor_de_luna.jpeg")}
          />
          <Typography variant="h4">Plan Amor de Luna</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Vive una noche inolvidable llena de amor y pasión en un ambiente
            romántico al calor de la chimenea.
          </p>
          <ul>
            <strong>Incluye:</strong>
            <li>Recibimiento en el Restaurante (Coctel o Vino)</li>
            <li>Cena romántica a la carta</li>
            <li>Botella de Vino Tinto o Vino Blanco</li>
            <li>Delicioso postre especial</li>
            <li>Habitación Romantica</li>
            <li>Desayuno dulce amanecer</li>
          </ul>
        </div>
        <div className={classes.package}>
          <img
            alt="Error: Not Found"
            src={require("./images/valley-ge1efec97d_1920.jpg")}
          />
          <Typography variant="h4">Plan Basico Amigos</Typography>
          <p style={{ background: "none", boxShadow: "none" }}>
            Este plan es dirigido para las personas que quieran vivir una
            experiencia llena de diversiòn y aventuras.
          </p>
          <ul>
            <strong>Incluye:</strong>
            <li>Bienvenida con aperitivos</li>
            <li>Almuerzo</li>
            <li>Refrigerio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Packages));
