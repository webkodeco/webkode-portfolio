import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseModal } from "../../assets/icons/CloseModal";
import { saveData } from "../../server/service/CustomerService";
import CenteredToast from "./CenteredToast";

// Utils banderas
const toFlagEmoji = (iso2) =>
  iso2.toUpperCase().replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
const getFlagUrl = (iso2) => `https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`;

// Países
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

// Dropdown de países (robusto: value string u objeto; empuja default si falta)
function CountryDropdown({ value, onChange, countries, defaultCountry = "CO" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = useMemo(() => {
    if (!countries?.length) return null;
    if (typeof value === "string") {
      return countries.find((c) => c.iso2 === value) || countries.find((c) => c.iso2 === defaultCountry) || null;
    }
    if (value?.iso2) {
      return countries.find((c) => c.iso2 === value.iso2) || countries.find((c) => c.iso2 === defaultCountry) || null;
    }
    return countries.find((c) => c.iso2 === defaultCountry) || null;
  }, [countries, value, defaultCountry]);

  // Normaliza al montar
  useEffect(() => {
    const def = countries.find((c) => c.iso2 === defaultCountry) || null;
    if (!value && def) onChange(def);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-gray-600 text-white text-left p-2.5 rounded-lg border border-gray-300 focus:outline-none text-base md:text-sm"
      >
        {selected ? (
          <span className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">{toFlagEmoji(selected.iso2)}</span>
            <img
              src={getFlagUrl(selected.iso2)}
              alt={`Bandera de ${selected.name}`}
              className="inline-block h-4 w-6 rounded-sm object-cover"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span>{selected.name}</span>
          </span>
        ) : (
          <span className="text-gray-300">Seleccione una opción</span>
        )}
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full mt-1 w-full z-50 max-h-56 overflow-y-auto bg-gray-700 border border-gray-600 rounded-lg shadow-lg"
        >
          {countries.map((c) => (
            <li
              role="option"
              aria-selected={selected?.iso2 === c.iso2}
              key={c.id}
              onClick={() => { onChange(c); setOpen(false); }}
              className={`px-3 py-2 cursor-pointer flex items-center gap-2 text-white hover:bg-gray-600 ${
                selected?.iso2 === c.iso2 ? "bg-gray-600" : ""
              }`}
            >
              <span className="text-lg" aria-hidden="true">{toFlagEmoji(c.iso2)}</span>
              <img
                src={getFlagUrl(c.iso2)}
                alt={`Bandera de ${c.name}`}
                className="inline-block h-4 w-6 rounded-sm object-cover"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
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
  // Estado
  const [country, setCountry] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // solo dígitos
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type, text, sub }
  const contentRef = useRef(null);
  const firstFieldRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // A11y/UX: foco inicial, cerrar con ESC, bloquear fondo
  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [setIsOpen]);

  // Validaciones mínimas
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOk = /^\d{7,15}$/.test(phone);
  const isValid = name.trim() && emailOk && country?.name && phoneOk;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    const def = COUNTRIES.find((c) => c.iso2 === "CO");
    setCountry(def || null);
  };

  const handleClick = async () => {
    if (!isValid || submitting) return;

    setSubmitting(true);
    const payload = {
      customerName: name.trim(),
      customerEmail: email.trim(),
      customerCountry: country.name,
      customerPhone: `${country.dial} ${phone}`,
      message: message.trim(),
    };

    // mínimo visible para que "Enviando..." se note
    const minVisible = new Promise((r) => setTimeout(r, 600));

    try {
      const [results] = await Promise.all([
        Promise.allSettled([
          saveData(name, email, country.name, phone, message),
          fetch("/api/MailService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }),
        ]),
        minVisible,
      ]);

      const allOk = results.every((r) => r.status === "fulfilled");
      if (allOk) {
        resetForm();
        contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        setToast({ type: "success", text: "¡Enviado con éxito!", sub: "Te contactaremos pronto." });
        setTimeout(() => setToast(null), 1800);
        // Si deseas cerrar automáticamente:
        // setTimeout(() => setIsOpen(false), 1900);
      } else {
        setToast({ type: "error", text: "No pudimos enviar", sub: "Inténtalo nuevamente." });
        setTimeout(() => setToast(null), 2000);
      }
    } catch (err) {
      console.error("Error al enviar:", err);
      setToast({ type: "error", text: "Ocurrió un error inesperado", sub: "Vuelve a intentarlo." });
      setTimeout(() => setToast(null), 2000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
      >
        <div
          id="crud-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center overscroll-contain"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative p-4 w-full max-w-md max-h-[100dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl shadow-sm bg-gray-800">
              {/* Header sticky para que el caret no quede detrás */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 bg-gray-800/95 backdrop-blur">
                <h3 id="contact-title" className="text-lg font-semibold text-white">
                  Ingresa tus datos de contacto
                </h3>
                <button
                  type="button"
                  aria-label="Cerrar"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                  w-8 h-8 inline-flex cursor-pointer justify-center items-center md:hover:bg-gray-600 md:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseModal />
                </button>
              </div>

              {/* Toast centrado sobre el panel */}
              <CenteredToast toast={toast} />

              {/* Contenido scrolleable */}
              <div
                ref={contentRef}
                className="p-4 md:p-5 max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain"
              >
                <div className="grid gap-4 mb-4 grid-cols-2">
                  {/* Nombre */}
                  <div className="col-span-2">
                    <label htmlFor="contact-name" className="block mb-2 text-left text-sm font-medium text-white">
                      Nombre (*):
                    </label>
                    <input
                      ref={firstFieldRef}
                      type="text"
                      id="contact-name"
                      autoComplete="name"
                      enterKeyHint="next"
                      onKeyDown={(e) => e.key === "Enter" && emailRef.current?.focus()}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-base md:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white scroll-mt-24"
                      placeholder="Ingresa tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2">
                    <label htmlFor="contact-email" className="block mb-2 text-left text-sm font-medium text-white">
                      Correo electrónico (*):
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="contact-email"
                      autoComplete="email"
                      enterKeyHint="next"
                      onKeyDown={(e) => e.key === "Enter" && phoneRef.current?.focus()}
                      className="bg-gray-600 border border-gray-300 text-white text-base md:text-sm rounded-lg block w-full p-2.5 scroll-mt-24"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {email && !emailOk && (
                      <p className="text-xs text-red-400 mt-1">Formato de correo no válido.</p>
                    )}
                  </div>

                  {/* País */}
                  <div className="col-span-2">
                    <label htmlFor="contact-country" className="block mb-2 text-left text-sm font-medium text-white">
                      País (*):
                    </label>
                    <CountryDropdown
                      value={country}
                      onChange={setCountry}
                      countries={COUNTRIES}
                      defaultCountry="CO"
                    />
                  </div>

                  {/* Teléfono: input group (prefijo + número) */}
                  <div className="col-span-2">
                    <label htmlFor="contact-phone" className="block mb-2 text-left text-sm font-medium text-white">
                      Número de contacto (*):
                    </label>
                    <div className="flex rounded-lg overflow-hidden border border-gray-300">
                      <span className="bg-gray-700 text-white px-3 py-2 text-base md:text-sm flex items-center">
                        {country?.dial || "+57"}
                      </span>
                      <input
                        ref={phoneRef}
                        type="tel"
                        id="contact-phone"
                        className="flex-1 min-w-0 bg-gray-600 text-white text-base md:text-sm p-2.5 scroll-mt-24"
                        placeholder="Ingresa tu número de contacto"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        inputMode="numeric"
                        pattern="\d*"
                        autoComplete="tel"
                        required
                      />
                    </div>
                    {phone && !phoneOk && (
                      <p className="text-xs text-red-400 mt-1">El número debe tener entre 7 y 15 dígitos.</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="col-span-2">
                    <label htmlFor="contact-message" className="block mb-2 text-left text-sm font-medium text-white">
                      Déjanos un mensaje:
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="block p-2.5 w-full text-white bg-gray-600 rounded-lg border border-gray-300 text-base md:text-sm scroll-mt-24"
                      placeholder="Escribe un mensaje"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Botón */}
                <button
                  type="button"
                  disabled={!isValid || submitting}
                  className={`text-white inline-flex items-center
                    ${!isValid || submitting ? "bg-gray-500 cursor-not-allowed" : "bg-[rgb(42,75,155)] md:hover:scale-110"}
                    outline-none font-medium rounded-lg transition-transform duration-300 text-base md:text-sm px-5 py-2.5 text-center`}
                  onClick={handleClick}
                >
                  {submitting ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
