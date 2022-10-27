import background from "../images/flat-mountains.svg";

const style = {
  content: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "10px",
      marginRight: "auto",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "13px",
    },
  },
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    /* background by SVGBackgrounds.com */
  },
};

export default style;
