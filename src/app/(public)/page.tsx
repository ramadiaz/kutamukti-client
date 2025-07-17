import Greeting from "@/components/Greeting";
import HeroCarousel from "@/components/HeroCarousel";
import MapOverview from "@/components/MapOverview";
import NavCards from "@/components/NavCards";
import NewsCards from "@/components/NewsCards";
import VideoCards from "@/components/VideoCards";

export const metadata = {
  title: "Beranda - Desa Kutamukti",
  description: "Selamat datang di website resmi Desa Kutamukti. Temukan informasi, berita, layanan, dan potensi desa kami di sini.",
};

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="h-12" />
      <Greeting />
      <div className="h-12" />
      <NavCards />
      <div className="h-18" />
      <MapOverview />
      <div className="h-24" />
      <VideoCards />
      <div className="h-24" />
      <NewsCards />
      <div className="h-24" />
    </div>
  );
};

export default HomePage;
