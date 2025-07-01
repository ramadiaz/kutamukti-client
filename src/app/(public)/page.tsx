import HeroCarousel from "@/components/HeroCarousel";
import NavCards from "@/components/NavCards";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="h-12" />
      <NavCards />
    </div>
  );
};

export default HomePage;
