import { motion } from "framer-motion";

import { CheckArrowIcon } from "../ui/CheckArrowIcon";

const serviceData1 = [
  "Presencia digital inmediata con tu marca.",
  "Siempre disponible.",
  "Diseño moderno y adaptable.",
  "Inversión accesible.",
];
const serviceData2 = [
  "Imagen profesional y confiable.",
  "Estructura completa.",
  "Mayor alcance comercial.",
  "Escalable y listo para crecer con tu empresa.",
];
const serviceData3 = [
  "Tu tienda abierta 24/7.",
  "Ventas en línea seguras con pasarelas de pago confiables.",
  "Fácil de usar.",
  "Expande tu mercado y vende más allá de tu ubicación física.",
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
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Plan Esencial.
                  </h3>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left">
                    Una página sencilla, elegante y profesional para mostrar tu
                    marca al mundo.
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
                    aria-label="Get started">
                    !Lo quiero!
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Plan Corporativo.
                  </h3>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-300 leading-loose text-left">
                    La carta de presentación perfecta para tu empresa con un sitio completo con
                    secciones claras que transmiten confianza y profesionalismo.
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
                    aria-label="Get started">
                    !Lo quiero!
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-[rgb(42,75,155)] rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Plan Tienda Online.
                  </h3>
                  <div className="flex justify-start items-end">
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left">
                    Tu negocio abierto las 24 horas una tienda virtual con carrito de compras y pagos en línea.
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
                    aria-label="Get started">
                    !Lo quiero!
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
