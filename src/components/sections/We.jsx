import { motion } from "framer-motion";
import { CheckArrowIcon } from "../ui/CheckArrowIcon";
import { TeamCard } from "../ui/TeamCard";


const serviceData1 = [
  "Ingeniero FullStack",
];
const serviceData2 = [
  "Ingeniero FullStack",
];
const serviceData3 = [
  "Ingeniero Frontend",
];

export const We = () => {
  return (
    <section className="w-screen flex justify-center bg-black relative">
      <div className="absolute -top-16" id="we" />
      <div className="pb-10 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Conoce nuestro equipo WebKode
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center mt-10 sm:mt-16">
              <div className="px-4">
                <TeamCard
                  name="Carlos Escobar N."
                  role="Ingeniero FullStack"
                  tagline="🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
                  avatarSrc="/public/CarlosEscobar.jpeg"
                  avatarAlt="Carlos Escobar"
                  linkedin="https://www.linkedin.com/in/carlosesconav/"
                  github="https://github.com/carlosesconav"
                  email="mailto:carlos.escobar@webkode.co"
                  bio="Más de 6 años construyendo productos escalables. Me enfoco en performance, DX y buenas prácticas (clean architecture, testing y CI/CD)."
                  skills={["Java", "Spring", "SQL", "Angular", "AWS"]}
                />
              </div>
              <div className="px-4">
                <TeamCard
                  name="Kevin Morelo V."
                  role="Ingeniero FullStack"
                  tagline="🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
                  avatarSrc="/public/kevinmorelo.jpeg"
                  avatarAlt="Kevin Morelo"
                  linkedin="https://www.linkedin.com/in/kevinmorelo/"
                  github="https://github.com/KevinMorelo"
                  email="mailto:kevin.morelo@webkode.co"
                  bio="Fullstack con foco en producto. Me gusta convertir ideas en features medibles, con obsesión por el performance y la experiencia de usuario."
                  skills={["React", "Node.js", "PostgreSQL", "Docker", "CI/CD"]}
                />
              </div>
              <div className="px-4">
                <TeamCard
                  name="Victor Palacios S."
                  role="Ingeniero FullStack"
                  tagline="🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
                  avatarSrc="/public/VictorPalacios.jpeg"
                  avatarAlt="Victor Palacios"
                  linkedin="https://www.linkedin.com/in/victormanuelpalacios/"
                  github="https://github.com/VictorMpalacios"
                  email="mailto:victor.palacios@webkode.co"
                  bio="Frontend enfocado en accesibilidad y microinteracciones. Experiencia en design systems, testing y performance web."
                  skills={["React", "TypeScript", "Vite", "Playwright", "Design System"]}
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
