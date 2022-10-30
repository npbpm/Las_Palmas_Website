import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import style from "./styles/NavButtonStyle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
        <Button
          className={classes.dropBtn}
          onMouseOver={(e) => handleMouseOver(e)}
          onClick={(e) => {
            e.stopPropagation();
            handleMouseOver(e);
          }}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {page.text}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          {page.subservices.map((subservice, idx) => (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={subservice.path}
              key={idx}
            >
              <MenuItem className={classes.menuItem}>
                {subservice.title}
              </MenuItem>
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
        style={{ color: "black" }}
      >
        {page.text}
      </Link>
    );
  }
}

export default withStyles(style)(MenuPopupState);
