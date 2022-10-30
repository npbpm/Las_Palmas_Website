import sizes from "./sizes";

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
      [sizes.down("md")]: {
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
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
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      width: "45%",
      [sizes.down("sm")]: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "300px",
      },
    },
    marginLeft: "20px",
    marginRight: "10px",
    [sizes.down("sm")]: {
      display: "block",
    },
  },
};

export default style;
