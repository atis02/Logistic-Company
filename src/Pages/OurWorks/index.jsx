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
  Grid,
} from "@mui/material";
import Aos from "aos";

const OurWorks = () => {
  Aos.init({
    duration: 1500,
    offset: 0,
  });
  return (
    <Box
      sx={{
        background: "#1E1E1E",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        pt: "80px",
        pb: "100px",
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
        Наши работы
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
              p="5px"
            >
              Перевозка медикоментов (Европа Туркменистан)
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
              p="5px"
            >
              Перевозка мебели (Европа Туркменистан)
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
              p="5px"
            >
              Огнеупорные кирпичи (Германия-Туркменистан)
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
              mt={2}
              fontSize={16}
            >
              Железнодорожные перевозки
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
              mt={2}
              fontSize={16}
            >
              Автоперевозки
            </Typography>
          </Stack>
        </Stack>
        <Stack
          mt="80px"
          backgroundColor="#2F2F2F"
          p={{ lg: "30px 60px", md: "20px 40px", xs: "15px 20px" }}
        >
          <Typography
            data-aos="fade-up"
            fontSize={{ lg: 16, md: 15, xs: 14 }}
            data-aos-delay="300"
          >
            Наша компания{" "}
            <span style={{ color: "#dbb45a" }}> “ Алтын Мирас “</span> -
            предлагает оптимальные решения в области логистики.
            <br /> Мы накопили опыт во многих промышленных и масштабных проектах
            страны с достойным успехом.
            <br /> Мы будем рады встретиться для проведения детальных
            переговоров и обсудить варианты сотрудничества вместе с Вами.
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            mt={5}
            spacing={{ lg: 1, md: 0, xs: 0 }}
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
