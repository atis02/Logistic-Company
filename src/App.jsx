import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {
  Container,
  Box,
  Stack,
  CircularProgress,
  Typography,
} from "@mui/material";
import About from "./Pages/About";
import Advantages from "./Pages/Advantages";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Preloader from "./Components/Preloader/Preloader";
import { Suspense, useEffect, useState } from "react";
import { RingLoader, ScaleLoader } from "react-spinners";

function App() {
  const [loader, setLoader] = useState(false);
  AOS.init({
    duration: 1800,
    offset: 0,
  });
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <>
      {loader ? (
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#fff"
          color="#blue"
        >
          <ScaleLoader
            color="blue"
            loading={loader}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <Typography fontFamily="sans-serif" fontFamily="Montserrat" mt={2}>
            Loading...
          </Typography>
        </Stack>
      ) : (
        <Suspense fallback={<CircularProgress />}>
          <Box sx={{ background: "#F0FFFF" }}>
            <Navbar />
            <Home />
            <About />
            <Advantages />
            <Footer />
          </Box>
        </Suspense>
      )}
    </>
  );
}

export default App;
