import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Typography } from "@mui/material";
import "./styles/Footer.css";
import { LanguageContext } from "./context/LanguageContext";
import NavButton from "./NavButton";
import words from "./text/FooterWords";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Footer() {
  const { language } = useContext(LanguageContext);

  const footerServices = {
    text: words[language].services,
    path: "/services",
    subservices: [
      {
        title: words[language].restaurant,
        path: "/restaurant",
      },
      {
        title: words[language].coffee,
        path: "/cofee-house",
      },
      {
        title: words[language].lodging,
        path: "/lodging",
      },
      {
        title: words[language].camping,
        path: "/camping",
      },
      {
        title: words[language].games,
        path: "/games",
      },
      {
        title: words[language].horse,
        path: "/horseback-riding",
      },
      {
        title: words[language].crafts,
        path: "/regional-crafts",
      },
      {
        title: words[language].glamping,
        path: "/cocora-nidos-del-condor",
      },
      {
        title: words[language].flowers,
        path: "/cocora-viva",
      },
    ],
  };

  const { access, home, packages, reviews, contact, address, developper } =
    words[language];

  return (
    <footer>
      <ul className="footer">
        <li className="list-section">
          <div>
            <Typography variant="h5" className="access">
              {access}
            </Typography>
            <ul>
              <li>
                <Link to="/">{home}</Link>
              </li>
              <li>
                <NavButton page={footerServices} />
              </li>
              <li>
                <Link to="/packages-and-sales">{packages}</Link>
              </li>
              <li>
                <Link to="/reviews">{reviews}</Link>
              </li>
              <li>
                <Link to="/contact-us">{contact}</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-section">
          <div>
            <Typography variant="h5">{contact}</Typography>
            <ul>
              <li>
                <span>
                  <PhoneIphoneIcon />
                </span>
                <span>
                  <a href="tel:+573137321738">313 732 1738</a>
                  <span> - </span>
                  <a href="tel:+573104555400">310 455 5400</a>
                </span>
              </li>
              <li>
                <span>
                  <EmailIcon />
                </span>
                <span>
                  <a href="mailto:info@laspalmasdecocora.com">
                    info@laspalmasdecocora.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <IconButton
                    onClick={(e) =>
                      openNewTab(
                        e,
                        "https://www.google.com/search?client=firefox-b-d&sa=X&sxsrf=ALiCzsahgPAlD5SdZC-i4R02AmNiPDM9hA:1667215479376&q=las%20palmas%20de%20cocora&ved=2ahUKEwiW6KXTrYr7AhVRgc4BHRyxBqAQvS56BAgREAE&biw=1920&bih=994&dpr=1&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13620438303685816251&lqi=ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF&rlst=f#rlfi=hd:;si:13620438303685816251,l,ChRsYXMgcGFsbWFzIGRlIGNvY29yYUj615vf7KqAgAhaJhAAEAEQAhADGAAYARgCGAMiFGxhcyBwYWxtYXMgZGUgY29jb3JhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VObGRIRkVSbU5SRUFF;mv:[[4.639404799999999,-75.4798235],[4.635233400000001,-75.5664604]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                      )
                    }
                    className="positionBtn"
                  >
                    <LocationOnIcon />
                  </IconButton>
                </span>
                <span>
                  Kilometro 10 Valle de Cocora Salento Quindío, {address}
                </span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="social-media">
        <p>
          <a
            className="developer"
            href="http://www.laspalmasdecocora.com"
            target="_blank"
            rel="noreferrer"
          >
            laspalmasdecocora.com
          </a>
          © 2022 | {developper}{" "}
          <a
            className="developer"
            href="https://www.linkedin.com/in/nicolas-perez-burbano/"
            target="_blank"
            rel="noreferrer"
          >
            Nicolás Pérez
          </a>
        </p>
        <div className="logos">
          <IconButton
            onClick={(e) =>
              openNewTab(e, "https://www.facebook.com/palmasdecocora/")
            }
          >
            <FacebookIcon className="logo" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(
                e,
                "https://api.whatsapp.com/send/?phone=573137321738&text&type=phone_number&app_absent=0"
              )
            }
          >
            <WhatsAppIcon className="logo" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
            }
          >
            <InstagramIcon className="logo" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

/* Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a> */

export default Footer;
