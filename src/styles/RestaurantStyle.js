const style = {
  container: {
    textAlign: "center",
    height: "900px",
    "& p": {
      padding: "10px",
    },
    "& h3": {
      fontFamily: "'Libre Baskerville', serif !important",
    },
  },
  content: {
    display: "flex",
    padding: "10px",
    marginTop: "100px",
    alignItems: "center",
  },
  text: {
    backgroundColor: "#eeeeee",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    marginLeft: "10px",
    fontFamily: "'Libre Baskerville', serif !important",
    fontSize: "1.2rem",
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
  },
  environments: {},
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
