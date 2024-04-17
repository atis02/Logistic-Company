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

const Advantages = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{ pt: { lg: "80px", md: "40px", xs: "10px" }, color: "#fff" }}
      id="Advantages"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "30px",
          gap: "30px",
        }}
      >
        <Stack>
          <Typography
            textAlign="center"
            className="title"
            fontSize={{ lg: 30, md: 28, xs: 25 }}
            fontWeight={700}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("advantages")}
          </Typography>
        </Stack>
        <Stack direction={{ lg: "row", md: "row", xs: "column" }}>
          <Stack
            sx={{
              width: { lg: "617px", md: "517px", xs: "360px" },
              height: { lg: "356px", md: "256px", xs: "156px" },
              zIndex: "100",
            }}
          >
            <img src="/images/Map.png" alt="" />
          </Stack>
          <Stack spacing={1} mt={{ xs: 6 }} p={{ lg: 0, md: 0, xs: 3 }}>
            <Stack
              fontSize={15}
              direction="row"
              data-aos="fade-up"
              data-aos-delay="300"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                1
              </Typography>
              {t("advText1")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="400"
              fontSize={15}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                2
              </Typography>
              {t("advText2")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="500"
              fontSize={15}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                3
              </Typography>
              {t("advText3")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="600"
              fontSize={15}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                4
              </Typography>
              {t("advText4")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="700"
              fontSize={15}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                5
              </Typography>
              {t("advText5")}
            </Stack>
            <Stack
              data-aos="fade-up"
              data-aos-delay="800"
              fontSize={15}
              direction="row"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                6
              </Typography>
              {t("advText6")}
            </Stack>
            <Stack
              fontSize={15}
              direction="row"
              data-aos="fade-up"
              data-aos-delay="900"
              alignItems="center"
            >
              <Typography
                fontSize={{ lg: 43, md: 37, xs: 30 }}
                color="#dbb45a"
                mr={2}
              >
                7
              </Typography>
              {t("advText7")}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Advantages;
