import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import { Trans, useTranslation } from "react-i18next";

const OurWorks = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        pt: "50px",
        pb: "60px",
        scrollMarginTop: "50px",
      }}
      id="OurWorks"
    >
      <Typography
        textAlign="center"
        className="title"
        fontSize={30}
        fontWeight={700}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {t("ourWorks")}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          mt: "30px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ flexWrap: "wrap", gap: "30px" }}
        >
          <Stack
            backgroundColor="#2F2F2F"
            width={320}
            height={410}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/images/Rectangle 13.png"
              style={{ width: 320, height: 320 }}
              alt=""
            />
            <Typography
              fontWeight={600}
              textAlign="center"
              mt={2}
              fontSize={16}
              p="5px 30px 5px 30px"
            >
              {t("medicaments")}
            </Typography>
          </Stack>
          <Stack
            data-aos="fade-up"
            data-aos-delay="400"
            backgroundColor="#2F2F2F"
            width={320}
            height={410}
          >
            <img
              src="/images/Rectangle 13 (1).png"
              style={{ width: 320, height: 320 }}
              alt=""
            />
            <Typography
              fontWeight={600}
              textAlign="center"
              mt={2}
              fontSize={16}
              p="5px 60px 5px 60px"
            >
              {t("mebels")}
            </Typography>
          </Stack>
          <Stack
            data-aos="fade-up"
            data-aos-delay="500"
            backgroundColor="#2F2F2F"
            width={320}
            height={410}
          >
            <img
              src="/images/Rectangle 13 (2).png"
              style={{ width: 320, height: 320 }}
              alt=""
            />
            <Typography
              fontWeight={600}
              textAlign="center"
              mt={2}
              fontSize={16}
              p="5px 30px 5px 30px"
            >
              {t("warn")}
            </Typography>
          </Stack>
          <Stack
            data-aos="fade-up"
            data-aos-delay="600"
            backgroundColor="#2F2F2F"
            width={320}
            height={410}
          >
            <img
              src="/images/Rectangle 13 (3).png"
              style={{ width: 320, height: 320 }}
              alt=""
            />
            <Typography
              fontWeight={600}
              p="5px"
              textAlign="center"
              mt={3}
              fontSize={16}
            >
              {t("railw")}
            </Typography>
          </Stack>
          <Stack
            data-aos="fade-up"
            data-aos-delay="700"
            backgroundColor="#2F2F2F"
            width={320}
            height={410}
          >
            <img
              src="/images/Rectangle 13 (4).png"
              style={{ width: 320, height: 320 }}
              alt=""
            />
            <Typography
              fontWeight={600}
              p="5px"
              textAlign="center"
              mt={3}
              fontSize={16}
            >
              {t("automobile")}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          mt="80px"
          backgroundColor="#2F2F2F"
          p={{ lg: "30px 80px", md: "20px 40px", xs: "15px 20px" }}
        >
          <Typography
            data-aos="fade-up"
            fontSize={{ lg: 16, md: 15, xs: 14 }}
            data-aos-delay="300"
          >
            {t("ourCompany")}
            <span style={{ color: "#dbb45a" }}> {t("nameCompany")}</span> -
            <Trans i18nKey="ourCompnanyText" components={{ 1: <br /> }} />
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            mt={5}
            spacing={{ lg: 6, md: 0, xs: 0 }}
          >
            <Stack style={{ width: 290, height: 170 }}>
              <img
                src="/images/Rectangle 18.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Stack>
            <Stack style={{ width: 290, height: 170 }}>
              <img
                src="/images/Rectangle 16.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </Stack>
            <Stack style={{ width: 290, height: 170 }}>
              <img
                src="/images/Rectangle 17.png"
                alt=""
                data-aos="fade-up"
                data-aos-delay="700"
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurWorks;
