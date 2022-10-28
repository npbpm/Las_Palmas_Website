import React, { useState, memo } from "react";
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

function Bookings(props) {
  const { classes } = props;

  const [type, setType] = useState("text");

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
      <Typography variant="h1">Reservas</Typography>
      <div className={classes.content}>
        <div className={classes.form}>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              margin="dense"
              id="Name"
              name="Name"
              label="Nombre"
              type="text"
              variant="standard"
              onChange={handleChange}
              value={toSend.Name}
              validators={["required"]}
              errorMessages={["Porfavor llene su nombre"]}
              sx={{ width: "80%" }}
            />
            <TextValidator
              margin="dense"
              id="Email"
              name="Email"
              label="Email"
              type="email"
              variant="standard"
              onChange={handleChange}
              value={toSend.Email}
              validators={["required"]}
              errorMessages={["Porfavor llene su Email"]}
              sx={{ width: "80%" }}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Phone"
              name="Phone"
              label="Teléfono"
              type="text"
              variant="standard"
              onChange={handleChange}
              value={toSend.Phone}
              validators={["required"]}
              errorMessages={["Porfavor llene su Teléfono"]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Quantity"
              name="Quantity"
              label="Quantity"
              type="number"
              variant="standard"
              onChange={handleChange}
              value={toSend.Quantity}
              validators={["required"]}
              errorMessages={["Porfavor indiquenos cuanta gente vendrías"]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="ArrivalDate"
              name="ArrivalDate"
              label="Arrival Date"
              type={type}
              variant="standard"
              onChange={handleChange}
              value={toSend.ArrivalDate}
              onFocus={changeType}
              onBlur={changeType}
              validators={["required"]}
              errorMessages={["Porfavor indiquenos cuando empieza su estadía"]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="DepartureDate"
              name="DepartureDate"
              label="Departure Date"
              type={type}
              variant="standard"
              onChange={handleChange}
              value={toSend.DepartureDate}
              onFocus={changeType}
              onBlur={changeType}
              validators={["required"]}
              errorMessages={["Porfavor indiquenos cuando termina su estadía"]}
            />
            <TextValidator
              sx={{ width: "80%" }}
              margin="dense"
              id="Message"
              name="Message"
              label="Message"
              multiline
              variant="standard"
              onChange={handleChange}
              value={toSend.Message}
            />
            <Button variant="outlined" type="submit">
              Enviar
            </Button>
          </ValidatorForm>
        </div>
        <div className={classes.contactUs}>
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
                Kilometro 10 Valle de Cocora Salento Quindío, primer restaurante
                a mano izquierda
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(memo(Bookings));
