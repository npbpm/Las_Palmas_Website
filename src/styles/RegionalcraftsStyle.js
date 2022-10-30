import sizes from "./sizes";

const style = {
  content: {
    padding: "10px",
    display: "flex",
    marginTop: "100px",
    alignItems: "center",
    "& img": {
      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      borderRadius: "13px",
      maxWidth: "100%",
      maxHeight: "100%",
      width: "55%",
      [sizes.down("md")]: {
        width: "95%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20px",
      width: "40%",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      fontSize: "1.2em",
      [sizes.down("md")]: {
        width: "90%",
      },
      [sizes.down("us")]: {
        width: "85%",
      },
    },
    [sizes.down("md")]: {
      display: "block",
      marginTop: "60px",
    },
  },
  container: {
    textAlign: "center",
    "& h1": {
      [sizes.down("us")]: {
        fontSize: "4em",
      },
    },
  },
};

export default style;
