import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    width: "100%",
    "& p": {
      padding: "10px",
    },
    "& h3": {
      fontFamily: "'Libre Baskerville', serif !important",
    },
    [sizes.down("md")]: {
      "& h1": {
        fontSize: "5.4rem",
      },
    },
    [sizes.down("us")]: {
      "& h1": {
        fontSize: "4.8rem",
      },
    },
  },
  content: {
    display: "flex",
    padding: "10px",
    marginTop: "100px",
    alignItems: "center",
    [sizes.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "2px",
    },
  },
  text: {
    backgroundColor: "#eeeeee",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    marginLeft: "10px",
    fontFamily: "'Libre Baskerville', serif !important",
    fontSize: "1.2rem",
    [sizes.down("md")]: {
      margin: 0,
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },
  menu: {
    color: "black",
    fontFamily: "'Libre Baskerville', serif !important",
    fontSize: "1.5em",
    fontWeight: "800",
  },
  menuItem: {
    color: "black",
  },
  environments: {
    padding: "8px 2px",
    "& ul": {
      [sizes.down("xl")]: {
        margin: 0,
        padding: 0,
      },
    },
    [sizes.down("us")]: {
      fontSize: "1.1rem",
    },
  },
  plans: {
    display: "flex",
    alignItems: "center",
    marginBottom: "-35px",
    marginTop: "10px",
    "& p": {
      transform: "translateY(-3px)",
      margin: 0,
    },
  },
};

export default style;
