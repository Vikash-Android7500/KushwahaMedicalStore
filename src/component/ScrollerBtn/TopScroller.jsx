import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const TopScroller = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-blue-600 duration-300 fixed bottom-11 md:bottom-5 right-7 md:right-5 p-1 md:p-3 bg-Light text-white rounded-full shadow-xl transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-6 h-6 active:text-green-400 duration-300" />
    </button>
  );
};

export default TopScroller;
