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
        <Stack
          alignItems="center"
          // spacing={{ lg: 3, xs: 6.5 }}
          // ml={{ lg: 5, md: 3, xs: 1 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
            height={76}
            mr={2}
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
              textAlign="center"
              color="#dbb45a"
              mr={2}
              // height={76}
              // pt={{ lg: 2, md: 1, xs: 0 }}
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
              textAlign="center"
              color="#dbb45a"
              // height={76}
              mr={2}
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
              textAlign="center"
              color="#dbb45a"
              // height={76}
              mr={2}
            >
              3
            </Typography>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          // spacing={{ lg: 7, md: 7, xs: 6 }}
          // ml={{ lg: 6, md: 3, xs: 1 }}
          // mt={{
          //   lg: "-15px",
          //   ...(i18n.language === "ru" ? { xs: -1 } : { xs: -3 }),
          // }}
          width={220}
        >
          <Typography
            height={76}
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="300"
            color="#dbb45a"
          >
            {t("licenceDesc")}
          </Typography>
          <Stack
            width="100%"
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
              justifyContent="center"
              textAlign="center"
            >
              {t("licenceDesc2")}
            </Typography>
          </Stack>
          <Stack
            width="100%"
            height={76}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              data-aos="fade-up"
              data-aos-delay="400"
              textAlign="center"
            >
              {t("licenceDesc3")}
            </Typography>
          </Stack>
          <Stack
            width="100%"
            height={76}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              data-aos="fade-up"
              data-aos-delay="450"
              textAlign="center"
            >
              {t("licenceDesc4")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          // spacing={{ lg: 7, xs: 5.9 }}
          // ml={{ lg: 6, md: 3, xs: 1 }}
          // mt={{ lg: "-15px", xs: 0.4 }}
          width={140}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
            height={{
              ...(i18n.language == "ru"
                ? { lg: 76, md: 76, sm: 76, xs: 85 }
                : { lg: 76, md: 76, sm: 76, xs: 96 }),
            }}

            // pb={{ lg: 0, xs: 1.5 }}
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
              textAlign="center"
              width="auto"

              // pt={{ lg: 0, md: 0, xs: -4 }}
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
              textAlign="center"
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
              textAlign="center"
            >
              №: 1-22-16-318
            </Typography>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          // spacing={{ lg: 7, md: 8, xs: 6 }}
          // ml={{ lg: 6, md: 3, xs: 1 }}
          width={90}
          // mt={{ lg: "-15px", xs: -1.2 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
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
              textAlign="center"
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
              textAlign="center"
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
              textAlign="center"
              width="auto"
            >
              2024-2027
            </Typography>
          </Stack>
        </Stack>
        <Stack
          // spacing={{
          //   lg: 6.3,
          //   md: 6,
          //   ...(i18n.language === "en" ? { xs: 5.5 } : { xs: 4 }),
          // }}
          // ml={{ lg: 6, md: 3, xs: 1 }}
          // mt={{
          //   lg: "70px",
          //   md: "60px",
          //   ...(i18n.language === "ru" ? { xs: "50px" } : { xs: "70px" }),
          // }}
          // width={{ lg: 262, md: 232, xs: 122 }}
          width={190}
          alignItems="center"
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-delay="300"
            textAlign="center"
            height={105}
            color="#dbb45a"
          >
            {t("permit")}
          </Typography>
          <Stack
            height={{ lg: 145, md: 86, sm: 76, xs: 142 }}
            alignItems="center"
            width={"100%"}
            justifyContent="center"
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
              textAlign="center"
              width={{ lg: "auto", md: "auto", sm: "auto", xs: 75 }}
            >
              <Trans i18nKey="permit2" components={{ 1: <br /> }} />
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Licence;
