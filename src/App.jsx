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
import { Suspense, useEffect } from "react";
function App() {
  AOS.init({
    duration: 1800,
    offset: 0,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
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
    </>
  );
}

export default App;
