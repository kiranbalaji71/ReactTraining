import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Link,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

function Navbar({ count }) {
  const theme = useTheme();
  const mobilerRes = useMediaQuery(theme.breakpoints.up("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className="Navbar">
      <Box
        sx={{
          p: 2,
          backgroundColor: "#242424",
          color: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
        }}
      >
        <Typography variant="h4">Shopping Cart</Typography>
        {mobilerRes ? (
          <div>
            <Button color="inherit">
              <Link
                href="/"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <HomeIcon />
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                href="/cart"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <ShoppingCartIcon sx={{ display: "inline" }} />
                <Typography
                  variant="body2"
                  sx={{
                    ml: "-10px",
                    display: "inline",
                    p: "0 5px",
                    backgroundColor: "#ff0000",
                    borderRadius: "100%",
                  }}
                >
                  {count.length}
                </Typography>
              </Link>
            </Button>
            <Button
              color="inherit"
              onClick={() => localStorage.removeItem("login")}
            >
              <Link
                href="/login"
                sx={{ color: "#ffffff", textDecoration: "none" }}
              >
                Logout
              </Link>
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ color: "#ffffff" }}
            >
              <MenuIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem>
                <Button color="inherit">
                  <Link
                    href="/"
                    sx={{ color: "#000000", textDecoration: "none" }}
                  >
                    <HomeIcon /> Home
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color="inherit">
                  <Link
                    href="/cart"
                    sx={{ color: "#000000", textDecoration: "none" }}
                  >
                    <ShoppingCartIcon /> Cart
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  color="inherit"
                  onClick={() => localStorage.removeItem("login")}
                >
                  <Link
                    href="/login"
                    sx={{ color: "#000000", textDecoration: "none" }}
                  >
                    Logout
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </div>
  );
}

export default Navbar;
