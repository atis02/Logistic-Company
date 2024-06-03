import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
    once: true,
  });
  const { t } = useTranslation();

  return (
    <Box
      id="aboutCompany"
      sx={{
        background: "#F0FFFF ",
        height: { lg: "250px", md: "360px", sm: "300px", xs: "300px" },
        width: "100%",
        display: "flex",
        alignItems: { lg: "center" },
        transition: " all ease 0.3s",
        scrollMarginTop: "150px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
        }}
      >
        <Stack sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
          <img
            src="/images/JebelAbout.jpg"
            style={{ width: "530px", height: "360px", borderRadius: "7px" }}
            alt=""
          />
        </Stack>
        <Stack
          width={{ lg: 560, md: 560, sm: "100%", xs: "100%" }}
          height={145}
          spacing={2}
          mt={{ lg: 0, md: 1, xs: 1 }}
        >
          <Typography
            fontSize={24}
            fontWeight={700}
            data-aos="fade-up"
            data-aos-delay="200"
            fontFamily="Montserrat"
            textAlign="center"
            pt={{ lg: "50px", md: "30px", xs: "10px" }}
            className="title"
          >
            {t("aboutCompany")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            fontSize={16}
            fontFamily="Montserrat"
            color="#8F6340"
            fontWeight={600}
            textAlign="justify"
          >
            {t("aboutText")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
