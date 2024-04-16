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

const About = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();

  return (
    <Box
      id="aboutCompany"
      sx={{
        background: "#2F2F2F",
        height: "500px",
        backgroundImage: "url('/images/AboutHorizontal.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        alignItems: { lg: "center" },
        transition: " all ease 0.3s",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
          <img
            src="/images/pngwing 9.png"
            style={{ width: "530px", height: "360px" }}
            alt=""
          />
        </Stack>
        <Stack
          width={560}
          height={145}
          spacing={4}
          mt={{ lg: 8, md: 5, xs: 5 }}
        >
          <Typography
            fontSize={24}
            fontWeight={700}
            data-aos="fade-up"
            data-aos-delay="200"
            className="title"
          >
            {t("aboutCompany")}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="400"
            fontSize={16}
            color="#D6D6D6"
          >
            {t("aboutCompanyText")}
            <span className="title" style={{ fontWeight: "600" }}>
              {t("nameCompany")}
            </span>{" "}
            {t("aboutCompanyText2")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
