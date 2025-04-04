import Hero from "../component/sections/hero";
import ComparePrice from "../component/sections/comparePrice";
import Blog from "../component/sections/blog";
import Contact from "../component/sections/contact";
import Footer from "../component/Footer/Footer";
import TopScroller from "../component/ScrollerBtn/TopScroller";

export const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <ComparePrice/>
      <Blog/>
      <Contact />
      <Footer/>
      <TopScroller/>
    </div>
  );
};
