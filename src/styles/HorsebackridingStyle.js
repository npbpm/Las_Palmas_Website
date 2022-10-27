import background from "../images/flat-mountains.svg";

const style = {
  content: {
    padding: "10px",
    display: "flex",
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
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
      backgroundColor: "rgba(255,255,255,0.8)",
    },
    alignItems: "center",
  },
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1000px",
    /* background by SVGBackgrounds.com */
  },
};

export default style;
