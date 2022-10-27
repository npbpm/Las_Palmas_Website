import background from "../images/flat-mountains.svg";

const styles = {
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  description: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginTop: "15px",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "40%",
    height: "auto",
    boxShadow: "10px 10px 5px #ccc",
    mozBoxShadow: "10px 10px 5px #ccc",
    webkitBoxShadow: "10px 10px 5px #ccc",
    khtmlBoxShadow: "10px 10px 5px #ccc",
  },
  paragraph: {
    width: "28%",
  },
};

export default styles;
