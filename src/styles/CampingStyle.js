import background from "../images/flat-mountains.svg";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    /* background by SVGBackgrounds.com */
    height: "1000px",
  },
  list: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  description: {
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgba(255,255,255,0.9)",
    "& li": {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
    },
  },
};

export default style;
