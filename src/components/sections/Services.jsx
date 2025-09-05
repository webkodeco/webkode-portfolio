import { motion } from "framer-motion";

import { CheckArrowIcon } from "../ui/CheckArrowIcon";

const serviceData1 = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];
const serviceData2 = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];
const serviceData3 = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

export const Services = () => {
  return (
    <section className="w-screen flex justify-center bg-black relative">
      <div className="absolute -top-16" id="service" />
      <div className="pb-10 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle text-white">
                Encuentra la mejor opción para ti
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Selecciona uno de nuestros servicios
              </h2>
              <p className="mb-6 text-white">
                Select the plan that suits your needs and benefit from our
                analytics tools.
              </p>
              {/* <label className="mx-auto text-center bg-[rgb(42,75,155)] 
                  flex justify-center items-center text-xl w-30 h-12 rounded-lg  
                  pl-1 cursor-pointer"
                  >
                <div className=" text-white text-sm font-bold">
                   Monthly
                </div>
              </label> */}
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Beginner
                  </h3>
                  {/* <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $0
                    </div>
                    <div className="text-gray-300">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div> */}
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {serviceData1.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-white text-center py-2 px-4 w-full rounded-xl rounded-t-xl 
                    contained-button transition-transform duration-300 hover:scale-110 cursor-pointer bg-[rgb(191,24,24)] font-bold leading-loose mt-16"
                    // onClick=""
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Standard
                  </h3>
                  {/* <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-gray-300">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div> */}
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-300 leading-loose text-left">
                    Unlock more features and elevate your data analysis.
                  </p>
                  <ul className="mb-14 text-white">
                    {serviceData2.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-white text-center 
                    py-2 px-4 w-full contained-button leading-loose 
                    transition-transform duration-300 hover:scale-110 font-bold mt-20 rounded-xl cursor-pointer bg-[rgb(191,24,24)]"
                    // onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Premium
                  </h3>
                  <div className="flex justify-start items-end">
                    {/* <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-300">
                      {isMonthly ? "/ month" : "/ year"}
                    </div> */}
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left">
                    Experience the full power of our analytic platform
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {serviceData3.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-white text-center py-2 px-4 w-full 
                    rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16
                    cursor-pointer transition-transform duration-300 hover:scale-110 bg-[rgb(191,24,24)]"
                    // onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )} */}
    </section>
  );
};
