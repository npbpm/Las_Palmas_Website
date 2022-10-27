import background from "../images/flat-mountains.svg";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  content: {
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "90%",
    textAlign: "center",
  },
  opinions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  opinion: {
    margin: "5px",
    backgroundColor: "rgba(246,245,246,0.8)",
    width: "98%",
    borderRadius: "13px",
  },
};

export default style;
