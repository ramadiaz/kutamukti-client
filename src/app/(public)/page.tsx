import HeroCarousel from "@/components/HeroCarousel";
import MapOverview from "@/components/MapOverview";
import NavCards from "@/components/NavCards";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="h-12" />
      <NavCards />
      <div className="h-18" />
      <MapOverview />
      <div className="h-24" />
    </div>
  );
};

export default HomePage;
