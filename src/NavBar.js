import React, { useContext } from "react";
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
import { green } from "@mui/material/colors";
import { Select } from "@mui/material";
import { LanguageContext } from "./context/LanguageContext";

const words = {
  spanish: {
    home: "Inicio",
    place: "El Lugar",
    who: "Quienes Somos?",
    arrive: "Como Llegar",
    valley: "Valle de Cocora",
    services: "Servicios",
    restaurant: "Restaurante",
    coffee: "Casita del Sabor",
    lodging: "Hospedaje",
    camping: "Campamento",
    games: "Atracciones",
    horse: "Paseos Écologicos a Caballo y Caminatas",
    crafts: "Artesanías de la Región",
    glamping: "Glamping Cocora Nidos del Condor",
    flowers: "Vivero Cocora Viva",
    packages: "Planes y Promociones",
    reviews: "Testimonios",
    bookings: "Reservas",
    contact: "Contáctenos",
  },
  english: {
    home: "Home",
    place: "The Place",
    who: "Who Are We?",
    arrive: "How to Arrive",
    valley: "Cocora Valley",
    services: "Services",
    restaurant: "Restaurant",
    coffee: "Coffee House",
    lodging: "Lodging",
    camping: "Camping",
    games: "Games",
    horse: "Horse Back Riding",
    crafts: "Regional Crafts",
    glamping: "Glamping Cocora Nidos del Condor",
    flowers: "Florist Cocora Viva",
    packages: "Packages & Promotions",
    reviews: "Reviews",
    bookings: "Bookings",
    contact: "Contact us",
  },
};

const ResponsiveAppBar = (props) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const pages = [
    { text: words[language].home, path: "/", subservices: 0 },
    {
      text: words[language].place,
      path: "/location",
      subservices: [
        {
          title: words[language].who,
          path: "/who-are-we",
        },
        {
          title: words[language].arrive,
          path: "/arrive",
        },
        {
          title: words[language].valley,
          path: "/cocora-valley",
        },
      ],
    },
    {
      text: words[language].services,
      path: "/services",
      subservices: [
        {
          title: words[language].restaurant,
          path: "/restaurant",
        },
        {
          title: words[language].coffee,
          path: "/cofee-house",
        },
        {
          title: words[language].lodging,
          path: "/lodging",
        },
        {
          title: words[language].camping,
          path: "/camping",
        },
        {
          title: words[language].games,
          path: "/games",
        },
        {
          title: words[language].horse,
          path: "/horseback-riding",
        },
        {
          title: words[language].crafts,
          path: "/regional-crafts",
        },
        {
          title: words[language].glamping,
          path: "/cocora-nidos-del-condor",
        },
        {
          title: words[language].flowers,
          path: "/cocora-viva",
        },
      ],
    },
    {
      text: words[language].packages,
      path: "/packages-and-sales",
      subservices: 0,
    },
    { text: words[language].reviews, path: "/reviews", subservices: 0 },
    { text: words[language].bookings, path: "/booking", subservices: 0 },
    { text: words[language].contact, path: "/contact-us", subservices: 0 },
  ];

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
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
              flexGrow: 0,
              display: {
                xs: "none",
                width: "auto",
                height: "50px",
                md: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                backgroundColor: `${green[500]}`,
                borderRadius: "30px",
                border: "solid 0.2rem #eeeeee",
                boxShadow: "rgba(27, 176, 9, 0.1) 0px 4px 12px",
              },
            }}
          >
            {pages.map((page, idx) => (
              <div key={idx} style={{ margin: "20px" }}>
                <NavButton
                  page={page}
                  handleCloseNavMenu={handleCloseNavMenu}
                />
              </div>
            ))}
            <div style={{ margin: "20px" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={changeLanguage}
                size="small"
              >
                <MenuItem value="spanish">🇨🇴</MenuItem>
                <MenuItem value="english">🇺🇸</MenuItem>
              </Select>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withStyles(style)(ResponsiveAppBar);
