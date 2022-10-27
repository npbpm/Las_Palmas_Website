import background from "../images/flat-mountains.svg";

const style = {
  container: {
    display: "flex",
    borderRadius: "10px",
    paddingTop: "3px",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  images: {
    width: "40%",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  description: {
    width: "59%",
    height: "100%",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default style;
