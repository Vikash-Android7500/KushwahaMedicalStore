import { useEffect, useState } from "react";
import Medical from "..//../assets/medicalImage.png";
import Spinner from "../Loading/spinner";
import { Pill } from "lucide-react";
import { Tablets } from "lucide-react";
import { Syringe } from "lucide-react";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <article
        id="hero"
        className="h-lvh mb-20 max-w-full font-bold flex flex-col-reverse justify-center items-center lg:flex lg:flex-row lg:justify-around"
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <section className="text-blue-500 p-5 max-w-full sm:max-w-[50%] flex flex-col gap-7">
              <h1 className="text-xl text-pretty md:text-4xl">
                Kushwaha Medical Store Bisalpur Road Bilsanda
              </h1>
              <p>
                <span className="text-xl md:text-4xl">
                  हमारे यहाँ उचित मूल पर दवाइयाँ मिलती हैं
                </span>
              </p>
              <ol className="text-blue-600 flex flex-col gap-y-3 font-semibold text-xl">
                <li>हमारे यहां आयुर्वेदिक व अंग्रेज़ी दवाइयाँ मिलती हैं</li>
                <li>और जनावर की दवाइयाँ उचित मूल पर हैं</li>
                <div className="flex gap-2">
                  <Pill className="hover:scale-75 duration-200" color="#102E50" size={32}/>
                  <Tablets className="hover:scale-75 duration-200" color="#102E50" size={32}/>
                  <Syringe className="hover:scale-75 duration-200" color="#102E50" size={32}/>
                </div>
              </ol>
            </section>
            <section className="max-w-full sm:max-w-[50%]">
              <img
                className="max-w-[300px] md:max-w-full"
                src={Medical}
                alt="medical image"
              />
            </section>
          </>
        )}
      </article>
    </>
  );
};

export default Hero;
