const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "900px",
    overflow: "show",
  },
  content: {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
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
  },
};

export default style;
