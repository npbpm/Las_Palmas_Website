import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    height: "auto",
  },
  content: {
    padding: "10px",
    display: "flex",
    "& img": {
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "20px",
      marginRight: "auto",
      padding: "20px",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      fontSize: "1.2em",
      textAlign: "left",
      [sizes.down("md")]: {
        margin: 0,
        marginTop: "40px",
      },
    },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "100px",
    [sizes.down("md")]: {
      display: "block",
      margin: 0,
      marginTop: "60px",
    },
  },
};

export default style;
