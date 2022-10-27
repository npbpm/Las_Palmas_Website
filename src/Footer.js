import React from "react";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Typography } from "@mui/material";
import "./styles/Footer.css";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Footer() {
  return (
    <footer>
      <ul className="footer">
        <li className="list-section">
          <div>
            <Typography variant="h5">Acceso Rapido</Typography>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/services">Servicios</Link>
              </li>
              <li>
                <Link to="/packages-and-sales">Planes y Promociones</Link>
              </li>
              <li>
                <Link to="/reviews">Testimonios</Link>
              </li>
              <li>
                <Link to="/contact-us">Contáctenos</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="list-section">
          <div>
            <Typography variant="h5">Contáctenos</Typography>
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
                  <LocationOnIcon />
                </span>
                <span>
                  Kilometro 10 Valle de Cocora Salento Quindío, primer
                  restaurante a mano izquierda
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
          >
            laspalmasdecocora.com
          </a>
          © 2022 | Desarrollado por{" "}
          <a
            className="developer"
            href="https://www.linkedin.com/in/nicolas-perez-burbano/"
            target="_blank"
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
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(
                e,
                "https://api.whatsapp.com/send/?phone=573137321738&text&type=phone_number&app_absent=0"
              )
            }
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={(e) =>
              openNewTab(e, "https://www.instagram.com/laspalmasdecocora/")
            }
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
