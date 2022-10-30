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
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import words from "./text/FormDialogWords";

export default function FormDialog(props) {
  const { addOpinion } = props;
  const [evaluation, setEvaluation] = React.useState(null);
  const [name, setName] = React.useState("");
  const [opinion, setOpinion] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const { language } = useContext(LanguageContext);

  const {
    newR,
    text,
    cancel,
    send,
    poor,
    medium,
    good,
    veryGood,
    excelent,
    nameRequired,
    scoreRequired,
    reviewRequired,
  } = words[language];

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
      text: poor,
    },
    {
      value: 1,
      text: medium,
    },
    {
      value: 2,
      text: good,
    },
    {
      value: 3,
      text: veryGood,
    },
    {
      value: 4,
      text: excelent,
    },
  ];

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ color: lightGreen[800], borderColor: lightGreen[500] }}
        onClick={handleClickOpen}
      >
        {newR}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{newR}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoFocus
              margin="dense"
              id="name"
              label={language === "spanish" ? "Nombre" : "Name"}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleNameChange}
              value={name}
              validators={["required"]}
              errorMessages={[nameRequired]}
            />
            <SelectValidator
              margin="dense"
              id="name"
              label={language === "spanish" ? "Puntuación" : "Score"}
              select
              value={evaluation}
              fullWidth
              variant="standard"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={[scoreRequired]}
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
              label={
                language === "spanish"
                  ? "Dejenos su opinión"
                  : "Leave us your opinion"
              }
              multiline
              fullWidth
              variant="standard"
              value={opinion}
              onChange={handleOpinionChange}
              validators={["required"]}
              errorMessages={[reviewRequired]}
            />
            <Button onClick={handleClose}>{cancel}</Button>
            <Button type="submit">{send}</Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
