import React, { useContext } from "react";
import { withStyles } from "@mui/styles";
import style from "./styles/CocoraValleyStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/CocoraValleyWords";

function CocoraValley(props) {
  const { classes } = props;

  const { language } = useContext(LanguageContext);

  const { title, text1, text2, text3 } = words[language];

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.container}>
        <div className={classes.images}>
          <img
            className={classes.image}
            src={require("./images/valley-ge1efec97d_1920.jpg")}
            alt="Error not found"
            style={{
              borderTopLeftRadius: "13px",
              borderTopRightRadius: "13px",
            }}
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
            style={{
              borderBottomLeftRadius: "13px",
              borderBottomRightRadius: "13px",
            }}
          />
          <div className={classes.shadow}></div>
        </div>
        <div className={classes.description}>
          <p>{text1}</p>
          <img
            className={classes.image}
            src={require("./images/valley-ge1efec97d_1920.jpg")}
            alt="Error not found"
            style={{
              borderRadius: "13px",
            }}
          />
          <p>{text2}</p>
          <img
            className={classes.image}
            style={{
              borderRadius: "13px",
            }}
            src={require("./images/valle-del-cocora-g6b77a65af_1920.jpg")}
            alt="Error not found"
          />
          <p>{text3}</p>
          <img
            className={classes.image}
            src={require("./images/valle-de-cocora-g982a52cf0_1920.jpg")}
            alt="Error not found"
            style={{
              borderRadius: "13px",
            }}
          />
          {/* Fuente Wikipedia */}
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(CocoraValley);
