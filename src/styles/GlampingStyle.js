const style = {
  content: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "100px",
  },
  container: {
    textAlign: "center",
    height: "auto",
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "20px",
      padding: "20px",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      fontSize: "1.2em",
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
  },
};

export default style;
