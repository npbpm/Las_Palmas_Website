import background from "../images/flat-mountains.svg";

const style = {
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    /* background by SVGBackgrounds.com */
  },
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
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(255,255,255,0.8)",
    },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
  },
};

export default style;
