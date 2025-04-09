import MedicalImage from "..//../assets/medicalImage.png";
import Spinner from "../Loading/spinner";
import { useState, useEffect } from "react";
import { ArrowBigLeft, Mail } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Phone } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <article id="contact">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="max-w-full p-8 relative min-h-[100vh] overflow-hidden flex justify-center ">
            <div className="w-full max-w-[1024px] rounded-md border-x-Light overflow-hidden grid grid-flow-row-reverse lg:grid-cols-2 bg-header">
              <div className="relative px-9 before:content-[''] md:before:top-[-75px] md:before:right-[65px] md:before:bottom-auto md:before:scale-95">
                <h3 className="text-blue-500 font-bold text-2xl line-clamp-1 mb-4 text-box3">
                  Let's get in touch
                </h3>
                <p className="text-blue-600 font-semibold my-6 text-xl space-y-1 -space-x-2 md:my-6">
                  कुशवाह मेडिकल स्टोर, आपके पड़ोस की फार्मेसी, आवश्यक दवाओं और
                  स्वास्थ्य संबंधी उत्पादों की एक विस्तृत श्रृंखला प्रदान करती
                  है। बिलसंडा में बीसलपुर रोड पर सुविधाजनक रूप से स्थित, हम अपने
                  मूल्यवान ग्राहकों को गुणवत्तापूर्ण देखभाल और व्यक्तिगत सेवा
                  प्रदान करने के लिए समर्पित हैं। 💊बिलसंडा में बेहतरीन मेडिकल
                  स्टोर पर स्वास्थ्य सेवा में उत्कृष्टता का अनुभव लें। हम उच्च
                  गुणवत्ता वाली दवाओं और स्वास्थ्य देखभाल उत्पादों की एक विस्तृत
                  श्रृंखला पेश करते हैं। आपकी भलाई हमारी प्राथमिकता है
                </p>

                <div className="text-blue-500">
                  <div className="underline flex items-center m-[0.7rem] gap-x-2 cursor-pointer">
                    <MapPinned color="#102E50" />
                    <a
                      href="https://maps.app.goo.gl/MA25yR8S29cRWPmD9"
                      target="_blank"
                    >
                      Directions
                    </a>

                    <div>
                      <ArrowBigLeft color="red" size={30} />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 m-[0.7rem] cursor-pointer">
                    <p>
                      <Mail color="#102E50" />
                    </p>
                    <p>lorem@ipsum.com</p>
                  </div>
                  <div className="flex items-center gap-x-2 m-[0.7rem] cursor-pointer">
                    <p>
                      <Phone color="#102E50" />
                    </p>
                    <p>123-456-789</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center relative bg-contactIMG before:content-[''] md:before:top-[-13px] md:before:right-[70px] md:before:left-auto">
                {/* before */}
                <div className="absolute w-8 h-8 bg-contactIMG rotate-45 top-12 -left-3 before:content-['']"></div>
                <img
                  className="bg-white rounded-s-full w-full max-w-[80%] max-h-[80%] bg-cover hover:scale-[1.2] duration-200"
                  src={MedicalImage}
                  alt="ContactImage"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </article>
  );
};

export default Contact;
