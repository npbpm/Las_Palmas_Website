import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      margin: "10px",
      marginBottom: "40px",
      [sizes.down("lg")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "35% !important",
        height: "auto !important",
      },
      [sizes.down("md")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        margin: 0,
        width: "95% !important",
        height: "auto !important",
      },
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(255,255,255,0.85)",
      fontFamily: "'Libre Baskerville', serif !important",
      fontSize: "0.97em",
      borderRadius: "13px",
      width: "90%",
      padding: "20px",
    },
    "& ul": {
      fontFamily: "'Libre Baskerville', serif !important",
    },
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.4em",
      },
    },
  },
  sales: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    "& p": {
      marginLeft: "5px",
      backgroundColor: "#eeeeee",
      fontSize: "1.2em",
    },
    [sizes.down("lg")]: {},
    [sizes.down("md")]: {
      display: "block",
      "& p": {
        margin: 0,
        marginTop: "40px",
      },
    },
  },
  packages: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    [sizes.down("md")]: {
      display: "block",
      marginTop: "100px",
    },
  },
  package: {
    margin: "5px",
    width: "24%",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "13px",
    paddingTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "& ul": {
      textAlign: "left",
    },
    "&:hover": {
      transform: "scale(1.2)",
      transition: "ease-in-out all 0.3s",
      [sizes.down("md")]: {
        transform: "none",
      },
    },
    [sizes.down("lg")]: {
      width: "32%",
    },
    [sizes.down("md")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20px 0",
    },
    "& img": {
      [sizes.down("lg")]: {
        width: "95% !important",
        height: "330px !important",
      },
      [sizes.down("md")]: {
        height: "800px !important",
      },
      [sizes.down("sm")]: {
        height: "670px !important",
      },
      [sizes.down("xs")]: {
        height: "500px !important",
      },
      [sizes.down("xxs")]: {
        height: "400px !important",
      },
      [sizes.down("us")]: {
        height: "290px !important",
      },
    },
  },
};

export default style;
