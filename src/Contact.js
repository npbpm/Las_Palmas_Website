import React, { useState, memo } from "react";
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
      <Typography variant="h1">Contáctenos</Typography>
      <div className={classes.content}>
        <div className={classes.form}>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              sx={{ width: "80%" }}
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
            />
            <TextValidator
              margin="dense"
              sx={{ width: "80%" }}
              id="Email"
              name="Email"
              label="Email"
              type="email"
              variant="standard"
              onChange={handleChange}
              value={toSend.Email}
              validators={["required"]}
              errorMessages={["Porfavor llene su Email"]}
            />
            <TextValidator
              margin="dense"
              sx={{ width: "80%" }}
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
              margin="dense"
              sx={{ width: "80%" }}
              id="City"
              name="City"
              label="City"
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
