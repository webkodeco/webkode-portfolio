import { motion } from "framer-motion";
import { CheckArrowIcon } from "../ui/CheckArrowIcon";
import Kevinmorelo from "../../assets/images/Kevinmorelo";


const serviceData1 = [
  "Ingeniero FullStack",
];
const serviceData2 = [
  "Ingeniero FullStack",
];
const serviceData3 = [
  "Ingeniero Frontend",
];

export const We = () => {
  return (
    <section className="w-screen flex justify-center bg-black relative">
      <div className="absolute -top-16" id="we" />
      <div className="pb-10 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              {/* <span className="block-subtitle text-white">
                Encuentra la mejor opción para ti
              </span> */}
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Conoce nuestro equipo WebKode
              </h2>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="relative px-8 py-12 bg-[rgb(42,75,155)] rounded-3xl">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <Kevinmorelo />
                  </div>

                  <h3 className="mt-16 mb-2 text-xl font-bold font-heading text-white text-center">
                    Carlos Escobar N.
                  </h3>

                  <ul className="mb-6 text-white">
                    {serviceData1.map((text, index) => (
                      <li className="mb-4 flex justify-center" key={`${text}-${index}`}>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="inline-block text-[rgb(42,75,155)] text-center py-2 px-4 w-full
                   contained-button transition-transform duration-300 hover:scale-110
                   cursor-pointer bg-[rgb(255,255,255)] font-bold leading-loose mt-10 rounded-xl"
                    aria-label="Get started">
                    ¡Sobre mí!
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="relative px-8 py-12 bg-[rgb(42,75,155)] rounded-3xl">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <Kevinmorelo />
                  </div>

                  <h3 className="mt-16 mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-center">
                    Kevin Morelo V.
                  </h3>

                  <ul className="mb-14 text-white">
                    {serviceData2.map((text, index) => (
                      <li className="mb-4 flex justify-center" key={`${text}-${index}`}>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="inline-block text-[rgb(42,75,155)] text-center py-2 px-4 w-full
                   contained-button leading-loose transition-transform duration-300
                   hover:scale-110 font-bold mt-10 rounded-xl cursor-pointer bg-[rgb(255,255,255)]"
                    aria-label="Get started">
                    ¡Sobre mí!
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="relative px-8 py-12 bg-[rgb(42,75,155)] rounded-3xl">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                      <Kevinmorelo />
                  </div>

                  <h3 className="mt-16 mb-2 text-xl font-bold font-heading text-white text-center">
                    Victor Palacios S.
                  </h3>

                  <ul className="mb-6 text-white">
                    {serviceData3.map((text, index) => (
                      <li className="mb-4 flex justify-center" key={`${text}-${index}`}>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="inline-block text-[rgb(42,75,155)] text-center py-2 px-4 w-full
                   contained-button font-bold leading-loose mt-10 rounded-xl cursor-pointer
                   transition-transform duration-300 hover:scale-110 bg-[rgb(255,255,255)]"
                    aria-label="Get started">
                    ¡Sobre mí!
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
