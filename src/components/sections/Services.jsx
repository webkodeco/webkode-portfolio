import { motion } from "framer-motion";
import { CheckArrowIcon } from "../ui/CheckArrowIcon";

const plans = [
  {
    name: "Presencia Inteligente",
    label: "Para negocios sin página web",
    description:
      "Ideal para empresas que necesitan verse profesionales, aparecer en internet y recibir contactos por WhatsApp.",
    features: [
      "Página web profesional y adaptable a celular.",
      "Botón directo a WhatsApp.",
      "Formulario de contacto.",
      "Optimización básica para Google.",
      "Diseño enfocado en generar confianza.",
    ],
  },
  {
    name: "Sistema de Captación",
    label: "Más recomendado",
    description:
      "Para empresas que quieren convertir visitas en clientes con una web optimizada, estratégica y preparada para vender.",
    features: [
      "Web corporativa completa.",
      "Estructura orientada a conversión.",
      "SEO local para aparecer en Google.",
      "Secciones de servicios, testimonios y beneficios.",
      "Integración con WhatsApp y formularios.",
    ],
    featured: true,
  },
  {
    name: "Crecimiento Digital",
    label: "Para escalar ventas",
    description:
      "Para empresas que quieren captar clientes de forma constante con landing pages, automatización y estrategia digital.",
    features: [
      "Landing pages por servicio.",
      "Automatización de contactos.",
      "Optimización avanzada de conversión.",
      "Analítica para medir resultados.",
      "Soporte y mejoras continuas.",
    ],
  },
];

export const Services = () => {
  return (
    <section className="relative w-screen overflow-hidden bg-gray-950">
      <div className="absolute -top-20" id="service" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,75,155,0.22),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            Servicios WebKode
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            No hacemos solo páginas web. Creamos sistemas para conseguir clientes.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            Elige una solución según el momento de tu empresa: presencia digital,
            captación de clientes o crecimiento comercial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-blue-400/50 bg-[rgb(42,75,155)] shadow-2xl shadow-blue-950/40"
                  : "border-white/10 bg-white/[0.04] hover:border-blue-400/40"
              }`}
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                  plan.featured
                    ? "bg-white text-gray-950"
                    : "bg-blue-500/10 text-blue-200"
                }`}
              >
                {plan.label}
              </span>

              <h3 className="mt-6 text-2xl font-extrabold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-300">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4 text-sm text-white">
                {plan.features.map((text, index) => (
                  <li className="flex gap-3" key={`${text}-${index}`}>
                    <CheckArrowIcon />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/#home"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-white text-gray-950 hover:bg-blue-100"
                    : "bg-[rgb(42,75,155)] text-white hover:bg-blue-800"
                }`}
                aria-label={`Solicitar ${plan.name}`}
              >
                Solicitar diagnóstico gratuito
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};