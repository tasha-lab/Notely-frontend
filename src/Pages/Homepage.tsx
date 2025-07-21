import { Box } from "@mui/material";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import HeroSection from "../Components/HomeComponent/HeroSection";
import Features from "../Components/HomeComponent/Features";
import { useAuth } from "../Store/useAuth";

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
