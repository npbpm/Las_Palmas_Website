import sizes from "./sizes";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginTop: "100px",
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "10px",
      marginRight: "auto",
      backgroundColor: "#eeeeee",
      fontFamily: "'Libre Baskerville', serif !important",
      borderRadius: "13px",
      padding: "30px",
      lineHeight: "1.9em",
      [sizes.down("md")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  container: {
    textAlign: "center",
  },
};

export default style;
