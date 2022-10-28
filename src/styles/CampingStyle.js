const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "100px",
    fontFamily: "'Libre Baskerville', serif !important",
  },
  container: {
    textAlign: "center",
    height: "1000px",
  },
  list: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& li": {
      marginBottom: "5px",
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
  },
};

export default style;
