import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
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
          height: "85vh",
        }}
      >
        <Stack
          direction={{
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          }}
          alignItems="center"
          width="auto"
          heigh="100%"
          justifyContent="center"
        >
          <Stack
            alignItems="start"
            // minWidth={{ lg: 480, md: 400, xs: 330 }}
            spacing={3}
            color="#fff"
            width={{ lg: "65%", md: "85%", xs: "100%" }}
            pb={{ lg: 0, md: 0, xs: 1 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              width="90%"
              height={35}
              pt={{ lg: "200px", md: "150px", sm: "130px", xs: "100px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                width="100%"
                fontWeight="600"
                fontSize={{ lg: 48, md: 40, sm: 35, xs: 30 }}
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
            <Typography
              fontSize={14}
              width="auto"
              data-aos="fade-up"
              data-aos-delay="700"
            >
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
          <Stack
            width={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
            hegiht={{ lg: "100%", md: "100%", sm: "50%", xs: "80%" }}
          >
            <img
              src="/images/Home.png"
              style={{
                // ...(isMobile ? { display: "none" } : { display: "block" }),
                // top: "100px",
                // left: "580px",
                // position: "absolute",
                width: "100%",
                height: "100%",
              }}
              alt="aa"
            />
          </Stack>
          {/* <Stack
            sx={{
              ...(isMobile ? { display: "block" } : { display: "none" }),
            }}
          >
            <img
              src="/images/Home.png"
              style={{ width: 320, height: 250 }}
              alt="bb"
            />
          </Stack> */}
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
