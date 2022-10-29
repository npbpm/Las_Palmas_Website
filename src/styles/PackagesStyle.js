const style = {
  container: {
    textAlign: "center",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      margin: "10px",
      marginBottom: "40px",
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(255,255,255,0.85)",
      fontFamily: "'Libre Baskerville', serif !important",
      fontSize: "0.97em",
      borderRadius: "13px",
      width: "90%",
      padding: "20px",
    },
    "& ul": {
      fontFamily: "'Libre Baskerville', serif !important",
    },
  },
  sales: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  packages: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  package: {
    margin: "5px",
    width: "24%",
    "& ul": {
      textAlign: "left",
    },
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "13px",
    paddingTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "ease-in-out all 0.3s",
    },
  },
};

export default style;
