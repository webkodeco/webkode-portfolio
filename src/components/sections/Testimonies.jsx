import { motion } from "framer-motion";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: "",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: "",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: "",
  },
];

export const Testimonies = () => (
  <section className="w-full flex justify-center pt-16 text-white mb-16 lg:mb-32 bg-gray-900 relative">
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
