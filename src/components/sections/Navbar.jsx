import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebkodeLogo from "../../assets/images/WebkodeLogo.jsx";

const navbarLinks = [
  { label: "Inicio", href: "/#home", ariaLabel: "Inicio" },
  { label: "Nosotros", href: "/#we", ariaLabel: "Nosotros" },
  { label: "Servicios", href: "/#service", ariaLabel: "Servicios" },
  { label: "Testimonios", href: "/#feedback", ariaLabel: "Testimonios" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center border-b border-white/10 bg-gray-950/80 backdrop-blur-xl"
      aria-label="Navegación principal"
    >
      <div className="flex w-11/12 max-w-7xl items-center justify-between">
        <motion.a
          href="/#home"
          aria-label="Inicio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <div className="text-5xl text-white transition-transform duration-300 hover:scale-105">
            <WebkodeLogo />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden items-center gap-8 lg:flex"
        >
          {navbarLinks.map(({ href, label, ariaLabel }) => (
            <a
              key={label}
              href={href}
              aria-label={ariaLabel}
              className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex"
        >
          <a
            href="mailto:webkode@hotmail.com"
            aria-label="Solicitar diagnóstico gratuito"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-gray-950 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-100"
          >
            Diagnóstico gratis
          </a>
        </motion.div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span className="mb-1 h-0.5 w-5 rounded-full bg-gray-300" />
          <span className="mb-1 h-0.5 w-5 rounded-full bg-gray-300" />
          <span className="h-0.5 w-5 rounded-full bg-gray-300" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-20 w-full border-b border-white/10 bg-gray-950/95 px-6 py-8 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-7">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                  className="text-lg font-medium text-gray-200 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}

              <a
                href="mailto:webkode@hotmail.com"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-white px-7 py-3 text-sm font-bold text-gray-950 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:bg-blue-100"
              >
                Diagnóstico gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};