import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseModal } from "../../assets/icons/CloseModal";
import { saveData } from "../../server/service/CustomerService";

const toFlagEmoji = (iso2) =>
  iso2
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));

const getFlagUrl = (iso2) =>
  `https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`;

const COUNTRIES = [
  { id: 1, name: "Afganistán", dial: "+93", iso2: "AF" },
  { id: 2, name: "Albania", dial: "+355", iso2: "AL" },
  { id: 3, name: "Alemania", dial: "+49", iso2: "DE" },
  { id: 4, name: "Andorra", dial: "+376", iso2: "AD" },
  { id: 5, name: "Angola", dial: "+244", iso2: "AO" },
  { id: 6, name: "Argentina", dial: "+54", iso2: "AR" },
  { id: 7, name: "Armenia", dial: "+374", iso2: "AM" },
  { id: 8, name: "Australia", dial: "+61", iso2: "AU" },
  { id: 9, name: "Austria", dial: "+43", iso2: "AT" },
  { id: 10, name: "Bélgica", dial: "+32", iso2: "BE" },
  { id: 11, name: "Bolivia", dial: "+591", iso2: "BO" },
  { id: 12, name: "Brasil", dial: "+55", iso2: "BR" },
  { id: 13, name: "Canadá", dial: "+1", iso2: "CA" },
  { id: 14, name: "Chile", dial: "+56", iso2: "CL" },
  { id: 15, name: "China", dial: "+86", iso2: "CN" },
  { id: 16, name: "Colombia", dial: "+57", iso2: "CO" },
  { id: 17, name: "Corea del Sur", dial: "+82", iso2: "KR" },
  { id: 18, name: "Costa Rica", dial: "+506", iso2: "CR" },
  { id: 19, name: "Cuba", dial: "+53", iso2: "CU" },
  { id: 20, name: "Dinamarca", dial: "+45", iso2: "DK" },
  { id: 21, name: "Ecuador", dial: "+593", iso2: "EC" },
  { id: 22, name: "Egipto", dial: "+20", iso2: "EG" },
  { id: 23, name: "El Salvador", dial: "+503", iso2: "SV" },
  { id: 24, name: "España", dial: "+34", iso2: "ES" },
  { id: 25, name: "Estados Unidos", dial: "+1", iso2: "US" },
  { id: 26, name: "Estonia", dial: "+372", iso2: "EE" },
  { id: 27, name: "Filipinas", dial: "+63", iso2: "PH" },
  { id: 28, name: "Finlandia", dial: "+358", iso2: "FI" },
  { id: 29, name: "Francia", dial: "+33", iso2: "FR" },
  { id: 30, name: "Grecia", dial: "+30", iso2: "GR" },
  { id: 31, name: "Guatemala", dial: "+502", iso2: "GT" },
  { id: 32, name: "Honduras", dial: "+504", iso2: "HN" },
  { id: 33, name: "Hungría", dial: "+36", iso2: "HU" },
  { id: 34, name: "India", dial: "+91", iso2: "IN" },
  { id: 35, name: "Indonesia", dial: "+62", iso2: "ID" },
  { id: 36, name: "Irlanda", dial: "+353", iso2: "IE" },
  { id: 37, name: "Israel", dial: "+972", iso2: "IL" },
  { id: 38, name: "Italia", dial: "+39", iso2: "IT" },
  { id: 39, name: "Japón", dial: "+81", iso2: "JP" },
  { id: 40, name: "México", dial: "+52", iso2: "MX" },
  { id: 41, name: "Nicaragua", dial: "+505", iso2: "NI" },
  { id: 42, name: "Noruega", dial: "+47", iso2: "NO" },
  { id: 43, name: "Nueva Zelanda", dial: "+64", iso2: "NZ" },
  { id: 44, name: "Panamá", dial: "+507", iso2: "PA" },
  { id: 45, name: "Paraguay", dial: "+595", iso2: "PY" },
  { id: 46, name: "Perú", dial: "+51", iso2: "PE" },
  { id: 47, name: "Polonia", dial: "+48", iso2: "PL" },
  { id: 48, name: "Portugal", dial: "+351", iso2: "PT" },
  { id: 49, name: "Reino Unido", dial: "+44", iso2: "GB" },
  { id: 50, name: "República Dominicana", dial: "+1", iso2: "DO" },
  { id: 51, name: "Rusia", dial: "+7", iso2: "RU" },
  { id: 52, name: "Suecia", dial: "+46", iso2: "SE" },
  { id: 53, name: "Suiza", dial: "+41", iso2: "CH" },
  { id: 54, name: "Turquía", dial: "+90", iso2: "TR" },
  { id: 55, name: "Ucrania", dial: "+380", iso2: "UA" },
  { id: 56, name: "Uruguay", dial: "+598", iso2: "UY" },
  { id: 57, name: "Venezuela", dial: "+58", iso2: "VE" },
  { id: 58, name: "Vietnam", dial: "+84", iso2: "VN" },
  { id: 59, name: "Sudáfrica", dial: "+27", iso2: "ZA" },
];

export default function CountryDropdown({
  value,
  onChange,
  countries,
  defaultCountry = "CO",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = useMemo(() => {
    if (value) return countries.find((c) => c.iso2 === value.iso2) || null;
    return countries.find((c) => c.iso2 === defaultCountry) || null;
  }, [countries, value, defaultCountry]);

  useEffect(() => {
    if (!value && selected) onChange(selected);
  }, [value, selected, onChange]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Botón */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-gray-600 text-white text-left p-2.5 rounded-lg border border-gray-300 focus:outline-none"
      >
        {selected ? (
          <span className="flex items-center gap-2">
            <img
              src={getFlagUrl(selected.iso2)}
              alt={`Bandera de ${selected.name}`}
              className="inline-block h-4 w-6 rounded-sm object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback: si falla la imagen, ocultamos el <img> y mostramos solo texto
                e.currentTarget.style.display = "none";
              }}
            />
            <span>{selected.name}</span>
          </span>
        ) : (
          <span className="text-gray-300">Seleccione una opción</span>
        )}
      </button>

      {/* Lista (siempre hacia abajo) */}
      {open && (
        <ul
          className="
            absolute top-full mt-1 w-full z-50
            max-h-56 overflow-y-auto
            bg-gray-700 border border-gray-600 rounded-lg shadow-lg
          "
        >
          {countries.map((c) => (
            <li
              key={c.id}
              onClick={() => {
                onChange(c); // devuelvo el objeto completo
                setOpen(false);
              }}
              className="
                px-3 py-2 cursor-pointer flex items-center gap-2
                text-white hover:bg-gray-600
              "
            >
              <img
                src={getFlagUrl(c.iso2)}
                alt={`Bandera de ${c.name}`}
                className="inline-block h-4 w-6 rounded-sm object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>{c.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export const ContactMeModal = ({ setIsOpen }) => {
  const [country, setCountry] = useState(() => COUNTRIES.find(c => c.iso2 === "CO"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (country != null && country.name != null) {
      const result = await saveData(name, email, country.name, phone, message);
      if (result) {
        await fetch("/api/MailService", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customerName: name,
            customerEmail: email,
            customerCountry: country.name,
            customerPhone: phone,
            message: message
          }),
        });
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <div
          id="crud-modal"
          tabIndex={-1}
          className="w-full h-full fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative p-4 w-full max-w-md max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl shadow-sm bg-gray-800">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-lg font-semibold text-white">
                  Ingresa tus datos de contacto
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
                  text-sm w-8 h-8 ms-auto inline-flex cursor-pointer justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseModal />
                  <span className="sr-only">Cerrar modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="contact-name"
                      className="block mb-2 text-left text-sm font-medium text-white"
                    >
                      Nombre (*):
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Ingresa tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="contact-email"
                      className="block mb-2 text-left text-sm font-medium text-white"
                    >
                      Correo electrónico (*):
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="bg-gray-600 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="contact-country"
                      className="block mb-2 text-left text-sm font-medium text-white"
                    >
                      País (*):
                    </label>
                    <CountryDropdown
                      value={country}
                      onChange={(c) => setCountry(c)}
                      countries={COUNTRIES}
                      defaultCountry="CO"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="contact-phone"
                      className="block mb-2 text-left text-sm font-medium text-white"
                    >
                      Número de contacto (*):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        className="w-24 bg-gray-700 border border-gray-300 text-white text-sm rounded-lg p-2.5 text-center"
                        value={country ? country.dial : ""}
                        placeholder="+57"
                      />
                      <input
                        type="tel"
                        id="contact-phone"
                        className="flex-1 bg-gray-600 border border-gray-300 text-white text-sm rounded-lg p-2.5"
                        placeholder="Ingresa tu número de contacto"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block mb-2 text-left text-sm font-medium text-white"
                    >
                      Déjanos un mensaje:
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-300"
                      placeholder="Escribe un mensaje"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center 
                    bg-[rgb(42,75,155)] hover:scale-110 outline-none  
                    font-medium rounded-lg transition-transform duration-300 text-sm px-5 py-2.5 
                    text-center cursor-pointer"
                  onClick={handleClick}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
