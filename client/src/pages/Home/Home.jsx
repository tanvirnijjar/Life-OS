import Navbar from "../../components/home/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/Features/Features";
import Footer from "../../components/home/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </>
  );
};

export default Home;