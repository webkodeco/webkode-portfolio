import { motion } from "framer-motion";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Antes de trabajar con Webkode teníamos toda la información de nuestro inventario en hojas de cálculo desordenadas. El software que nos desarrollaron nos permitió unificar procesos y tener reportes en tiempo real. Ahora tomamos decisiones más rápidas y hemos reducido un 40% los errores en pedidos. Sin duda, Kodificaron nuestras ideas y las hicieron crecer.",
    image: "",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "El crecimiento de nuestra empresa estaba limitado porque no teníamos control en tiempo real sobre la flota de vehículos. Webkode desarrolló una plataforma a la medida que nos permite monitorear rutas, tiempos de entrega y costos. Gracias a esto hemos optimizado nuestros recursos y aumentado la satisfacción de nuestros clientes. Definitivamente potenciaron nuestro negocio al unificar procesos clave.",
    image: "",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Nuestra clínica necesitaba un sistema que centralizara las historias médicas y optimizara la gestión de citas. Con la solución de Webkode logramos que los pacientes agenden en línea y que los médicos accedan a la información de manera segura. Esto no solo mejoró la productividad del personal, sino también la experiencia de nuestros pacientes. Webkode nos ayudó a avanzar en la transformación digital que tanto necesitábamos.",
    image: "",
  },
];

export const Testimonies = () => (
  <section className="w-full flex justify-center pt-16 text-white mb-16 lg:mb-32 bg-black relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center font-bold mb-6">
          Testimonios
        </div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          ¡Clientes que les ha encantado{" "}
          <label className="font-bold">Webkode</label>!
        </div>

        <div className="flex flex-col text-white lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-[rgb(42,75,155)] flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">{/* <QuoteIcon /> */}</div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
