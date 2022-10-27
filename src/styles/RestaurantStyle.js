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
      padding: "10px",
    },
  },
  content: {
    display: "flex",
    padding: "10px",
  },
  text: {
    backgroundColor: "rgba(255,255,255,0.9)",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    marginLeft: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  menu: {
    color: "black",
  },
  environments: {},
};

export default style;
