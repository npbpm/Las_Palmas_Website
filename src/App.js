import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ErrorSite from "./ErrorSite";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhoAreWe from "./WhoAreWe";
import Arrive from "./Arrive";
import CocoraValley from "./CocoraValley";
import Restaurant from "./Restaurant";
import CofeeHouse from "./CofeeHouse";
import Lodging from "./Lodging";
import Camping from "./Camping";
import Games from "./Games";
import Horsebackriding from "./Horsebackriding";
import Regionalcrafts from "./Regionalcrafts";
import Glamping from "./Glamping";
import Cocoraviva from "./Cocoraviva";
import Packages from "./Packages";
import Reviews from "./Reviews";
import Bookings from "./Bookings";
import Contact from "./Contact";
import { withStyles } from "@mui/styles";
import style from "./styles/AppStyle";
import { memo } from "react";
import { LanguageProvider } from "./context/LanguageContext";

function App(props) {
  const { classes } = props;

  return (
    <div className="App">
      <LanguageProvider>
        <div className="container">
          <div className={classes.homeHeader}>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorSite />} />
            <Route path="/services" element={<ErrorSite />} />
            <Route path="/packages-and-sales" element={<Packages />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/booking" element={<Bookings />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/who-are-we" element={<WhoAreWe />} />
            <Route path="/arrive" element={<Arrive />} />
            <Route path="/cocora-valley" element={<CocoraValley />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/cofee-house" element={<CofeeHouse />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/camping" element={<Camping />} />
            <Route path="/games" element={<Games />} />
            <Route path="/horseback-riding" element={<Horsebackriding />} />
            <Route path="/regional-crafts" element={<Regionalcrafts />} />
            <Route path="/cocora-nidos-del-condor" element={<Glamping />} />
            <Route path="/cocora-viva" element={<Cocoraviva />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </div>
  );
}

export default withStyles(style)(memo(App));
