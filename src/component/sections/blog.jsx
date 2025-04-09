import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Loading/spinner";
import { CircleChevronLeft } from "lucide-react";
import { CircleChevronRight } from "lucide-react";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetching data from the API
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("./data.json");
      // console.log("Data fetched:", response.data); // Log the data for debugging
      setData(response.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? data.length - 1 : currentIndex - 1);
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <>
      <article id="blog" className="p-10 flex justify-center items-center">
        {loading ? (
          <Spinner />
        ) : (
          data.length > 0 && (
            <section className="relative w-full h-[550px] max-w-[768px] gap-5 rounded-lg overflow-hidden">
              {/* Slide Content */}
              <div className="">
                {data.map((item, index) => {
                  return (
                    <div
                      key={item.id || index}
                      className={`${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-1000 ease-in-out absolute w-full h-full`}
                    >
                      <section className="relative p-2">
                        <img
                          className="rounded-xl w-full h-[500px] object-center"
                          src={item.img}
                          alt={item.title}
                        />
                        <div className="absolute inset-0 flex items-center justify-center backdrop-brightness-50 rounded-t-lg">
                          <p className="p-10 text-white text-base md:text-2xl lg:text-4xl font-semibold">
                            {item.title}
                          </p>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>

              <div>
                {/* Previous Button */}
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  onClick={prevSlide}
                >
                  <CircleChevronLeft/>
                </button>

                {/* Next Button */}
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  onClick={nextSlide}
                >
                  <CircleChevronRight />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-black" : "bg-slate-500"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                ))}
              </div>
            </section>
          )
        )}
      </article>
    </>
  );
};

export default Blog;
