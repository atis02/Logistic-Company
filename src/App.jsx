import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Container, Box, Stack, CircularProgress } from "@mui/material";
import About from "./Pages/About";
import Advantages from "./Pages/Advantages";
import Missions from "./Pages/Missions";
import Services from "./Pages/Services";
import Licence from "./Pages/Licences";
import OurWorks from "./Pages/OurWorks";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
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
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {loader ? (
        <Stack
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#1E1E1E"
        >
          <CircularProgress size={80} />
        </Stack>
      ) : (
        <Suspense fallback={<CircularProgress />}>
          <Box
            sx={{
              background: "#1E1E1E",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/images/AllHeight.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <Navbar />
              <Home />
              <About />
              <Advantages />
              <Missions />
              <Services />
              <Licence />
              <OurWorks />
              <Footer />
            </Box>
          </Box>
        </Suspense>
      )}
    </>
  );
}

export default App;
