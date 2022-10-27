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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow: "10px 10px 5px #ccc",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
    },
    "& p": {
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "rgba(255,255,255,0.85)",
      borderRadius: "13px",
      width: "90%",
    },
  },
  sales: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  packages: {
    width: "90%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  package: {
    margin: "5px",
    width: "24%",
    "& ul": {
      textAlign: "left",
    },
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: "13px",
    paddingTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

export default style;
