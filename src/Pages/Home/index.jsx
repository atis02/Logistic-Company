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
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(false);

  const { t } = useTranslation();
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Box
        sx={{
          pt: "25px",
          width: "100%",
          height: "91vh",
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
          spacing={3}
        >
          <Stack
            alignItems="start"
            spacing={{ lg: 3, md: 3, sm: 3, xs: 2 }}
            color="#8F6340"
            width={{ lg: "65%", md: "85%", sm: "100%", xs: "100%" }}
            pb={{ lg: 0, md: 0, xs: 1 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              width="100%"
              height={35}
              pt={{
                ...(hiddenText
                  ? { lg: "100px", md: "100px", sm: "100px", xs: "60px" }
                  : { lg: "200px", md: "150px", sm: "130px", xs: "100px" }),
              }}
              pb={{ lg: "25px", md: "23px", sm: "18px", xs: "15px" }}
            >
              <Typography
                data-aos="fade-up"
                data-aos-delay="100"
                minWidth="99%"
                data-aos-once="true"
                fontWeight="600"
                fontSize={{ lg: 48, md: 40, sm: 35, xs: 30 }}
                className="title"
                fontFamily="Montserrat"
                textAlign={{
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "center",
                }}
              >
                Jebel Al Uhood
              </Typography>

              <Divider
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
                sx={{ width: "1px", height: "40px", background: "#fff" }}
              />
            </Stack>
            <Stack width="100%">
              <Typography
                fontSize={14}
                width="auto"
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-delay="100"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                {t("desc")}
              </Typography>
              {hiddenText && (
                <Stack
                  fontSize={14}
                  width="auto"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  fontFamily="Montserrat"
                  fontWeight={500}
                  lineHeight="1.5"
                  letterSpacing="0.00938em"
                >
                  <Trans i18nKey="hideDesc" components={{ 1: <br /> }} />
                </Stack>
              )}
            </Stack>
            <Button
              onClick={() => setHiddenText(!hiddenText)}
              sx={{
                fontFamily: "Montserrat",
                width: "125px",
                heigth: "40px",
                ...(hiddenText
                  ? { backgroundColor: "#8F6340" }
                  : { backgroundColor: "#8F6340" }),
                color: "#fff",
                borderRadius: "26px",
                textTransform: "capitalize",
                "&:hover": { background: "#758F93" },
              }}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="800"
            >
              {t("read")}
            </Button>
          </Stack>
          <Stack
            width={{ lg: "90%", md: "90%", sm: "100%", xs: "80%" }}
            hegiht={{ lg: "90%", md: "90%", sm: "100%", xs: "80%" }}
            sx={{
              ...(hiddenText && isMobile ? { display: "none" } : ""),
            }}
            pt={{ lg: "50px", md: "50px", sm: "50px", xs: "0" }}
          >
            <img
              src="/images/Main.png"
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="aa"
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
