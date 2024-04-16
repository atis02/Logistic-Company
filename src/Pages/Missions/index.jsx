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

const Missions = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box id="Goals" sx={{ pt: "80px", color: "#fff", height: "130vh" }}>
      <Typography
        textAlign="center"
        className="title"
        fontSize={{ lg: 30, md: 28, xs: 25 }}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {t("missionsGoals")}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          mt={4}
          direction="row"
          alignItems="center"
          mb={5}
          data-aos="fade-up"
          data-aos-delay="500"
          spacing={2}
        >
          <img
            src="/images/goal.png"
            style={{
              width: 104,
              height: 104,
            }}
            alt=""
          />
          <Stack maxWidth={725}>
            <Typography fontSize={18} textAlign="center" fontWeight={600}>
              {t("missionsCompany")}
            </Typography>
            <Typography fontSize={{ lg: 14, md: 13, xs: 12 }}>
              {t("missionText")}
              <br />
              {t("missionText2")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          data-aos="fade-up"
          data-aos-delay="700"
          direction="row"
          ml={{ lg: 35, md: 20, xs: 0 }}
          alignItems="center"
          spacing={2}
        >
          <Stack maxWidth={725}>
            <Typography fontSize={18} textAlign="center" fontWeight={600}>
              {t("goals")}
            </Typography>
            <Typography fontSize={{ lg: 14, md: 13, xs: 12 }}>
              {t("goalsText1")}
              <br />
              {t("goalsText2")}
            </Typography>
          </Stack>
          <img
            src="/images/goal2.png"
            style={{ width: 104, height: 104 }}
            alt=""
          />
        </Stack>
        <Stack
          alignItems="center"
          ml={{ lg: 24, md: 14, xs: 0 }}
          mt={15}
          position="absolute"
          minHeight="260px"
          top={{ lg: 2100, md: 2300, xs: 2450 }}
          sx={{
            width: { lg: "785px", md: "685px", xs: "330px" },
            opacity: "0.2",
            height: { lg: "488px", md: "388px", xs: "250px" },
          }}
        >
          <img width="100%" src="/images/Map.png" alt="" />
        </Stack>

        <Typography
          textAlign="center"
          fontWeight={700}
          className="title"
          fontSize={{ lg: 30, md: 28, xs: 25 }}
          mt="60px"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {t("services")}
        </Typography>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          mt={6}
          flexWrap="wrap"
        >
          <Stack
            spacing={2}
            style={{ width: 140, height: 110 }}
            alignItems="center"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <img
              style={{ width: 110, height: 110 }}
              src="/images/Frame 29 (1).png"
              alt=""
            />
            <Typography textAlign="center">{t("import")}</Typography>
          </Stack>
          <Stack
            style={{ width: 140, height: 110 }}
            spacing={2}
            alignItems="center"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <img
              style={{ width: 110, height: 110 }}
              src="/images/Frame 29.png"
              alt=""
            />
            <Typography textAlign="center">{t("export")}</Typography>
          </Stack>
          <Stack
            mt={{ xs: 6, lg: 0, md: 0 }}
            spacing={2}
            style={{ width: 140, height: 110 }}
            data-aos="fade-up"
            alignItems="center"
            data-aos-delay="1000"
          >
            <img
              style={{ width: 110, height: 110 }}
              src="/images/Frame 34.png"
              alt=""
            />
            <Typography textAlign="center">{t("tranzit")}</Typography>
          </Stack>
          <Stack
            mt={{ xs: 6, lg: 0, md: 0 }}
            alignItems="center"
            spacing={2}
            style={{ width: 140, height: 110 }}
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <img
              style={{ width: 110, height: 110 }}
              src="/images/Frame 30.png"
              alt=""
            />
            <Typography textAlign="center">{t("soprowozden")}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Missions;
