import React, { useEffect, useState } from "react";
import {
  MenuItem,
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Menu,
} from "@mui/material";
import Language from "../../Components/Language/Language";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex="1000"
      p={{
        lg: "10px 185px 0 185px",
        md: "5px 100px 0 100px",
        xs: "4px 20px 0 20px",
      }}
      sx={{
        ...(scrolled
          ? { boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.15)" }
          : { boxShadow: "0" }),
        background: "#F0FFFF",
      }}
    >
      <Stack
        width={{ lg: 86, md: 80, sm: 75, xs: 70 }}
        height={{ lg: 65, md: 60, sm: 55, xs: 55 }}
        alignItems="center"
        justifyContent="center"
      >
        <a href="/">
          <img
            src="/images/Logo.png"
            style={{ width: "100%", height: "100%", pt: 5 }}
            alt=""
          />
        </a>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          ...(isMobile ? { display: "none" } : { display: "flex" }),
          gap: "30px",
        }}
      >
        <a
          className="nav-links2"
          style={{ color: "#8F6340" }}
          href="#aboutCompany"
        >
          {t("aboutCompany")}
        </a>
        <a className="nav-links2" style={{ color: "#8F6340" }} href="#services">
          {t("services")}
        </a>
        <a className="nav-links2" style={{ color: "#8F6340" }} href="#Footer">
          {t("contacts")}
        </a>
        <Language />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ ...(isMobile ? { display: "flex" } : { display: "none" }) }}
      >
        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            width: 24,
            height: 24,
            p: 0,
          }}
        >
          <MenuIcon sx={{ color: "#8F6340" }} />
        </IconButton>

        <Language />
      </Stack>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
      >
        <Box
          className="mobile-menu"
          sx={{
            bg: "#8F6340",
            height: "100%",
            mt: "220px",
            padding: "16px 0",
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            height="35px"
            alignItems="center"
          >
            <Button sx={{ color: "currentColor" }} onClick={toggleMobileMenu}>
              <svg
                fillRule="evenodd"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
              </svg>
            </Button>
            <Stack direction="column" alignItems="center" spacing={2}>
              <a
                className="nav-links2"
                onClick={() => setMobileMenuOpen(false)}
                href="#aboutCompany"
              >
                {t("aboutCompany")}
              </a>
              <a
                className="nav-links2"
                onClick={() => setMobileMenuOpen(false)}
                href="#services"
              >
                {t("services")}
              </a>
              <a
                className="nav-links2"
                onClick={() => setMobileMenuOpen(false)}
                href="#Footer"
              >
                {t("contacts")}
              </a>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
