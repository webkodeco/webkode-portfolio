import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import TeamImageCard from "../../assets/images/TeamImageCard";

export function TeamCard({
  name,
  role,
  tagline,
  avatarSrc,
  avatarAlt,
  linkedin,
  github,
  email,
  bio,
  skills = [],
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="group w-full max-w-[360px] sm:max-w-[380px] rounded-3xl p-[2px] mx-auto
                   bg-gradient-to-br from-indigo-500/70 via-sky-400/70 to-cyan-400/70"
      >
        <div className="relative rounded-3xl bg-[rgb(42,75,155)] px-6 sm:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 shadow-xl">
          <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white shadow-xl overflow-hidden
                          transition-transform duration-300 group-hover:scale-105"
            >
              <TeamImageCard avatarSrc={avatarSrc} avatarAlt={avatarAlt} />
            </div>
          </div>
          <h3 className="mt-3 sm:mt-4 text-center text-xl sm:text-2xl font-extrabold text-white">
            {name}
          </h3>
          <p className="mt-1 text-center text-white/90 text-sm sm:text-base">
            {role}
          </p>
          {tagline && (
            <p className="mt-3 text-center text-white/80 text-xs sm:text-sm leading-snug">
              {tagline}
            </p>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 sm:mt-8 block w-full rounded-xl bg-white py-2 sm:py-2.5 text-center font-bold
                       text-[rgb(42,75,155)] transition-transform duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 cursor-pointer focus:ring-white/60"
          >
            ¡Más sobre mí!
          </button>
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaLinkedin className="text-white text-lg sm:text-xl" />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaGithub className="text-white text-lg sm:text-xl" />
              </a>
            )}
            {email && (
              <a
                href={email}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaEnvelope className="text-white text-lg sm:text-xl" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative z-[61] w-full max-w-md rounded-2xl bg-white shadow-2xl"
                role="dialog"
                aria-modal="true"
              >
                <div className="px-5 pt-5 pb-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="min-w-0">
                      <h4 className="font-bold text-[rgb(22,36,82)] truncate">
                        {name}
                      </h4>
                      <p className="text-sm text-slate-600 truncate">{role}</p>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="ml-auto p-2 rounded-full cursor-pointer hover:bg-slate-100"
                      aria-label="Cerrar"
                    >
                      <IoClose size={22} />
                    </button>
                  </div>
                </div>
                <div className="px-5 py-4">
                  {tagline && (
                    <p className="text-sm text-slate-700 mb-3">{tagline}</p>
                  )}
                  {bio && (
                    <p className="text-sm leading-relaxed text-slate-700">
                      {bio}
                    </p>
                  )}

                  {skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skills.map((s, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[rgb(42,75,155)]/10 text-[rgb(42,75,155)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="px-5 pb-5 pt-3 border-t flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200"
                      >
                        <FaLinkedin className="text-[rgb(42,75,155)]" />
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200"
                      >
                        <FaGithub className="text-[rgb(42,75,155)]" />
                      </a>
                    )}
                    {email && (
                      <a
                        href={email}
                        className="p-2 rounded-full bg-slate-100 hover:bg-slate-200"
                      >
                        <FaEnvelope className="text-[rgb(42,75,155)]" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-lg cursor-pointer bg-[rgb(42,75,155)] text-white font-semibold hover:opacity-95"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
