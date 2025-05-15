import React, { useEffect, useState } from "react";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";
import { BriefcaseMedical } from "lucide-react";

export const NavBar = () => {
  //State to track the active link and scroll state
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  //Function to smoothly scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //Adjust the margin Top value as needed
      const marginTop = 0;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  //Function to determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          //Set the active link based on the section ID
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      //Call the function to determine the active section while scrolling
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);

    //Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-40 fixed p-2 top-0 left-0 w-full transition-all ${
        isScrolled ? "" : "bg-transparent"
      }`}
    >
      <div className="p-2 mx-auto flex flex-wrap items-center justify-around rounded-3xl shadow-md bg-[#FFFDD0] text-blue-500">
        <div className="flex items-center gap-4">
          <BriefcaseMedical
            className="hover:scale-75 duration-200"
            color="red"
            size={32}
          />
          <span className="uppercase font-bold tracking-wider text-xl">
            Kushwaha Medical Store
          </span>
        </div>

        <nav className="flex gap-6">
          {sectionIds.map((item, index) => (
            <button
              key={index}
              className={`font-bold cursor-pointer transition-all duration-200 ${
                activeLink === item ? "text-red-400" : "text-blue-500"
              }`}
              onClick={() => scrollToSection(item)}
            >
              <Link
                to={"/"}
                className={
                  activeLink === sectionIds
                    ? ""
                    : ""
                }
              ></Link>
              {
                item === "home" 
              ? "Home" 
              : item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
