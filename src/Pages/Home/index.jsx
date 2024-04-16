import React, { useState } from "react";
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
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Navbar from "../../Components/Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <Container>
      <Box
        sx={{
          pt: "25px",
          height: "100vh",
        }}
      >
        <Stack
          direction={{
            lg: "row",
            md: "row",
            xs: "column",
          }}
          alignItems="center"
        >
          <Stack
            alignItems="start"
            width={{ lg: 480, md: 400, xs: 330 }}
            spacing={3}
            color="#fff"
            pb={{ lg: 0, md: 0, xs: 5 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              minWidth={302}
              height={35}
              pt={{ lg: "200px", md: "150px", xs: "100px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                width="110%"
                fontWeight="600"
                fontSize={{ lg: 48, md: 40, xs: 35 }}
                className="title"
              >
                Altyn Miras
              </Typography>

              <Divider
                sx={{ width: "1px", height: "100%", background: "#fff" }}
              />
              <Typography data-aos="fade-up" data-aos-delay="600" fontSize={12}>
                logistic company
              </Typography>
            </Stack>
            <Typography fontSize={14} data-aos="fade-up" data-aos-delay="700">
              {t("company")}
              <span className="title" style={{ fontWeight: "600" }}>
                {t("nameCompany")}
              </span>{" "}
              {t("description")}
              {hiddenText && <Stack>{t("hideDesc")}</Stack>}
            </Typography>
            <Button
              onClick={() => setHiddenText(!hiddenText)}
              sx={{
                width: "125px",
                heigth: "40px",
                background: "#DBB45A",
                color: "#fff",
                borderRadius: "26px",
                textTransform: "capitalize",
              }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {t("read")}
            </Button>
          </Stack>
          <Stack>
            <img
              src="/images/Home.png"
              style={{
                ...(isMobile ? { display: "none" } : { display: "block" }),
                top: "100px",
                left: "580px",
                position: "absolute",
              }}
              alt=""
            />
          </Stack>
          <Stack
            sx={{
              width: 320,
              height: 250,
              ...(isMobile ? { display: "block" } : { display: "none" }),
            }}
          >
            <img src="/images/Home.png" alt="" />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
