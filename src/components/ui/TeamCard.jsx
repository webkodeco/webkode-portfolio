// components/TeamCard.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function TeamCard({
  name,
  role,
  tagline,
  avatarSrc,
  avatarAlt,
  linkedin,
  github,
  email,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group w-full max-w-[360px] sm:max-w-[380px] rounded-3xl p-[2px] mx-auto
                 bg-gradient-to-br from-indigo-500/70 via-sky-400/70 to-cyan-400/70"
    >
      <div className="relative rounded-3xl bg-[rgb(42,75,155)] px-6 sm:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 shadow-xl">
        <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white shadow-xl overflow-hidden
                          transition-transform duration-300 group-hover:scale-105">
            <img src={avatarSrc} alt={avatarAlt} className="w-full h-full" />
          </div>
        </div>
        <h3 className="mt-3 sm:mt-4 text-center text-xl sm:text-2xl font-extrabold text-white">
          {name}
        </h3>
        <p className="mt-1 text-center text-white/90 text-sm sm:text-base">{role}</p>

        {tagline && (
          <p className="mt-3 text-center text-white/80 text-xs sm:text-sm leading-snug">
            {tagline}
          </p>
        )}
        <a
          href={linkedin || github || email || "#"}
          target={linkedin || github ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-6 sm:mt-8 block w-full rounded-xl bg-white py-2 sm:py-2.5 text-center font-bold
                     text-[rgb(42,75,155)] transition-transform duration-300 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          ¡Más sobre mí!
        </a>
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaLinkedin className="text-white text-lg sm:text-xl" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaGithub className="text-white text-lg sm:text-xl" />
            </a>
          )}
          {email && (
            <a href={email}
               className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              <FaEnvelope className="text-white text-lg sm:text-xl" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
