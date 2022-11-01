import sizes from "./sizes";

const style = {
  dropBtn: {
    color: "black !important",
    textDecoration: "none !important",
    fontWeight: "500 !important",
    fontSize: "1rem !important",
    bgcolor: "transparent",
    textTransform: "none",
    fontFamily: "'Lobster', cursive !important",
    [sizes.down("md")]: {
      fontSize: "1rem !important",
      marginLeft: "-12px !important",
    },
  },
  link: {
    color: "white",
    display: "block",
    fontSize: "1.2rem",
    fontWeight: "500",
    textDecoration: "none",
    fontFamily: "'Lobster', cursive !important",
    width: "100%",
    [sizes.down("md")]: {
      fontSize: "1rem",
    },
  },
  menuItem: {
    fontFamily: "'Libre Baskerville', serif !important",
    fontSize: "1em",
    width: "100% !important",
  },
  menuItemNoSubServices: {
    fontFamily: "'Lobster', cursive !important",
    fontSize: "1em !important",
    width: "100% !important",
  },
};

export default style;
