import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "100px",
    [sizes.down("lg")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "20px",
      padding: "20px",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      fontSize: "1.2em",
      [sizes.down("md")]: {
        margin: 0,
        marginTop: "20px",
        width: "100% !important",
        padding: "15px 2px",
      },
    },
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
  intro: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "100px",
    borderRadius: "13px",
    marginLeft: "25px",
    marginRight: "15px",
    [sizes.down("md")]: {
      display: "block",
      justifyContent: "center",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: "70px",
    },
  },
};

export default style;
