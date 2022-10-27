import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem } from "@mui/material";
import {
  TextValidator,
  SelectValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";
import { lightGreen } from "@mui/material/colors";

export default function FormDialog(props) {
  const { addOpinion } = props;
  const [evaluation, setEvaluation] = React.useState(null);
  const [name, setName] = React.useState("");
  const [opinion, setOpinion] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEvaluation(null);
    setOpinion("");
    setName("");
  };

  const handleChange = (event) => {
    setEvaluation(event.target.value);
  };

  const handleOpinionChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    let newOpinion = {
      name: name,
      evaluation: evaluation,
      message: opinion,
    };
    addOpinion(newOpinion);
    handleClose();
  };

  const evaluations = [
    {
      value: 0,
      text: "Pobre",
    },
    {
      value: 1,
      text: "Regular",
    },
    {
      value: 2,
      text: "Bueno",
    },
    {
      value: 3,
      text: "Muy Bueno",
    },
    {
      value: 4,
      text: "Excelente",
    },
  ];

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ color: lightGreen[800], borderColor: lightGreen[500] }}
        onClick={handleClickOpen}
      >
        Nuevo Testimonio
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Testimonio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Su opinión es muy importante para nosotros!
          </DialogContentText>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleNameChange}
              value={name}
              validators={["required"]}
              errorMessages={["Porfavor llene su nombre"]}
            />
            <SelectValidator
              margin="dense"
              id="name"
              label="Puntuación"
              select
              value={evaluation}
              fullWidth
              variant="standard"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["Porfavor seleccione un puntaje"]}
            >
              {evaluations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </SelectValidator>
            <TextValidator
              margin="dense"
              id="name"
              label="Dejenos su opinión"
              multiline
              fullWidth
              variant="standard"
              value={opinion}
              onChange={handleOpinionChange}
              validators={["required"]}
              errorMessages={["Porfavor dejenos su opinión"]}
            />
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Enviar</Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
