const style = {
  content: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",

    "& img": {
      boxShadow: "10px 10px 5px #ccc",
      mozBoxShadow: "10px 10px 5px #ccc",
      webkitBoxShadow: "10px 10px 5px #ccc",
      khtmlBoxShadow: "10px 10px 5px #ccc",
      borderRadius: "5px",
      maxWidth: "100%",
      maxHeight: "100%",
      height: "800px",
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      textAlign: "left",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      padding: "25px",
      width: "60%",
      marginLeft: "20px",
      fontSize: "1.2em",
    },
  },
  container: {
    textAlign: "center",
    height: "1000px",
  },
};

export default style;
