import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { redirect } from "react-router-dom";
import { withStyles } from "@mui/styles";
import NavButton from "./NavButton";
import style from "./styles/NavbarStyle";

const pages = [
  { text: "Inicio", path: "/", subservices: 0 },
  {
    text: "El Lugar",
    path: "/location",
    subservices: [
      {
        title: "Quienes Somos?",
        path: "/who-are-we",
      },
      {
        title: "Como Llegar",
        path: "/arrive",
      },
      {
        title: "Valle de Cocora",
        path: "/cocora-valley",
      },
    ],
  },
  {
    text: "Servicios",
    path: "/services",
    subservices: [
      {
        title: "Restaurante",
        path: "/restaurant",
      },
      {
        title: "Casita del sabor",
        path: "/cofee-house",
      },
      {
        title: "Hospedaje",
        path: "/lodging",
      },
      {
        title: "Camping",
        path: "/camping",
      },
      {
        title: "Atracciones",
        path: "/games",
      },
      {
        title: "Paseos Écologicos a Caballo y Caminatas",
        path: "/horseback-riding",
      },
      {
        title: "Artesanías de la Región",
        path: "/regional-crafts",
      },
      {
        title: "Glamping Cocora Nidos del Condor",
        path: "/cocora-nidos-del-condor",
      },
      {
        title: "Vivero Cocora Viva",
        path: "/cocora-viva",
      },
    ],
  },
  {
    text: "Planes y Promociones",
    path: "/packages-and-sales",
    subservices: 0,
  },
  { text: "Testimonios", path: "/reviews", subservices: 0 },
  { text: "Reservas", path: "/booking", subservices: 0 },
  { text: "Contáctenos", path: "/contact-us", subservices: 0 },
];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { classes } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (newPath) => {
    setAnchorElNav(null);
    redirect(newPath);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img
              className={classes.logo}
              src={require("./images/PALMAS_DE_COCORA_LOGO-1-removebg-preview.png")}
              alt="Logo Not Found"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <NavButton
                    page={page}
                    handleCloseNavMenu={handleCloseNavMenu}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img
              className={classes.logo}
              src={require("./images/PALMAS_DE_COCORA_LOGO-1-removebg-preview.png")}
              alt="Logo Not Found"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              },
            }}
          >
            {pages.map((page, idx) => (
              <div style={{ margin: "20px" }}>
                <NavButton
                  key={idx}
                  page={page}
                  handleCloseNavMenu={handleCloseNavMenu}
                />
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withStyles(style)(ResponsiveAppBar);
