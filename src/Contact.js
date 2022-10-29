import React, { useState, memo, useContext } from "react";
import { withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { send } from "emailjs-com";
import uuid from "react-uuid";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import style from "./styles/ContacStyle";
import { Typography } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: {
    title: "Contáctenos",
    name: "Nombre",
    email: "Correo Electrónico",
    phone: "Teléfono",
    city: "Ciudad",
    message: "Mensaje",
    sendMessage: "Enviar",
    contact: "Contáctenos",
    address: "Primer restaurante a la izquierda",
    errName: "Porfavor llene su nombre",
    errEmail: "Porfavor introduzca un correo",
    errPhone: "Porfavor denos un número de teléfono",
  },
  english: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    city: "City",
    message: "Message",
    sendMessage: "Send",
    contact: "Contact us",
    address: "First restaurant to your left",
    errName: "Please give us your name",
    errEmail: "Please give us an email",
    errPhone: "Please give us a phone number",
  },
};

function Bookings(props) {
  const { classes } = props;

  const [toSend, setToSend] = useState({
    ContactFormId: uuid(),
    Name: "",
    Email: "",
    Phone: "",
    City: "",
    Message: "",
  });

  const { language } = useContext(LanguageContext);

  const {
    title,
    name,
    email,
    phone,
    city,
    message,
    sendMessage,
    contact,
    address,
    errName,
    errEmail,
    errPhone,
  } = words[language];

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_oa8nh6n", "template_v6auhov", toSend, "d_teq7CIiSVMxLwaW")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      ContactFormId: uuid(),
      Name: "",
      Email: "",
      Phone: "",
      City: "",
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
              sx={{ width: "80%" }}
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
            />
            <TextValidator
              margin="dense"
              sx={{ width: "80%" }}
              id="Email"
              name="Email"
              label={email}
              type="email"
              variant="standard"
              onChange={handleChange}
              value={toSend.Email}
              validators={["required"]}
              errorMessages={[errEmail]}
            />
            <TextValidator
              margin="dense"
              sx={{ width: "80%" }}
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
              margin="dense"
              sx={{ width: "80%" }}
              id="City"
              name="City"
              label={city}
              type="text"
              variant="standard"
              onChange={handleChange}
              value={toSend.City}
            />
            <TextValidator
              margin="dense"
              sx={{ width: "80%" }}
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
