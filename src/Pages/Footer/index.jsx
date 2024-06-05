import React from "react";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: "lightgray",
        height: { lg: "270px", md: "100%", xs: "100%" },
        color: "#8F6340",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        p: { lg: "30px 0 10px 0", xs: "20px 0 10px 0" },
      }}
      id="Footer"
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "space-between",
            xs: "start",
          },
          pb: 2,
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 5, xs: 0 }}
          width={{ lg: "60%", md: "60%", sm: "50%", xs: "100%" }}
          mt={2}
        >
          <Stack
            spacing={3}
            width={{ lg: "60%", md: "72%", sm: "82%", xs: "100%" }}
          >
            <Stack direction="row" alignItems="center" width="100%" spacing={1}>
              <LocationOnIcon />

              <Typography fontFamily="Montserrat" fontWeight={500} width="80%">
                <Trans i18nKey="location" components={{ 1: <br /> }} />
              </Typography>
            </Stack>
            <Stack direction="row" width="100%" alignItems="center" spacing={1}>
              <CallIcon />

              <a
                style={{
                  color: "#8F6340",
                  textDecoration: "none",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
                href="tel: +971585884978"
              >
                +971 58 588 4978
              </a>
              <img
                src="/images/whatsapp.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Stack direction="row" width="auto" alignItems="center" spacing={1}>
              <EmailIcon />

              <Typography fontFamily="Montserrat" fontWeight={500}>
                <a
                  style={{ textDecoration: "none", color: "#8F6340" }}
                  href="mailto:uhuddubai@gmail.com"
                >
                  uhuddubai@gmail.com
                </a>
              </Typography>
            </Stack>
            <Stack direction="row" width="auto" alignItems="center" spacing={1}>
              <LanguageIcon />
              <Typography fontFamily="Montserrat" fontWeight={500}>
                <a
                  style={{ textDecoration: "none", color: "#8F6340" }}
                  href="https://juhudts.com"
                >
                  www.juhudts.com
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: { lg: 280, md: "30%", sm: "80%", xs: "90%" },
            height: { lg: 160, md: "30%", sm: "80%", xs: "90%" },
          }}
          mt={{ xs: 2, lg: 0 }}
          mb={{ xs: 2, lg: 3 }}
          pl={{ lg: 0, md: 0, sm: 6, xs: 4 }}
        >
          <a href="/">
            <img
              src="/images/UHOOD LOGO.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </Stack>
      </Container>

      <Typography
        width="100%"
        fontSize={14}
        textAlign="center"
        fontFamily="Montserrat"
        color="gray"
        fontWeight={500}
        borderTop="1px solid gray"
        pt={1}
      >
        Copyright © {new Date().getFullYear()} Jebel Al Uhood | Powered by{" "}
        <a
          href="https://alemtilsimat.com/"
          style={{ textDecoration: "none", color: "gray" }}
        >
          Alem Tilsimat
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
