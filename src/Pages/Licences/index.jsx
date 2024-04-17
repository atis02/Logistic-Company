import React from "react";
import {
  MenuItem,
  Box,
  Button,
  Divider,
  Container,
  Select,
  Stack,
  InputLabel,
  FormControl,
  Typography,
  TextField,
} from "@mui/material";
import Aos from "aos";
import { useTranslation } from "react-i18next";

const Licence = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
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
        fontSize={30}
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
          height: 435,
          width: "100%",
          background: "#2F2F2F",
          mt: "30px",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ lg: 3, xs: 6.5 }}
          // spacing={3}
          ml={{ lg: 5, md: 3, xs: 1 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
            mr={2}
          >
            №
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="350"
            fontSize={{ lg: 40, md: 33, xs: 23 }}
            textAlign="center"
            color="#dbb45a"
            mr={2}
            pt={{ lg: 2, md: 1, xs: 0 }}
          >
            1
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            fontSize={{ lg: 40, md: 33, xs: 23 }}
            textAlign="center"
            color="#dbb45a"
            mr={2}
          >
            2
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="450"
            fontSize={{ lg: 40, md: 33, xs: 23 }}
            textAlign="center"
            color="#dbb45a"
            mr={2}
          >
            3
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ lg: 7, md: 7, xs: 6 }}
          ml={{ lg: 6, md: 3, xs: 1 }}
          mt={{ lg: "-15px", xs: -1 }}
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="300"
            color="#dbb45a"
          >
            {t("licenceDesc")}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            data-aos="fade-up"
            data-aos-delay="350"
            textAlign="center"
          >
            {t("licenceDesc2")}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            data-aos="fade-up"
            data-aos-delay="400"
            textAlign="center"
          >
            {t("licenceDesc3")}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            data-aos="fade-up"
            data-aos-delay="450"
            textAlign="center"
          >
            {t("licenceDesc4")}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ lg: 7, xs: 3.7 }}
          ml={{ lg: 6, md: 3, xs: 1 }}
          mt={{ lg: "-15px", xs: 0.4 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
            pb={{ lg: 0, xs: 1.5 }}
          >
            {t("series")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            №: 1-22-16-182
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            №: 1-22-16-216
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            №: 1-22-16-318
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ lg: 7, md: 8, xs: 6 }}
          ml={{ lg: 6, md: 3, xs: 1 }}
          mt={{ lg: "-15px", xs: -1.2 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
          >
            {t("period")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            2023-2026
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            2023-2026
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
          >
            2024-2027
          </Typography>
        </Stack>
        <Stack
          spacing={{ lg: 6.3, md: 6, xs: 3 }}
          ml={{ lg: 6, md: 3, xs: 1 }}
          mt={{ lg: "70px", md: "60px", xs: "49px" }}
          width={262}
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-delay="300"
            textAlign="center"
            color="#dbb45a"
          >
            {t("permit")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 12 } }}
            textAlign="center"
            width={{ lg: "100%", xs: "75px" }}
          >
            {t("permit2")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Licence;
