import React, { useState, memo, useContext } from "react";
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

const words = {
  spanish: {
    title: "Reservas",
    name: "Nombre",
    email: "Correo Electrónico",
    phone: "Teléfono",
    quantity: "Cantidad",
    arrival: "Fecha de Llegada",
    departure: "Fecha de Salida",
    message: "Mensaje",
    sendMessage: "Enviar",
    contact: "Contáctenos",
    address: "Primer restaurante a la izquierda",
    errName: "Porfavor llene su nombre",
    errEmail: "Porfavor introduzca un correo",
    errPhone: "Porfavor denos un número de teléfono",
    errQuantity: "Porfavor indiquenos cuanta gente sería",
    errArrival: "Indiquenos cuando llega",
    errDeparture: "Indiquenos cuando se va",
  },
  english: {
    title: "Bookings",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    quantity: "Quantity",
    arrival: "Arrival Date",
    departure: "Departure Date",
    message: "Message",
    sendMessage: "Send",
    contact: "Contact us",
    address: "First restaurant to your left",
    errName: "Please give us your name",
    errEmail: "Please give us an email",
    errPhone: "Please give us a phone number",
    errQuantity: "Please tell us how many people will be coming",
    errArrival: "Tell us when you are arriving",
    errDeparture: "Tell us when you are leaving",
  },
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
                <LocationOnIcon />
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

export default withStyles(style)(memo(Bookings));
