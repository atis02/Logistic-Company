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
  easing,
} from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Image } from "mui-image";
import { Trans, useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        background: "#2F2F2F",
        height: { lg: 600, md: 600, xs: 700 },
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay, Scrollbar, A11y]}
        >
          <SwiperSlide sx={{ paddingBottom: "40px" }}>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={5}
            >
              <Stack
                sx={{
                  width: { lg: 590, md: 490, xs: 320 },
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/image 59.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>
              <Stack
                width={{ lg: "665px", md: "465px", xs: "325px" }}
                p={{ lg: 0, md: 0, xs: 2 }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  mb={2}
                  className="title"
                >
                  {t("multiModal")}
                </Typography>
                <Typography fontSize={{ lg: 18, md: 14, xs: 12 }}>
                  <Trans i18nKey="multiModalText" components={{ 1: <br /> }} />
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
            >
              <Stack
                sx={{
                  width: { lg: 590, md: 490, xs: 320 },
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/Group 6.png"
                  duration={0}
                  style={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack
                width={{ lg: "665px", md: "465px", xs: "325px" }}
                flexWrap="wrap"
                p={{ lg: 0, md: 0, xs: 2 }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  className="title"
                  mb={2}
                >
                  {t("railway")}
                </Typography>
                <Typography fontSize={{ lg: 18, md: 14, xs: 12 }}>
                  {/* <Trans i18nKey="multiModalText" components={{ 1: <br /> }} /> */}
                  Железнодорожные перевозки – один из наиболее экономных
                  способов транспортировки грузов. Особенно это относится к
                  отправке тяжелых грузов на дальние расстояния.
                  <br /> Наша команда осуществляет международные грузовые
                  перевозки железнодорожным транспортом по странам СНГ, Европы,
                  Китая.
                  <br /> Возможна повагонная отправка и перевозка в составе
                  прямого контейнерного поезда.
                  <br />
                  Предлагаем следующие услуги :<br /> - расчет наиболее выгодных
                  ж/д маршрутов; <br />- предоставление вагонов;
                  <br /> - расчет провозных тарифов;
                  <br /> - помощь в получении документов при оформлении вагонов.
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={4}
            >
              <Stack
                sx={{
                  width: { lg: 590, md: 490, xs: 320 },
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/Frame 55.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack
                width={{ lg: "665px", md: "465px", xs: "325px" }}
                p={{ lg: 0, md: 0, xs: 2 }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  textAlign="center"
                  className="title"
                  mb={2}
                >
                  АВТОПЕРЕВОЗКИ
                </Typography>
                <Typography fontSize={{ lg: 18, md: 14, xs: 12 }}>
                  Грузовые перевозки через автодороги являются наиболее
                  распространённым видом перевозок. <br /> Благодаря широкой
                  географии и короткому транзитному времени делают этот вид
                  грузоперевозок очень привлекательным.{" "}
                  <span className="title" style={{ fontWeight: "600" }}>
                    “Алтын Мирас”
                  </span>{" "}
                  оказывает услуги :<br /> – при перевозке грузов общего типа и
                  с классом опасности;
                  <br /> – консолидированные отправки;
                  <br /> – при перевозке грузов с температурными режимами;{" "}
                  <br />– организация перецепок для иностранных авто.
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={6}
            >
              <Stack
                sx={{
                  width: { lg: 590, md: 490, xs: 320 },
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  duration={0}
                  src="/images/ship.png"
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack
                width={{ lg: "665px", md: "465px", xs: "325px" }}
                p={{ lg: 0, md: 0, xs: 2 }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  className="title"
                  textAlign="center"
                  mb={2}
                >
                  МОРСКИЕ ПЕРЕВОЗКИ
                </Typography>
                <Typography fontSize={{ lg: 18, md: 14, xs: 12 }}>
                  Самый оптимальный по затратам, но в тоже время самый долгий по
                  транзитному времени вид перевозок.
                  <br /> При регулярных перевозках и при хорошем планировании
                  помогает сэкономить ресурсы и бесперебойно снабжать
                  логистическую цепь вашего предприятия.
                  <br />
                  Наша команда специалистов поможет вам :<br /> – выбрать
                  наиболее выгодный морской фрахт;
                  <br /> – сделать расчет всех портовых и транзитных расходов;{" "}
                  <br />– безопасно перегрузить ваш груз в морских портах;
                  <br /> В числе наших партнеров такие крупнейшие морские линии
                  как Hapag-lloyd, Maersk и Evergreen, зарекомендовавшие себя
                  лидерами данного рынка.
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ lg: "row", md: "row", xs: "column" }}
              alignItems="center"
              justifyContent="space-between"
              spacing={{ lg: 6, md: 4, xs: 3 }}
              mb={6}
            >
              <Stack
                sx={{
                  width: { lg: 590, md: 490, xs: 320 },
                  height: { lg: 490, md: 390, xs: 280 },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/airplane.png"
                  duration={0}
                  sx={{
                    borderRadius: "10px",

                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Stack>

              <Stack
                width={{ lg: "665px", md: "465px", xs: "325px" }}
                p={{ lg: 0, md: 0, xs: 2 }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  className="title"
                  textAlign="center"
                  mb={2}
                >
                  АВИАПЕРЕВОЗКИ
                </Typography>
                <Typography fontSize={{ lg: 18, md: 14, xs: 12 }}>
                  Самый быстрый и в тоже время самый высокозатратный способ
                  перевозок. <br /> Специалисты{" "}
                  <span className="title" style={{ fontWeight: "600" }}>
                    “Алтын Мирас”
                  </span>{" "}
                  имеют опыт как при перевозках грузов общего типа, так и с
                  грузами с температурными режимами и классом опасности.
                  <br /> Наши специалисты окажут вам следующие услуги:
                  <br /> – бронирование места в самолете;
                  <br />
                  – доставка от терминала в аэропорт; <br />– оформление
                  авианакладной; <br />– предполетный досмотр;
                  <br /> – оплата терминальных сборов;
                  <br /> – хранение, погрузочные и разгрузочные работы в
                  аэропортах.
                </Typography>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Services;
