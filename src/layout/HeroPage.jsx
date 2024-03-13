import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, Outlet } from "react-router-dom";
import { red } from "@mui/material/colors";
import { Divider } from "@mui/material";
import "./HeroPage.css";


const pages = [
  <Box>
    <Link className="navlink-mobile" to="/">
      Home
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="category">
      Category
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Products">
      Products
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Productttt">
      Guesthouse
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="Pickup">
      Pick-up
    </Link>
  </Box>,
  <Box>
    <Link className="navlink-mobile" to="search">
      search
    </Link>
  </Box>,
];

function HeroPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <Box className="navarea">
      <Box
        className="firstNavArea"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        color="white"
      >
        <Box display={"flex"} gap={2} color="white">
          <IconButton size="small">
            <LocationOnIcon
              sx={{
                mx: 1,
                color: red[500],
              }}
            />
            <Box color="white" fontSize={14}>
              Uttara Sector 11,Dhaka
            </Box>
          </IconButton>

          <IconButton size="small">
            <CallIcon
              sx={{
                color: red[500],
                mx: 1,
              }}
            />
            <Box color="white" fontSize={14}>
              {" "}
              +880 1745001556
            </Box>
          </IconButton>
          <IconButton size="small">
            <EmailIcon
              sx={{
                color: red[500],
                mx: 1,
              }}
            />
            <Box color="white" fontSize={14}>
              shahnajparven21@gmail.com
            </Box>
          </IconButton>
        </Box>
        <Box display={"flex"} justifyContent={"right"} gap={2}>
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <FacebookOutlinedIcon />
          </IconButton>

          <IconButton sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ background: "gray" }} />
      <AppBar position="static" className="appbar">
        <Container maxWidth="xl">
          <Toolbar className="tolbar">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                variant="span"
                fontWeight={"bold"}
                fontSize={30}
                mx={1}
                className="logo_name"
                color={red[500]}
              >
                rentHouse
              </Box>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Box textAlign="center">{page}</Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                variant="span"
                fontWeight={"bold"}
                fontSize={30}
                mx={1}
                className="logo_name"
                color={red[500]}
              >
                rentHouse
              </Box>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

             <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                userOption
              </Menu>
            </Box> 
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
     <Box component="main">
     <Toolbar />
     <Toolbar />
     {/* this is where children pages will show */}
     <Outlet />
   </Box>
  
   </>
  );
}
export default HeroPage;
