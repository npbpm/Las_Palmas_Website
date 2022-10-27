import background from "../images/flat-mountains.svg";

const style = {
  content: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "auto",
    /* background by SVGBackgrounds.com */
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      margin: "5px",
      padding: "5px",
    },
  },
  intro: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "100px",
    borderRadius: "13px",
    marginLeft: "25px",
    marginRight: "15px",
  },
};

export default style;
