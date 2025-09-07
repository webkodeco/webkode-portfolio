import { motion } from "framer-motion";
import { TeamCard } from "../ui/TeamCard";

const serviceData1 = {
  role: "Ingeniero de Desarrollo FullStack",
  stack: "🚀 Java - SpringBoot - Micronaut | PHP - Laravel | DB Sql & NoSQL | VueJs & AstroJs | 👾 Enfoque en rendimiento y escalabilidad 🤖"
};
const serviceData2 = {
  role: "Ingeniero de Desarrollo FullStack",
  stack: "🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
};
const serviceData3 = {
  role: "Ingeniero de Desarrollo FrontEnd",
  stack: "🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
};

const img1 = "CarlosEscobar.webp"; 
const img2 = "kevinmorelo.webp";
const img3 = "VictorPalacios.webp";

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
                  name="Carlos A. Escobar."
                  role={serviceData1.role}
                  tagline={serviceData1.stack}
                  avatarSrc={img1}
                  avatarAlt="Carlos Escobar"
                  linkedin="https://www.linkedin.com/in/carlosesconav/"
                  github="https://github.com/carlosesconav"
                  email="mailto:carlos.escobar@webkode.co"
                  bio="Más de 3 años construyendo productos escalables a nivel Cloud y OnPremise. Me enfoco en performance, escalabilidad y buenas prácticas (Clean architecture, testing y CI/CD)."
                  skills={["Java", "PHP", "C#","SpringBoot", "SQL", "NoSQL",".NET Core", "AWS", "Docker", "CI/CD", "Micronaut", "AstroJs", "VueJs", "Laravel"]}
                />
              </div>
              <div className="px-4">
                <TeamCard
                  name="Kevin Morelo V."
                  role={serviceData2.role}
                  tagline={serviceData2.stack}
                  avatarSrc={img2}
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
                  name="Victor M. Palacios."
                  role={serviceData3.role}
                  tagline={serviceData3.stack}
                  avatarSrc={img3}
                  avatarAlt="Victor Palacios"
                  linkedin="https://www.linkedin.com/in/victormanuelpalacios/"
                  github="https://github.com/VictorMpalacios"
                  email="mailto:victor.palacios@webkode.co"
                  bio="Frontend enfocado en accesibilidad y microinteracciones. Experiencia en design systems, testing y performance web."
                  skills={[
                    "React",
                    "TypeScript",
                    "Vite",
                    "Playwright",
                    "Design System",
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
