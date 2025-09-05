import { useState } from "react";
import { motion } from "framer-motion";

import { ContactMeModal } from "../ui/ContactMeModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-gray-900 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className=" text-sm sm:text-2xl mb-6 sm:mt-32 mt-16  font-bold"></h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden text-[rgb(42,75,155)]">
              {" "}
              "Kodificamos tus ideas"
            </h1>
            <h1 className="hidden md:inline text-[rgb(42,75,155)]">
              "Kodificamos tus ideas"
            </h1>
          </div>
          <h1 className="mt-2 sm:mt-2 text-xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24">
            Tecnología empresarial simple, ágil y efectiva
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Unifica tus procesos y obtén la información que tu negocio necesita
            para avanzar.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="flex flex-col sm:flex-row mt-14  sm:mb-40 justify-center
          transition-transform duration-300 hover:scale-110"
          >
            <button
              className="contained-button text-black rounded-xl font-bold cursor-pointer bg-gray-300 w-52 sm:w-52 h-12 
              mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="ContactMe"
            >
              Contactanos
            </button>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center ">
            <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div> */}
        {isModalOpen && (
          <ContactMeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </div>
    </section>
  );
};
