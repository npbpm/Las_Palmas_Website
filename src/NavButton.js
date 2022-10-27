import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, redirect } from "react-router-dom";
import { withStyles } from "@mui/styles";
import style from "./styles/NavButtonStyle";

function MenuPopupState(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { page, classes, handleCloseNavMenu } = props;

  const open = Boolean(anchorEl);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (page.subservices !== 0) {
    return (
      <React.Fragment>
        <Link className={classes.link} to={page.path}>
          <Button
            onMouseOver={(e) => handleMouseOver(e)}
            onClick={(e) => {
              e.stopPropagation();
              redirect(page.path);
            }}
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "1.2rem",
              bgcolor: "transparent",
              textTransform: "none",
            }}
          >
            {page.text}
          </Button>
        </Link>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          {page.subservices.map((subservice, idx) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={subservice.path}
              key={idx}
            >
              <MenuItem>{subservice.title}</MenuItem>
            </Link>
          ))}
        </Menu>
      </React.Fragment>
    );
  } else {
    return (
      <Link
        className={classes.link}
        to={page.path}
        onClick={(e) => handleCloseNavMenu(e, page.path)}
      >
        {page.text}
      </Link>
    );
  }
}

export default withStyles(style)(MenuPopupState);
