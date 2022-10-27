import React from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CocoraValleyStyle";

function CocoraValley(props) {
  const { classes } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>El Valle de Cocora!</h1>
      <div className={classes.container}>
        <div className={classes.images}>
          <img
            className={classes.image}
            src={require("./images/valley-ge1efec97d_1920.jpg")}
            alt="Error not found"
          />
          <img
            className={classes.image}
            src={require("./images/valle-del-cocora-g6b77a65af_1920.jpg")}
            alt="Error not found"
          />
          <img
            className={classes.image}
            src={require("./images/valle-de-cocora-g982a52cf0_1920.jpg")}
            alt="Error not found"
          />
          <div className={classes.shadow}></div>
        </div>
        <div className={classes.description}>
          <p>
            El valle de Cocora es un paisaje natural localizado en la cordillera
            central de los Andes colombianos, específicamente en el departamento
            del Quindío, en el área de influencia del Parque nacional natural
            Los Nevados. Cuenta con algunas poblaciones del árbol nacional de
            Colombia, la palma de cera del Quindío (Ceroxylon quindiuense), así
            como de una gran variedad de flora y fauna, mucha de ella en peligro
            de extinción, protegida bajo el estatus de parque nacional natural.
            El valle, así como la localidad cercana de Salento, se ubican entre
            los principales destinos turísticos de Colombia
          </p>
          <p>
            Cocora era el nombre de una princesa quimbaya, hija del cacique
            Acaime, y cuyo significado es estrella de agua. Inicialmente la zona
            era llamada el cañón del alto Quindío. En 1890 Valeriano Marulanda
            Arango llegó al lugar, tumbó parte del monte con un grupo de peones
            que estaban a su mando, abrió las fincas e hizo la denuncia de los
            terrenos baldíos ante un juez de Cartago. La inspección de las
            tierras las hizo, con la medición, un agrimensor de esa ciudad, el
            señor Lisandro Jaramillo, en el año de 1900, periodo en el que se
            levantó el plano respectivo, el cual fue registrado oficialmente en
            la gobernación del Cauca, el 31 de octubre de 1903. Darío Marulanda
            narra que a su padre, Julio Marulanda Botero, hijo de Valeriano, le
            correspondió el lote propiamente llamado Britania, donde estaba la
            casa principal. Y se vino definitivamente para ella, después de
            vender una finca llamada Pisamal, en la gran hacienda Maravélez, en
            La Tebaida, cuyo nombre debe provenir de la conquista de tierras que
            hicieron juntos Valeriano Marulanda y su yerno Germán Vélez, y, tal
            vez, por eso esa hacienda tomó el nombre de Maravélez. En 1900,
            Darío Marulanda aseguraba que se trataba de un vocablo popular en
            esa zona, proveniente del antiguo lenguaje indígena. “Dicen que así
            llamaban los indígenas a la palma de cera, esa es una versión. La
            otra, corroborada también por Juan B. Jaramillo, propietario de
            tierras en la zona, es que ese era el sonido de un ave, pero con
            acento agudo co co rá, co co rá, y que los indígenas veían entre las
            palmas de cera. Por tal razón, una y otra, ave y palma, la llamaban
            cocorá, repetimos, con acento agudo”, narran Darío Marulanda y Juan
            B. Jaramillo. De ahí proviene el nombre de la finca La Cocora, que
            debió de ser nombre femenino y con acento agudo, pero que se
            transformó porque la tilde de la última sílaba no apareció en el
            plano ni en las escrituras respectivas. Desde entonces, año 1900, y
            no desde la existencia de la fonda Cocora, en los años sesenta del
            siglo XX, como afirmaba el académico salentino Jorge Enrique Arias,
            referido por Armando Rodríguez, la zona dejó de llamarse cañón del
            Alto Quindío, para tomar el nombre de valle de Cocora, que debería
            de ser, valle de La Cocora.
          </p>
          <p>
            Con el objetivo de prevenir la explotación de la palma de cera y de
            las especies endémicas propias del valle de Cocora, el gobierno de
            Belisario Betancur propuso la creación de un santuario natural en
            dicho lugar y la preservación de la palma de cera como árbol
            nacional de Colombia a través de la ley 61 de 1985, ratificada el 16
            de septiembre de 1985.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(CocoraValley);
