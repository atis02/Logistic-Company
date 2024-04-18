import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Footer = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: "#2F2F2F",
        height: { lg: "250px", md: "100%", xs: "100%" },
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
      id="Footer"
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={{ lg: 7.4, xs: 0 }}
          mt={2}
        >
          <Stack spacing={3}>
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-delay="300"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Location.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography>{t("location")}</Typography>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="400"
              direction="row"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Call.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                href="tel: +993 12 473577"
              >
                +993 12 473577
              </a>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="500"
              direction="row"
              width={{ lg: 420, md: 400, xs: 320 }}
              alignItems="center"
              spacing={1}
              pb={{ lg: 0, xs: 3 }}
            >
              <img
                src="/images/Fax.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography>+993 12 471577</Typography>
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <Stack
              direction="row"
              data-aos="fade-down"
              data-aos-delay="600"
              width={220}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Mail.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography>info@altynmiras.com</Typography>
            </Stack>
            <Stack
              data-aos="fade-down"
              data-aos-delay="700"
              direction="row"
              width={220}
              alignItems="center"
              spacing={1}
            >
              <img
                src="/images/Info.png"
                style={{ width: 24, height: 24 }}
                alt=""
              />
              <Typography>www.altynmiras.com</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          mt={{ xs: 4, lg: 0 }}
          flexWrap="wrap"
          spacing={7}
          alignItems="center"
        >
          <Stack
            sx={{
              width: { lg: 180, md: 160, xs: 150 },
              height: { lg: 160, md: 150, xs: 140 },
            }}
          >
            <img
              src="/images/image 68.png"
              alt=""
              data-aos="fade-down"
              data-aos-delay="800"
            />
          </Stack>
          <Stack
            sx={{
              width: { lg: 137, md: 127, xs: 117 },
              height: { lg: 126, md: 116, xs: 106 },
            }}
          >
            <img
              src="/images/image 51.png"
              data-aos="fade-down"
              data-aos-delay="900"
              alt=""
            />
          </Stack>
        </Stack>
        <Typography
          width="100%"
          data-aos="fade-down"
          data-aos-delay="1000"
          fontSize={16}
          textAlign="center"
        >
          © Alem Tilsimat {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
