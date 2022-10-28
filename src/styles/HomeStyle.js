const style = {
  home: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeBody: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#eeeeee",
      padding: "20px",
    },
  },
  serviceCards: {
    width: "100%",
  },
  services: {
    marginTop: "160px",
  },
  location: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "80px",
    "& img": {
      borderRadius: "20%",
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    },
    marginLeft: "20px",
    marginRight: "10px",
  },
};

export default style;
