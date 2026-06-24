import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import CategorySection from "../components/CategorySection/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer";
function Home() {
  return (
        
    <>
       
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;