import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import CategorySection from "../components/CategorySection/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}

export default Home;