import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        pt: { lg: "80px", md: "40px", xs: "5px" },
        width: "100%",
        height: "auto",
        color: "#fff",
        scrollMarginTop: "50px",
      }}
      id="services"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "30px",
          mb: "50px",
          fontFamily: "Poppins",
          gap: "30px",

          width: "100%",
        }}
      >
        <Stack>
          <Typography
            textAlign="center"
            className="title"
            fontSize={{ lg: 30, md: 28, xs: 25 }}
            data-aos-once="true"
            fontWeight={700}
            data-aos="fade-up"
            fontFamily="Montserrat"
            data-aos-delay="200"
          >
            {t("services")}
          </Typography>
        </Stack>
        <Stack
          width="100%"
          height="auto"
          direction={{ lg: "row", md: "row", xs: "column" }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            mt={{ xs: 2 }}
            p={{ lg: 0, md: 0, xs: 1 }}
            width="100%"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ gap: "30px" }}
          >
            <Stack
              direction="row"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="300"
              textAlign="justify"
              color="#8F6340"
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#758F93"
                fontFamily="Poppins"
                mr={2.9}
                pl={0.5}
              >
                1
              </Typography>
              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText1")}</span>{" "}
                {t("servicesText2")}
              </Typography>
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="400"
              fontSize={15}
              data-aos-once="true"
              textAlign="justify"
              direction="row"
              fontWeight={500}
              color="#8F6340"
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#758F93"
                mr={2}
              >
                2
              </Typography>
              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText3")}</span>{" "}
                {t("servicesText4")}
              </Typography>
            </Stack>
            <Stack
              data-aos-once="true"
              textAlign="justify"
              data-aos="fade-up"
              data-aos-delay="500"
              fontSize={15}
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
              color="#8F6340"
              direction="row"
              fontWeight={500}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#758F93"
                mr={2}
              >
                3
              </Typography>
              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText5")}</span>{" "}
                {t("servicesText6")}
              </Typography>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="600"
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
              color="#8F6340"
              fontSize={15}
              textAlign="justify"
              direction="row"
              fontWeight={500}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#758F93"
                mr={2}
              >
                4
              </Typography>
              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText7")}</span>{" "}
                {t("servicesText8")}
              </Typography>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-delay="700"
              fontSize={15}
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
              textAlign="justify"
              color="#8F6340"
              direction="row"
              fontWeight={500}
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                fontFamily="Poppins"
                color="#758F93"
                mr={2}
              >
                5
              </Typography>
              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText9")}</span>{" "}
                {t("servicesText10")}
              </Typography>
            </Stack>
            <Stack
              data-aos-once="true"
              data-aos="fade-up"
              textAlign="justify"
              data-aos-delay="800"
              width={{ lg: "45%", md: "45%", sm: "45%", xs: "100%" }}
              color="#8F6340"
              fontSize={15}
              fontWeight={500}
              direction="row"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#758F93"
                fontFamily="Poppins"
                mr={2}
              >
                6
              </Typography>

              <Typography fontFamily="Montserrat" fontSize={15}>
                <span style={{ fontWeight: 600 }}>{t("servicesText11")}</span>{" "}
                {t("servicesText12")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Advantages;
