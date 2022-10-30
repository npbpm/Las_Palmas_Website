import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "100px",
    fontFamily: "'Libre Baskerville', serif !important",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("sm")]: {
        fontSize: "4.7rem",
      },
      [sizes.down("us")]: {
        fontSize: "4rem",
      },
    },
  },
  list: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& li": {
      marginBottom: "5px",
    },
    [sizes.down("md")]: {
      padding: 0,
      margin: 0,
    },
  },
  description: {
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    marginRight: "auto",
    backgroundColor: "#eeeeee",
    borderRadius: "13px",
    marginLeft: "20px",
    padding: "25px",
    "& li": {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
    },
    [sizes.down("lg")]: {
      width: "60%",
    },
    [sizes.down("md")]: {
      marginTop: "20px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
};

export default style;
