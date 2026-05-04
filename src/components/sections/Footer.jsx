import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import LinkdinIcon from "../../assets/images/LinkdinIcon";
import Webkode from "../../assets/images/Webkode";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10" aria-label="Site footer">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        
        {/* TOP CTA */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Listo para conseguir más clientes?
          </h3>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Te mostramos cómo mejorar tu presencia digital y convertir visitas en contactos reales.
          </p>

          <a
            href="mailto:webkode@hotmail.com"
            className="inline-block mt-6 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-gray-950 
            shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>

        {/* MAIN FOOTER */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
          
          {/* BRAND */}
          <div className="text-center lg:text-left max-w-sm">
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <div className="text-white text-5xl mr-2">
                <Webkode />
              </div>
              <span className="text-white font-bold text-xl">WebKode</span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Creamos sistemas web diseñados para ayudarte a conseguir más clientes,
              mejorar tu presencia digital y hacer crecer tu negocio.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 
                hover:bg-white/10 transition"
                href="https://www.linkedin.com/in/web-kode-043755380/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkdinIcon />
              </a>

              <a
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 
                hover:bg-white/10 transition"
                href="https://www.instagram.com/webkodeco/"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row gap-12 text-center sm:text-left">
            
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#service" className="hover:text-white">Presencia digital</a></li>
                <li><a href="/#service" className="hover:text-white">Captación de clientes</a></li>
                <li><a href="/#service" className="hover:text-white">Crecimiento digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#we" className="hover:text-white">Nosotros</a></li>
                <li><a href="/#feedback" className="hover:text-white">Testimonios</a></li>
                <li><a href="mailto:webkode@hotmail.com" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} WebKode. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};