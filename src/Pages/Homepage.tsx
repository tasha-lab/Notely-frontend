import { Box } from "@mui/material";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import HeroSection from "../Components/HomeComponent/HeroSection";
import Features from "../Components/HomeComponent/Features";
import { useAuth } from "../Store/useAuth";
import CTA from "../Components/HomeComponent/CTA";
import Reviews from "../Components/HomeComponent/Reviews";

const Homepage = () => {
  const { token } = useAuth();
  return (
    <>
      <Navbar />
      <div>
        <Box sx={{ mx: "3rem" }}>
          <HeroSection />
          {token ? (
            <>
              <Features />
              <CTA />
              <Reviews />
            </>
          ) : (
            <></>
          )}
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
