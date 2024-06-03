import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import { Box, Stack, CircularProgress, Typography } from "@mui/material";
import About from "./Pages/About";
import Advantages from "./Pages/Advantages";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

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
    }, 2500);
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
            color="#8F6340"
            loading={loader}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <Typography
            fontFamily="sans-serif"
            color="#8F6340"
            fontWeight={700}
            fontSize={50}
            mt={2}
          >
            Jebel Al Uhood
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
