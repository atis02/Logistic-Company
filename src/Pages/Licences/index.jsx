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
      >
        {t("licence")}
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: 535,
          gap: { lg: 10, md: 8, sm: 4, xs: 0.5 },
          width: "100%",
          background: "#2F2F2F",
          mt: "30px",
          p: "80px",
        }}
      >
        <Stack alignItems="center">
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="start"
            color="#dbb45a"
            height={76}
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
              mr={1}
            >
              3
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center" width={220}>
          <Typography
            sx={{
              fontSize: { lg: 18, md: 16, xs: 14 },
              ...(i18n.language === "ru" ? { height: 86 } : { height: 76 }),
            }}
            textAlign="start"
            data-aos="fade-up"
            data-aos-delay="300"
            color="#dbb45a"
          >
            {t("licenceDesc")}
          </Typography>
          <Stack
            width="90%"
            height={76}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              data-aos="fade-up"
              data-aos-delay="350"
              width="auto"
              direction="row"
              alignItems="center"
              textAlign="start"
            >
              <Trans i18nKey="licenceDesc2" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
          <Stack
            width="90%"
            height={76}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              data-aos="fade-up"
              data-aos-delay="400"
              pl={{ lg: 3, md: 3, sm: 3, xs: 0 }}
              textAlign="start"
            >
              <Trans i18nKey="licenceDesc3" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
          <Stack
            width="90%"
            height={76}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              data-aos="fade-up"
              data-aos-delay="450"
              textAlign="start"
            >
              <Trans i18nKey="licenceDesc4" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center" width={140}>
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="start"
            color="#dbb45a"
            height={{
              ...(i18n.language == "ru"
                ? { lg: 76, md: 76, sm: 76, xs: 85 }
                : { lg: 76, md: 76, sm: 76, xs: 96 }),
            }}
          >
            {t("series")}
          </Typography>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="400"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="start"
              width="auto"
            >
              №: 1-22-16-182
            </Typography>
          </Stack>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              width="auto"
              textAlign="start"
            >
              №: 1-22-16-216
            </Typography>
          </Stack>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="600"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              width="auto"
              textAlign="start"
            >
              №: 1-22-16-318
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center" width={90}>
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="start"
            height={76}
            color="#dbb45a"
          >
            {t("period")}
          </Typography>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="400"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="start"
              width="auto"
            >
              2023-2026
            </Typography>
          </Stack>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="start"
              width="auto"
            >
              2023-2026
            </Typography>
          </Stack>
          <Stack
            height={76}
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="600"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="start"
              width="auto"
            >
              2024-2027
            </Typography>
          </Stack>
        </Stack>
        <Stack width={190} height="100%" alignItems="center">
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-delay="300"
            textAlign="start"
            height={{ lg: 100, md: 100, sm: 100, xs: 130 }}
            color="#dbb45a"
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
              textAlign="start"
              width={{ lg: "auto", md: "auto", sm: "auto", xs: 75 }}
            >
              <Trans i18nKey="permit2" components={{ 1: <br /> }} />
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{
                fontSize: { lg: 18, md: 16, xs: 14 },
                display: { lg: "block", md: "block", sm: "block", xs: "none" },
              }}
              textAlign="start"
              width={{ lg: "auto", md: "auto", sm: "auto", xs: 75 }}
            >
              {t("permit3")}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Licence;
