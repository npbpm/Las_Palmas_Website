import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    fontFamily: "'Libre Baskerville', serif !important",
    display: "flex",
    marginTop: "100px",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    "& li": {
      marginLeft: "15px",
    },
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      fontSize: "1.7em",
      marginBottom: "20px",
      [sizes.down("md")]: {
        fontSize: "1.3em",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  description: {
    padding: "20px",
    textAlign: "center",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    backgroundColor: "#eeeeee",
    borderRadius: "13px",
    marginLeft: "40px",
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
};

export default style;
