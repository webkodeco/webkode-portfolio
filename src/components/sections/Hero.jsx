import { useState } from "react";
import { motion } from "framer-motion";

import { ContactMeModal } from "../ui/ContactMeModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-screen overflow-hidden bg-gray-950 hero-bg-gradient"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(42,75,155,0.35),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            Desarrollo web estratégico para empresas
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Conseguimos más clientes para tu negocio con{" "}
            <span className="text-[rgb(42,75,155)]">
              páginas web que venden
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
            Creamos sistemas web optimizados para Google y conectados a
            WhatsApp para generar contactos reales, no solo visitas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
            Si tu negocio depende de clientes constantes y no estás captando
            desde internet, estás perdiendo oportunidades todos los días.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            className="rounded-2xl bg-white px-8 py-4 text-base font-bold text-gray-950 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-blue-500/20"
            onClick={() => setIsModalOpen(true)}
            aria-label="Solicitar diagnóstico gratuito"
          >
            Solicitar diagnóstico gratuito
          </button>

          <p className="text-sm font-medium text-gray-300">
            Diagnóstico gratis en menos de 24 horas
          </p>
        </motion.div>

        {isModalOpen && (
          <ContactMeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </div>
    </section>
  );
};