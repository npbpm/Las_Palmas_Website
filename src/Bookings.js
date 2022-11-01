import React, { useState, useContext } from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { send } from "emailjs-com";
import uuid from "react-uuid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import style from "./styles/BookingsStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/BookingWords";
import { IconButton } from "@mui/material";

const openNewTab = (e, url) => {
  e.preventDefault();
  window.open(url, "_blank", "noopener,noreferer");
};

function Bookings(props) {
  const { classes } = props;

  const [type, setType] = useState("text");

  const { language } = useContext(LanguageContext);

  const {
    title,
    name,
    email,
    phone,
    quantity,
    arrival,
    departure,
    message,
    sendMessage,
    contact,
    address,
    errName,
    errEmail,
    errPhone,
    errQuantity,
    errArrival,
    errDeparture,
  } = words[language];

  const [toSend, setToSend] = useState({
    bookingId: uuid(),
    Name: "",
    Email: "",
    Phone: "",
    Quantity: null,
    ArrivalDate: "",
    DepartureDate: "",
    Message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const changeType = (e) => {
    if (e.target.type === "text") {
      setType("date");
    } else {
      setType("text");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_uvl4c4p", "template_ijcu6n4", toSend, "d_teq7CIiSVMxLwaW")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      bookingId: uuid(),
      Name: "",
      Email: "",
      Phone: "",
      Quantity: null,
      ArrivalDate: "",
      DepartureDate: "",
      Message: "",
    });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h1">{title}</Typography>
      <div className={classes.content}>
        <div className={classes.form}>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              margin="dense"
              id="Name"
              name="Name"
              label={name}
              type="text"
              variant="standard"
              onChange={handleChange}
              value={toSend.Name}
              validators={["required"]}
              errorMessages={[errName]}
              sx={{ width: "80%" }}
            />
            <TextValidator
              margin="dense"
              id="Email"
              name="Email"
              label={email}
              type="email"
              variant="standard"
              onChange={handleChange}
              value={toSend.Email}
              validators={["required"]}
              errorMessages={[errEmail]}
              sx={{ width: "80%" }}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Phone"
              name="Phone"
              label={phone}
              type="text"
              variant="standard"
              onChange={handleChange}
              value={toSend.Phone}
              validators={["required"]}
              errorMessages={[errPhone]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Quantity"
              name="Quantity"
              label={quantity}
              type="number"
              variant="standard"
              onChange={handleChange}
              value={toSend.Quantity}
              validators={["required"]}
              errorMessages={[errQuantity]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="ArrivalDate"
              name="ArrivalDate"
              label={arrival}
              type={type}
              variant="standard"
              onChange={handleChange}
              value={toSend.ArrivalDate}
              onFocus={changeType}
              onBlur={changeType}
              validators={["required"]}
              errorMessages={[errArrival]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="DepartureDate"
              name="DepartureDate"
              label={departure}
              type={type}
              variant="standard"
              onChange={handleChange}
              value={toSend.DepartureDate}
              onFocus={changeType}
              onBlur={changeType}
              validators={["required"]}
              errorMessages={[errDeparture]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Message"
              name="Message"
              label={message}
              multiline
              variant="standard"
              onChange={handleChange}
              value={toSend.Message}
            />
            <Button variant="outlined" type="submit">
              {sendMessage}
            </Button>
          </ValidatorForm>
        </div>
        <div className={classes.contactUs}>
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
      </div>
    </div>
  );
}

export default withStyles(style)(Bookings);
