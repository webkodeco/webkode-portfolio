import { motion } from "framer-motion";
import { TeamCard } from "../ui/TeamCard";

const teamMembers = [
  {
    name: "Carlos A. Escobar",
    role: "Ingeniero de Desarrollo FullStack",
    tagline:
      "Java · SpringBoot · Micronaut · PHP · Laravel · SQL · NoSQL · VueJs · AstroJs",
    avatarSrc: "CarlosEscobar.webp",
    avatarAlt: "Carlos Escobar",
    linkedin: "https://www.linkedin.com/in/carlosesconav/",
    github: "https://github.com/carlosesconav",
    bio: "Más de 3 años construyendo productos escalables a nivel Cloud y OnPremise. Enfocado en performance, escalabilidad y buenas prácticas.",
    skills: [
      "Java",
      "PHP",
      "C#",
      "SpringBoot",
      "SQL",
      "NoSQL",
      ".NET Core",
      "AWS",
      "Docker",
      "CI/CD",
      "Micronaut",
      "AstroJs",
      "VueJs",
      "Laravel",
    ],
  },
  {
    name: "Kevin Morelo V.",
    role: "Ingeniero de Desarrollo FullStack",
    tagline:
      "Java · AWS · Node.js · SQL · Angular · Python · Azure DevOps",
    avatarSrc: "kevinmorelo.webp",
    avatarAlt: "Kevin Morelo",
    linkedin: "https://www.linkedin.com/in/kevinmorelo/",
    github: "https://github.com/KevinMorelo",
    bio: "Fullstack con visión emprendedora. Transforma ideas en productos digitales medibles, optimizados y conectados con objetivos comerciales.",
    skills: [
      "Java",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
      "Angular",
      "Python",
      "JUnit",
    ],
  },
  {
    name: "Victor M. Palacios",
    role: "Ingeniero de Desarrollo FrontEnd",
    tagline: "React · TypeScript · Vite · Playwright · Design Systems",
    avatarSrc: "VictorPalacios.webp",
    avatarAlt: "Victor Palacios",
    linkedin: "https://www.linkedin.com/in/victormanuelpalacios/",
    github: "https://github.com/VictorMpalacios",
    bio: "Frontend enfocado en accesibilidad, experiencia de usuario, microinteracciones y rendimiento web.",
    skills: ["React", "TypeScript", "Vite", "Playwright", "Design System"],
  },
];

export const We = () => {
  return (
    <section className="relative w-screen overflow-hidden bg-gray-950">
      <div className="absolute -top-20" id="we" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,75,155,0.18),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            Equipo WebKode
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ingenieros creando soluciones web que generan resultados
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            Somos un equipo técnico enfocado en desarrollar páginas web rápidas,
            escalables y pensadas para convertir visitantes en clientes reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.email} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};