import sizes from "./sizes";

const style = {
  container: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    "& h1": {
      [sizes.down("md")]: {
        fontSize: "5em",
      },
      [sizes.down("us")]: {
        fontSize: "3.8em",
      },
    },
  },
  content: {
    backgroundColor: "#eeeeee",
    width: "90%",
    textAlign: "center",
    padding: "30px",
    borderRadius: "13px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    [sizes.down("md")]: {
      padding: 0,
    },
  },
  opinions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "30px",
    padding: "20px",
    [sizes.down("md")]: {
      padding: "10px",
    },
  },
  opinion: {
    margin: "5px",
    backgroundColor: "rgba(246,245,246,0.8)",
    width: "98%",
    borderRadius: "13px",
  },
};

export default style;
