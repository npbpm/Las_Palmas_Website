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
    display: "flex",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  contactUs: {
    width: "30%",
    padding: "10px",
    textAlign: "center",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
  },
  form: {
    padding: "20px",
    width: "20%",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "13px",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
};

export default style;
