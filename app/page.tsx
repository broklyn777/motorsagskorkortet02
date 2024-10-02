// app/page.tsx
import HeroComponent from "./components/HeroComponent";
import CoursesComponent from "./components/CoursesComponent";
import MediaSection from "./components/MediaSection";
import VideoSection from "./components/VideoSection";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <CoursesComponent />
      <VideoSection />

      <MediaSection />
    </div>
  );
};

export default Home;
