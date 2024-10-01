// app/page.tsx
import HeroComponent from "./components/HeroComponent";
import CoursesComponent from "./components/CoursesComponent";
import MediaSection from "./components/MediaSection";

const Home = () => {
  return (
    <div>
      <HeroComponent />
      <CoursesComponent />
      <MediaSection />
    </div>
  );
};

export default Home;
