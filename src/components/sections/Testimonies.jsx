import { motion } from "framer-motion";

const testimonialsData = [
  {
    customerName: "Andres Ceballos",
    customerTitle: "CEO de NovaHaus",
    content:
      "El equipo de Webkode hizo un trabajo excepcional en la creación de nuestro portal web. Supieron captar nuestras ideas, aportaron soluciones creativas y lograron un resultado que superó nuestras expectativas. Destaco su profesionalismo, compromiso y la calidad humana con la que nos acompañaron en todo el proceso.",
    image: "Andres-ceballos.webp",
  },
  {
    customerName: "Nataly Palacios",
    customerTitle: "CEO de Creación Mental",
    content:
      "Trabajar con el equipo de Webkode fue una experiencia excepcional. Supieron entender desde el primer momento lo que necesitábamos y lograron crear un portal web moderno, funcional y totalmente adaptado a nuestra visión. El equipo demostró un profesionalismo admirable, siempre atentos a los detalles y con una disposición impecable. Estamos muy satisfechos con el resultado y sin duda volveríamos a contar con ellos.",
    image: "Nataly.webp",
  },
  {
    customerName: "Jose Sanchez",
    customerTitle: "CEO de Sociedad Biomedica",
    content:
      "Trabajar con el equipo Webkode fue una experiencia excepcional. Desde el primer momento entendieron nuestras necesidades y lograron plasmar en el portal web exactamente lo que buscábamos. Su profesionalismo, dedicación y calidad en cada detalle marcaron la diferencia. Sin duda, un equipo altamente recomendado.",
    image: "Jose-sanchez.webp",
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
                    src={testimonial.image}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                    className="rounded-full object-cover"
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
