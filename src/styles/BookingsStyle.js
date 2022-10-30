import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
  content: {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    [sizes.down("md")]: {
      display: "block",
      width: "95%",
    },
  },
  contactUs: {
    width: "30%",
    textAlign: "center",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    fontFamily: "'Libre Baskerville', serif !important",
    padding: "30px",
    backgroundColor: "#eeeeee",
    "& span": {
      marginRight: "10px",
    },
    [sizes.down("xl")]: {
      width: "40%",
      fontSize: "0.95em",
    },
    [sizes.down("md")]: {
      width: "100%",
      padding: "10px 0",
      marginRight: "auto",
      marginLeft: "auto",
    },
    [sizes.down("us")]: {
      fontSize: "0.6em",
    },
  },
  form: {
    padding: "2px",
    width: "20%",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    backgroundColor: "#eeeeee",
    "& button": {
      margin: "20px",
    },
    [sizes.down("xl")]: {
      width: "40%",
    },
    [sizes.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      marginBottom: "30px",
    },
  },
};

export default style;
