import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const Licence = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        height: "500px",
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        pt: "50px",
        mb: { lg: "80px", md: "30px", sm: "70px", xs: "10px" },
        scrollMarginTop: 50,
      }}
      id="Licences"
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={{ lg: 30, md: 28, sm: 26, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="300"
        fontFamily="Montserrat"
      >
        {t("licence")}
      </Typography>
      <Stack
        width={{ lg: "70%", md: "85%", sm: "80%", xs: "90%" }}
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent="center"
        sx={{
          height: 535,
          gap: { lg: 10, md: 8, sm: 4, xs: 0.5 },
          background: "#2F2F2F",
          mt: "30px",
          p: { lg: "80px", md: "50px", sm: "30px", xs: "10px" },
        }}
      >
        <Stack
          width={{ lg: "80%", md: "80%", sm: "100%", xs: "100%" }}
          direction="row"
          mt={10}
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="start"
              color="#dbb45a"
              height={{ lg: 76, md: 56, sm: 36, xs: 16 }}
              fontFamily="Montserrat"
              mr={1}
            >
              №
            </Typography>
            <Stack
              width="100%"
              height={76}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="350"
                fontSize={{ lg: 40, md: 33, xs: 23 }}
                textAlign="start"
                color="#dbb45a"
                fontFamily="Montserrat"
                mr={1}
              >
                1
              </Typography>
            </Stack>
            <Stack
              width="100%"
              height={76}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                fontSize={{ lg: 40, md: 33, xs: 23 }}
                textAlign="start"
                color="#dbb45a"
                mr={1}
                fontFamily="Montserrat"
              >
                2
              </Typography>
            </Stack>
            <Stack
              width="100%"
              height={76}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="450"
                fontSize={{ lg: 40, md: 33, xs: 23 }}
                textAlign="start"
                color="#dbb45a"
                fontFamily="Montserrat"
                mr={1}
              >
                3
              </Typography>
            </Stack>
          </Stack>
          <Stack width={280} ml={{ lg: -7, md: 0, sm: 0, xs: 0 }}>
            <Typography
              sx={{
                fontSize: { lg: 18, md: 16, xs: 12 },
                ...(i18n.language === "ru"
                  ? { height: { lg: 86, md: 66, sm: 46, xs: 25 } }
                  : { height: { lg: 76, md: 56, sm: 36, xs: 25 } }),
              }}
              textAlign="start"
              data-aos="fade-up"
              data-aos-delay="300"
              color="#dbb45a"
              fontFamily="Montserrat"
            >
              {t("licenceDesc")}
            </Typography>

            <Stack mt={-1} width="90%" height={76} justifyContent="center">
              <Typography
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                data-aos="fade-up"
                data-aos-delay="350"
                width="auto"
                direction="row"
                alignItems="center"
                fontFamily="Montserrat"
                textAlign="start"
              >
                <Trans i18nKey="licenceDesc2" components={{ 1: <br /> }} />
              </Typography>
            </Stack>
            <Stack width="90%" height={76} justifyContent="center">
              <Typography
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                data-aos="fade-up"
                data-aos-delay="400"
                fontFamily="Montserrat"
                textAlign="start"
              >
                <Trans i18nKey="licenceDesc3" components={{ 1: <br /> }} />
              </Typography>
            </Stack>
            <Stack width="90%" height={76} justifyContent="center">
              <Typography
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                data-aos="fade-up"
                data-aos-delay="450"
                textAlign="start"
                fontFamily="Montserrat"
              >
                <Trans i18nKey="licenceDesc4" components={{ 1: <br /> }} />
              </Typography>
            </Stack>
          </Stack>
          <Stack width={140}>
            <Typography
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
              textAlign="start"
              color="#dbb45a"
              fontFamily="Montserrat"
              height={{
                ...(i18n.language == "ru"
                  ? { lg: 76, md: 55, sm: 40, xs: 25 }
                  : { lg: 76, md: 76, sm: 40, xs: 25 }),
              }}
            >
              {t("series")}
            </Typography>
            <Stack
              height={76}
              width="100%"
              mt={{ lg: 0, md: 0, sm: 0, xs: -1 }}
              justifyContent="center"
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                textAlign="start"
                fontFamily="Montserrat"
                width="auto"
              >
                №: 1-22-16-182
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                textAlign="start"
              >
                №: 1-22-16-216
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-delay="600"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
                textAlign="start"
              >
                №: 1-22-16-318
              </Typography>
            </Stack>
          </Stack>
          <Stack width={140}>
            <Typography
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
              textAlign="start"
              height={{ lg: 76, md: 56, sm: 36, xs: 16 }}
              fontFamily="Montserrat"
              color="#dbb45a"
            >
              {t("period")}
            </Typography>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-delay="400"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
              >
                2023-2026
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
              >
                2023-2026
              </Typography>
            </Stack>
            <Stack height={76} width="100%" justifyContent="center">
              <Typography
                data-aos="fade-up"
                data-aos-delay="600"
                sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
                width="auto"
                fontFamily="Montserrat"
              >
                2024-2027
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          width={{ lg: 250, md: "100%", sm: "100%", xs: "100%" }}
          height="100%"
          justifyContent="center"
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-delay="300"
            textAlign={{ lg: "start", md: "start", sm: "start", xs: "center" }}
            height={{ lg: 95, md: 80, sm: 60, xs: 56 }}
            color="#dbb45a"
            mt={{ lg: 0, md: -5, sm: 0, xs: 0 }}
            fontFamily="Montserrat"
          >
            {t("permit")}
          </Typography>
          <Stack
            height={{ lg: 135, md: 86, sm: 76, xs: "100%" }}
            alignItems="start"
            width={"100%"}
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{
                fontSize: { lg: 18, md: 16, xs: 14 },
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
              fontFamily="Montserrat"
              textAlign="start"
              width="auto"
            >
              <Trans i18nKey="permit2" components={{ 1: <br /> }} />
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              fontFamily="Montserrat"
              sx={{
                fontSize: { lg: 18, md: 16, xs: 14 },
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
              textAlign="start"
              width="auto"
            >
              {t("permit3")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Licence;
