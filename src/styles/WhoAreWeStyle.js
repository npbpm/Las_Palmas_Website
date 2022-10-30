import sizes from "./sizes";

const style = {
  container: {
    width: "99%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    "& p": {
      backgroundColor: "#eeeeee",
      borderRadius: "13px",
      padding: "30px",
    },
  },
  description: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "100px",
    padding: "40px",
    [sizes.down("md")]: {
      width: "95%",
      justifyContent: "space-between",
      marginLeft: "-10px",
    },
    [sizes.down("sm")]: {
      width: "80%",
      marginLeft: "auto",
      flexDirection: "column-reverse",
      marginBottom: "50px",
    },
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "28%",
    margin: "2px",
    borderRadius: "50%",
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    border: "solid 0.3rem #b58162",
    [sizes.down("md")]: {
      marginRight: "15px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
    [sizes.down("sm")]: {
      borderRadius: "5px",
      width: "70%",
      border: "none",
    },
  },
  imgEntrance: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    width: "30%",
    margin: "2px",
    borderRadius: "13px",
    boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    [sizes.down("md")]: {
      width: "25rem",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    },
    [sizes.down("sm")]: {
      width: "35rem",
    },
  },
  imgCertificate: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "25em",
    width: "100",
    [sizes.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  paragraphHistory: {
    width: "70%",
    marginRight: "40px",
    backgroundColor: "#eeeeee",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    fontFamily: "'Libre Baskerville', serif",
    fontSize: "1.5rem",
    paddingTop: "15px",
    textAlign: "left",
    [sizes.down("md")]: {
      margin: 0,
      fontSize: "1.3em",
      width: "40%",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
    [sizes.down("sm")]: {
      marginTop: "35px",
      width: "95%",
    },
  },
  history: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "110px",
    "& p": {
      width: "33%",
      backgroundColor: "#eeeeee",
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      fontFamily: "'Libre Baskerville', serif",
      fontSize: "1.5rem",
      paddingTop: "15px",
      textAlign: "left",
      [sizes.down("md")]: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.3em",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        padding: "15px",
      },
    },
    [sizes.down("md")]: {
      display: "block",
      marginTop: "25px",
    },
  },
  society: {
    marginTop: "50px",
    [sizes.down("sm")]: {
      marginTop: "25px",
    },
  },
};

export default style;
