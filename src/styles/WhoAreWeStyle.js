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
    "& p": {
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "13px",
      padding: "10px",
    },
  },
  description: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "25em",
    width: "auto",
    margin: "2px",
    boxShadow: "10px 10px 5px #ccc",
    mozBoxShadow: "10px 10px 5px #ccc",
    webkitBoxShadow: "10px 10px 5px #ccc",
    khtmlBoxShadow: "10px 10px 5px #ccc",
    borderRadius: "5px",
  },
  imgCertificate: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "25em",
    width: "auto",
  },
  paragraph: {
    width: "20em",
    marginTop: 0,
    margin: "5px",
  },
  history: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default style;
