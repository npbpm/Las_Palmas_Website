import sizes from "./sizes";

const style = {
  container: {
    display: "flex",
    paddingTop: "3px",
    width: "99%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "100px",
    alignItems: "center",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  images: {
    width: "40%",
    boxShadow:
      "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
    marginRight: "10px",
    borderRadius: "13px",
    [sizes.down("md")]: {
      display: "none",
    },
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
    fontFamily: "'Libre Baskerville', serif",
    backgroundColor: "#eeeeee",
    padding: "20px",
    borderRadius: "13px",
    fontSize: "1.3rem",
    "& img": {
      display: "none",
      [sizes.down("md")]: {
        display: "block",
      },
    },
    [sizes.down("md")]: {
      width: "95%",
      padding: "10px 4px",
      fontSize: "1rem",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    },
  },
};

export default style;
