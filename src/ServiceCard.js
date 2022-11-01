import React from "react";
import "./styles/ServiceCard.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function ServiceCard(props) {
  const { img, title, description, display, path } = props;

  if (display % 2 === 0) {
    return (
      <div className="service-card">
        <div className="service-card-img">
          <Link to={path}>
            <img
              className="service-card-image"
              src={require(`${img}`)}
              alt="Restaurant"
            />
          </Link>
        </div>
        <div className="service-card-text">
          <Typography variant="h5" className="title">
            {title}
          </Typography>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="service-card right">
        <div className="service-card-text">
          <Typography variant="h5" className="title">
            {title}
          </Typography>
          <p className="description">{description}</p>
        </div>
        <div className="service-card-img">
          <Link to={path}>
            <img
              className="service-card-image"
              src={require(`${img}`)}
              alt="Restaurant"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default ServiceCard;
