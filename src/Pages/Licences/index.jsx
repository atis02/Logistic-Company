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

const Licence = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
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
        mt: "80px",
      }}
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={30}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Лицензии на транспортные услуги
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
          ml={{ lg: 5, md: 3, xs: 2 }}
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
          spacing={7}
          ml={{ lg: 6, md: 3, xs: 2 }}
          mt={{ lg: "-15px", xs: 0 }}
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="300"
            color="#dbb45a"
          >
            Наименование
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            data-aos="fade-up"
            data-aos-delay="350"
            textAlign="center"
          >
            Авто экспедирование
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            data-aos="fade-up"
            data-aos-delay="400"
            textAlign="center"
          >
            Морское экспедирование
          </Typography>
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            data-aos="fade-up"
            data-aos-delay="450"
            textAlign="center"
          >
            Авиа экспедирование
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={7}
          ml={{ lg: 6, md: 3, xs: 2 }}
          mt={{ lg: "-15px", xs: 0 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
          >
            Серия
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            №: 1-22-16-182
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            №: 1-22-16-216
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            №: 1-22-16-318
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ lg: 7, md: 8, xs: 8.8 }}
          ml={{ lg: 6, md: 3, xs: 2 }}
          mt={{ lg: "-15px", xs: 0 }}
        >
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            textAlign="center"
            color="#dbb45a"
          >
            Период
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            2023-2026
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            2023-2026
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="600"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            2024-2027
          </Typography>
        </Stack>
        <Stack
          spacing={{ lg: 6.3, md: 6, xs: 5 }}
          ml={{ lg: 6, md: 3, xs: 2 }}
          mt={{ lg: "70px", md: "60px", xs: "52px" }}
          width={262}
        >
          <Typography
            sx={{ fontSize: { lg: 18, md: 16, xs: 14 } }}
            data-aos="fade-up"
            data-aos-delay="300"
            textAlign="center"
            color="#dbb45a"
          >
            Выдавший орган
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{ fontSize: { lg: 18, md: 16, xs: 10 } }}
            textAlign="center"
          >
            Агентство транспорта и коммуникаций при Кабинете Министров
            Туркменистана
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Licence;
