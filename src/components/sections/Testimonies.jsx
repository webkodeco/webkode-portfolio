import { motion } from "framer-motion";

const testimonialsData = [
  {
    customerName: "Andrés Ceballos",
    customerTitle: "CEO de NovaHaus",
    projectType: "Portal web corporativo",
    content:
      "El equipo de WebKode hizo un trabajo excepcional en la creación de nuestro portal web. Supieron captar nuestras ideas, aportaron soluciones creativas y lograron un resultado que superó nuestras expectativas.",
    image: "Andres-ceballos.webp",
  },
  {
    customerName: "Nataly Palacios",
    customerTitle: "CEO de Creación Mental",
    projectType: "Portal web moderno y funcional",
    content:
      "Trabajar con WebKode fue una experiencia excepcional. Entendieron desde el primer momento lo que necesitábamos y lograron crear un portal moderno, funcional y adaptado a nuestra visión.",
    image: "Nataly.webp",
  },
  {
    customerName: "José Sánchez",
    customerTitle: "CEO de Sociedad Biomédica",
    projectType: "Sitio web empresarial",
    content:
      "Desde el primer momento entendieron nuestras necesidades y lograron plasmar en el portal web exactamente lo que buscábamos. Su profesionalismo, dedicación y calidad en cada detalle marcaron la diferencia.",
    image: "Jose-sanchez.webp",
  },
];

const trustStats = [
  { value: "+3", label: "años de experiencia técnica" },
  { value: "100%", label: "proyectos desarrollados a medida" },
  { value: "3", label: "ingenieros especializados" },
];

export const Testimonies = () => (
  <section className="relative w-full overflow-hidden bg-gray-950 py-24 text-white">
    <div className="absolute -top-20" id="feedback" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,75,155,0.18),transparent_45%)]" />

    <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
          Testimonios
        </span>

        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Empresas que confiaron en WebKode para mejorar su presencia digital
        </h2>

        <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
          No solo desarrollamos sitios web. Acompañamos a nuestros clientes a
          construir una presencia digital profesional, clara y enfocada en
          generar confianza.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {trustStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center"
          >
            <p className="text-3xl font-extrabold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        {testimonialsData.map((testimonial, index) => (
          <article
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40"
            key={`${testimonial.customerName}-${index}`}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                {testimonial.projectType}
              </span>

              <span className="text-sm text-yellow-300">★★★★★</span>
            </div>

            <p className="flex-1 text-sm leading-7 text-gray-300">
              “{testimonial.content}”
            </p>

            <div className="mt-8 flex items-center border-t border-white/10 pt-6">
              <img
                src={testimonial.image}
                alt={testimonial.customerName}
                width="52"
                height="52"
                aria-label={testimonial.customerName}
                className="h-13 w-13 rounded-full object-cover ring-2 ring-blue-400/30"
              />

              <div className="ml-4">
                <p className="font-bold text-white">
                  {testimonial.customerName}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {testimonial.customerTitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  </section>
);