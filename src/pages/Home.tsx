import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import Navbar from "../components/home/Navbar";
import Statistics from "../components/home/Statistics";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <HomeServices />
    </>
  );
};

export default Home;
