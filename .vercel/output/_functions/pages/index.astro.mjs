import { e as createAstro, f as createComponent, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute, n as renderComponent } from '../chunks/astro/server_Jl2sTvfU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { v4 } from 'uuid';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://webkode.co");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const uri = "https://webkode.co/";
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/webkodeicon.svg"><meta name="generator"', "><title>\n      ", ' | Desarrollamos el crecimiento de tu empresa Kodificando tus ideas.\n    </title><meta name="description" content="Creamos p\xE1ginas web, apps y optimizaciones para hacer crecer tu negocio. Cont\xE1ctanos y solicita una demo gratis."><meta property="og:title" content="Webkode | Desarrollamos el crecimiento de tu empresa Kodificando tus ideas."><meta property="og:description" content="Creamos p\xE1ginas web, apps y optimizaciones para hacer crecer tu negocio. Cont\xE1ctanos y solicita una demo gratis."><meta property="og:image" content="/WEBKODE-SOLO-BLANCO.webp"><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:description" content="Creamos p\xE1ginas web, apps y optimizaciones para hacer crecer tu negocio. Cont\xE1ctanos y solicita una demo gratis."><meta property="og:image" content="/WEBKODE-SOLO-BLANCO.webp"><meta property="og:url"', '><meta property="og:site_name"', '><meta name="twitter:card" content="photo"><meta name="twitter:title" content="Webkode | Desarrollamos el crecimiento de tu empresa Kodificando tus ideas."><meta name="twitter:description" content="Creamos p\xE1ginas web, apps y optimizaciones para hacer crecer tu negocio. Cont\xE1ctanos y solicita una demo gratis."><meta name="twitter:image" content="/WEBKODEBLANCO.webp"><meta name="twitter:url"', '><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "WebKode",\n        "url": "https://webkode.co",\n        "image": "https://webkode.co/WEBKODEBLANCO.webp",\n        "logo": "https://webkode.co/WEBKODE-SOLO-BLANCO.webp",\n        "description": "Creamos p\xE1ginas web, apps y optimizaciones para hacer crecer tu negocio. Cont\xE1ctanos y solicita una demo gratis.",\n        "sameAs": [\n          "https://www.instagram.com/webkodeco/",\n          "https://www.linkedin.com/in/web-kode-043755380/"\n        ]\n      }\n    <\/script><link rel="canonical"', ">", '</head> <body class="bg-black"> <main aria-label="main content"> ', " </main>  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(uri, "content"), addAttribute(uri, "content"), addAttribute(title, "content"), addAttribute(uri, "content"), addAttribute(uri, "href"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/layouts/Layout.astro", void 0);

function WebkodeLogo() {
  return /* @__PURE__ */ jsx("img", { src: "/WEBKODEBLANCO.webp", alt: "Webkode Logo", className: "w-24" });
}

const navbarLinks = [
  { label: "Inicio", href: "/#home", ariaLabel: "Home" },
  { label: "Nosotros", href: "/#we", ariaLabel: "Togethe" },
  { label: "Servicios", href: "/#service", ariaLabel: "Services" },
  { label: "Testimonios", href: "/#feedback", ariaLabel: "Feedback" }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl",
      "aria-label": "Main navigation",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ jsx("a", { href: "/#home", "aria-label": "Home", children: /* @__PURE__ */ jsx("div", { className: "flex justify-start items-center grow basis-0", children: /* @__PURE__ */ jsx("div", { className: "text-white mr-2 text-6xl hover:scale-110 transform-stroke duration-100", children: /* @__PURE__ */ jsx(WebkodeLogo, {}) }) }) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ jsx("div", { className: "hidden lg:flex h-full pl-12 pb-2", children: navbarLinks.map(({ href, label, ariaLabel }) => /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2",
                  href,
                  "aria-label": ariaLabel,
                  children: label
                },
                label
              )) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.3 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ jsx("div", { className: "grow basis-0 justify-end hidden lg:flex", children: /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-white main-border-gray rounded-xl\n              bg-[rgb(42,75,155)] pl-6 pr-8 pt-2 \n              pb-2 text-sm flex transition-transform duration-300 hover:scale-110",
                  href: "mailto:contacto@webkode.co",
                  "aria-label": "contact",
                  children: /* @__PURE__ */ jsx("span", { className: "pt-px", children: "Contactanos" })
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2",
              onClick: () => setIsOpen(!isOpen),
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500  mb-1" }),
                /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500  mb-1" }),
                /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500 " })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
            exit: { opacity: 0 },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-gray-900 z-50 w-full \n                items-center gap-10 pb-10 border-y border-solid rounded-b-md border-[rgb(48, 49, 54)] pt-10",
                children: [
                  navbarLinks.map(({ label, href, ariaLabel }) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2",
                      href,
                      onClick: () => setIsOpen(false),
                      "aria-label": ariaLabel,
                      children: label
                    },
                    href
                  )),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: " text-white bg-[rgb(42,75,155)] hover:hover:opacity-65 main-border-gray  rounded-xl outlined-button pl-6 pr-8 pt-2 pb-2  flex",
                      href: "mailto:contacto@webkode.co",
                      children: "Contactanos"
                    }
                  )
                ]
              }
            )
          }
        ) })
      ]
    }
  );
};

const CloseModal = () => /* @__PURE__ */ jsx(
  "svg",
  {
    className: "w-3 h-3",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 14",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      }
    )
  }
);

const firebaseConfig = {
  apiKey: undefined                                       ,
  authDomain: undefined                                           ,
  projectId: undefined                                          ,
  storageBucket: undefined                                              ,
  messagingSenderId: undefined                                                   ,
  appId: undefined                                      ,
  measurementId: undefined                                              
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Validate strings
const validateString = (value) => {
  return value != null && typeof value === "string" && value.trim().length > 0;
};

const validateEmail = (value) => {
  return (
    validateString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
};

const saveData = async (
  customerName,
  customerEmail,
  customerCountry,
  customerPhone,
  message
) => {
  if (
    validateString(customerName) &&
    validateEmail(customerEmail) &&
    customerPhone > 0
  ) {
    try {
      const uuid = v4(); // generamos un id único
      const clientData = doc(db, "clients", uuid);
      await setDoc(clientData, {
        customerName,
        customerEmail,
        customerCountry,
        customerPhone,
        message,
        createdAt: new Date().toISOString(),
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};

function CenteredToast({ toast }) {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: toast && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 0.22 },
      className: "pointer-events-none fixed inset-0 z-[999] flex items-center justify-center",
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `pointer-events-auto rounded-2xl px-5 py-4 shadow-2xl text-center backdrop-blur-md
            ${toast.type === "success" ? "bg-green-900/90 text-green-50 border border-green-500/60" : "bg-red-900/90 text-red-50 border border-red-500/60"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl mb-1", children: toast.type === "success" ? "✅" : "⚠️" }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold", children: toast.text }),
            toast.sub && /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90 mt-1", children: toast.sub })
          ]
        }
      )
    }
  ) });
}

const getFlagUrl = (iso2) => `https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`;
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
  { id: 59, name: "Sudáfrica", dial: "+27", iso2: "ZA" }
];
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
  useEffect(() => {
    const def = countries.find((c) => c.iso2 === defaultCountry) || null;
    if (!value && def) onChange(def);
  }, []);
  useEffect(() => {
    const onClickOutside = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: "w-full bg-gray-600 text-white text-left p-2.5 rounded-lg border border-gray-300 focus:outline-none text-base md:text-sm",
        children: selected ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: getFlagUrl(selected.iso2),
              alt: `Bandera de ${selected.name}`,
              className: "inline-block h-4 w-6 rounded-sm object-cover",
              loading: "lazy",
              onError: (e) => e.currentTarget.style.display = "none"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: selected.name })
        ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Seleccione una opción" })
      }
    ),
    open && /* @__PURE__ */ jsx(
      "ul",
      {
        role: "listbox",
        className: "absolute top-full mt-1 w-full z-50 max-h-56 overflow-y-auto bg-gray-700 border border-gray-600 rounded-lg shadow-lg",
        children: countries.map((c) => /* @__PURE__ */ jsxs(
          "li",
          {
            role: "option",
            "aria-selected": selected?.iso2 === c.iso2,
            onClick: () => {
              onChange(c);
              setOpen(false);
            },
            className: `px-3 py-2 cursor-pointer flex items-center gap-2 text-white hover:bg-gray-600 ${selected?.iso2 === c.iso2 ? "bg-gray-600" : ""}`,
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: getFlagUrl(c.iso2),
                  alt: `Bandera de ${c.name}`,
                  className: "inline-block h-4 w-6 rounded-sm object-cover",
                  loading: "lazy",
                  onError: (e) => e.currentTarget.style.display = "none"
                }
              ),
              /* @__PURE__ */ jsx("span", { children: c.name })
            ]
          },
          c.id
        ))
      }
    )
  ] });
}
const ContactMeModal = ({ setIsOpen }) => {
  const [country, setCountry] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const contentRef = useRef(null);
  const firstFieldRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
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
      message: message.trim()
    };
    const minVisible = new Promise((r) => setTimeout(r, 600));
    try {
      const [results] = await Promise.all([
        Promise.allSettled([
          saveData(name, email, country.name, phone, message),
          fetch("/api/MailService", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          })
        ]),
        minVisible
      ]);
      const allOk = results.every((r) => r.status === "fulfilled");
      if (allOk) {
        resetForm();
        contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
        setToast({ type: "success", text: "¡Enviado con éxito!", sub: "Te contactaremos pronto." });
        setTimeout(() => setToast(null), 1800);
      } else {
        setToast({ type: "error", text: "No pudimos enviar", sub: "Inténtalo nuevamente." });
        setTimeout(() => setToast(null), 2e3);
      }
    } catch (err) {
      console.error("Error al enviar:", err);
      setToast({ type: "error", text: "Ocurrió un error inesperado", sub: "Vuelve a intentarlo." });
      setTimeout(() => setToast(null), 2e3);
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, zIndex: 50 },
      animate: { opacity: 1, zIndex: 50 },
      transition: { duration: 0.25 },
      exit: { opacity: 0 },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          id: "crud-modal",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "contact-title",
          tabIndex: -1,
          className: "fixed inset-0 z-50 flex justify-center items-center overscroll-contain",
          onClick: () => setIsOpen(false),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative p-4 w-full max-w-md max-h-[100dvh]",
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl shadow-sm bg-gray-800", children: [
                /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-20 flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 bg-gray-800/95 backdrop-blur", children: [
                  /* @__PURE__ */ jsx("h3", { id: "contact-title", className: "text-lg font-semibold text-white", children: "Ingresa tus datos de contacto" }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Cerrar",
                      className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg\n                  w-8 h-8 inline-flex cursor-pointer justify-center items-center md:hover:bg-gray-600 md:hover:text-white",
                      onClick: () => setIsOpen(false),
                      children: /* @__PURE__ */ jsx(CloseModal, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(CenteredToast, { toast }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    ref: contentRef,
                    className: "p-4 md:p-5 max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain",
                    style: { WebkitOverflowScrolling: "touch" },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 mb-4 grid-cols-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsx("label", { htmlFor: "contact-name", className: "block mb-2 text-left text-sm font-medium text-white", children: "Nombre (*):" }),
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              ref: firstFieldRef,
                              type: "text",
                              id: "contact-name",
                              autoComplete: "name",
                              enterKeyHint: "next",
                              onKeyDown: (e) => e.key === "Enter" && emailRef.current?.focus(),
                              className: "bg-gray-50 border border-gray-300 text-gray-900 text-base md:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white scroll-mt-24",
                              placeholder: "Ingresa tu nombre",
                              value: name,
                              onChange: (e) => setName(e.target.value),
                              required: true
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsx("label", { htmlFor: "contact-email", className: "block mb-2 text-left text-sm font-medium text-white", children: "Correo electrónico (*):" }),
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              ref: emailRef,
                              type: "email",
                              id: "contact-email",
                              autoComplete: "email",
                              enterKeyHint: "next",
                              onKeyDown: (e) => e.key === "Enter" && phoneRef.current?.focus(),
                              className: "bg-gray-600 border border-gray-300 text-white text-base md:text-sm rounded-lg block w-full p-2.5 scroll-mt-24",
                              placeholder: "Ingresa tu correo electrónico",
                              value: email,
                              onChange: (e) => setEmail(e.target.value),
                              required: true
                            }
                          ),
                          email && !emailOk && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 mt-1", children: "Formato de correo no válido." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsx("label", { htmlFor: "contact-country", className: "block mb-2 text-left text-sm font-medium text-white", children: "País (*):" }),
                          /* @__PURE__ */ jsx(
                            CountryDropdown,
                            {
                              value: country,
                              onChange: setCountry,
                              countries: COUNTRIES,
                              defaultCountry: "CO"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsx("label", { htmlFor: "contact-phone", className: "block mb-2 text-left text-sm font-medium text-white", children: "Número de contacto (*):" }),
                          /* @__PURE__ */ jsxs("div", { className: "flex rounded-lg overflow-hidden border border-gray-300", children: [
                            /* @__PURE__ */ jsx("span", { className: "bg-gray-700 text-white px-3 py-2 text-base md:text-sm flex items-center", children: country?.dial || "+57" }),
                            /* @__PURE__ */ jsx(
                              "input",
                              {
                                ref: phoneRef,
                                type: "tel",
                                id: "contact-phone",
                                className: "flex-1 min-w-0 bg-gray-600 text-white text-base md:text-sm p-2.5 scroll-mt-24",
                                placeholder: "Ingresa tu número de contacto",
                                value: phone,
                                onChange: (e) => setPhone(e.target.value.replace(/\D/g, "")),
                                inputMode: "numeric",
                                pattern: "\\d*",
                                autoComplete: "tel",
                                required: true
                              }
                            )
                          ] }),
                          phone && !phoneOk && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 mt-1", children: "El número debe tener entre 7 y 15 dígitos." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
                          /* @__PURE__ */ jsx("label", { htmlFor: "contact-message", className: "block mb-2 text-left text-sm font-medium text-white", children: "Déjanos un mensaje:" }),
                          /* @__PURE__ */ jsx(
                            "textarea",
                            {
                              id: "contact-message",
                              rows: 4,
                              className: "block p-2.5 w-full text-white bg-gray-600 rounded-lg border border-gray-300 text-base md:text-sm scroll-mt-24",
                              placeholder: "Escribe un mensaje",
                              value: message,
                              onChange: (e) => setMessage(e.target.value)
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          disabled: !isValid || submitting,
                          className: `text-white inline-flex items-center
                    ${!isValid || submitting ? "bg-gray-500 cursor-not-allowed" : "bg-[rgb(42,75,155)] md:hover:scale-110"}
                    outline-none font-medium rounded-lg transition-transform duration-300 text-base md:text-sm px-5 py-2.5 text-center`,
                          onClick: handleClick,
                          children: submitting ? "Enviando..." : "Enviar"
                        }
                      )
                    ]
                  }
                )
              ] })
            }
          )
        }
      )
    }
  ) });
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-screen flex justify-center items-center bg-gray-900 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0",
      id: "home",
      children: /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsx("h3", { className: " text-sm sm:text-2xl mb-6 sm:mt-32 mt-16  font-bold" })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.05 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-white px-8 sm:px-8 md:px-20 lg:px-4", children: [
                /* @__PURE__ */ jsxs("h1", { className: "inline md:hidden text-[rgb(42,75,155)]", children: [
                  " ",
                  '"Kodificamos tus ideas"'
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "hidden md:inline text-[rgb(42,75,155)]", children: '"Kodificamos tus ideas"' })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "mt-2 sm:mt-2 text-xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-wide text-white px-8 sm:px-20 md:px-24 lg:px-24", children: "Desarrollamos el crecimiento de tu empresa Kodificando tus ideas." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            children: /* @__PURE__ */ jsx("h2", { className: "text-white text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ", children: "Unifica tus procesos y obtén la información que tu negocio necesita para avanzar." })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.15 },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex flex-col sm:flex-row mt-14  sm:mb-40 justify-center\n          transition-transform duration-300 hover:scale-110",
                children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "contained-button text-black rounded-xl font-bold cursor-pointer bg-gray-300 w-52 sm:w-52 h-12 \n              mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0",
                    onClick: () => setIsModalOpen(true),
                    "aria-label": "ContactMe",
                    children: "Contactanos"
                  }
                )
              }
            )
          }
        ),
        isModalOpen && /* @__PURE__ */ jsx(ContactMeModal, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
      ] })
    }
  );
};

function TeamImageCard({
  avatarSrc,
  avatarAlt
}) {
  return /* @__PURE__ */ jsx("img", { src: avatarSrc, alt: avatarAlt, className: "w-full h-auto" });
}

function TeamCard({
  name,
  role,
  tagline,
  avatarSrc,
  avatarAlt,
  linkedin,
  github,
  email,
  bio,
  skills = []
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        whileHover: { y: -6 },
        transition: { type: "spring", stiffness: 220, damping: 18 },
        className: "group w-full max-w-[360px] sm:max-w-[380px] rounded-3xl p-[2px] mx-auto\n                   bg-gradient-to-br from-indigo-500/70 via-sky-400/70 to-cyan-400/70",
        children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl bg-[rgb(42,75,155)] px-6 sm:px-8 pt-14 sm:pt-16 pb-10 sm:pb-12 shadow-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white shadow-xl overflow-hidden\n                          transition-transform duration-300 group-hover:scale-105",
              children: /* @__PURE__ */ jsx(TeamImageCard, { avatarSrc, avatarAlt })
            }
          ) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 sm:mt-4 text-center text-xl sm:text-2xl font-extrabold text-white", children: name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-center text-white/90 text-sm sm:text-base", children: role }),
          tagline && /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-white/80 text-xs sm:text-sm leading-snug", children: tagline }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: "mt-6 sm:mt-8 block w-full rounded-xl bg-white py-2 sm:py-2.5 text-center font-bold\n                       text-[rgb(42,75,155)] transition-transform duration-300 hover:scale-105\n                       focus:outline-none focus:ring-2 cursor-pointer focus:ring-white/60",
              children: "¡Más sobre mí!"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4", children: [
            linkedin && /* @__PURE__ */ jsx(
              "a",
              {
                href: linkedin,
                target: "_blank",
                rel: "noreferrer",
                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 transition",
                children: /* @__PURE__ */ jsx(FaLinkedin, { className: "text-white text-lg sm:text-xl" })
              }
            ),
            github && /* @__PURE__ */ jsx(
              "a",
              {
                href: github,
                target: "_blank",
                rel: "noreferrer",
                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 transition",
                children: /* @__PURE__ */ jsx(FaGithub, { className: "text-white text-lg sm:text-xl" })
              }
            ),
            email && /* @__PURE__ */ jsx(
              "a",
              {
                href: email,
                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 transition",
                children: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-white text-lg sm:text-xl" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[60]", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
          onClick: () => setOpen(false)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { type: "spring", stiffness: 280, damping: 22 },
          className: "relative z-[61] w-full max-w-md rounded-2xl bg-white shadow-2xl",
          role: "dialog",
          "aria-modal": "true",
          children: [
            /* @__PURE__ */ jsx("div", { className: "px-5 pt-5 pb-3 border-b", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-[rgb(22,36,82)] truncate", children: name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 truncate", children: role })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "ml-auto p-2 rounded-full cursor-pointer hover:bg-slate-100",
                  "aria-label": "Cerrar",
                  children: /* @__PURE__ */ jsx(IoClose, { size: 22 })
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
              tagline && /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-700 mb-3", children: tagline }),
              bio && /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-700", children: bio }),
              skills.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: skills.map((s, i) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-xs px-3 py-1 rounded-full bg-[rgb(42,75,155)]/10 text-[rgb(42,75,155)]",
                  children: s
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-5 pb-5 pt-3 border-t flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                linkedin && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: linkedin,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "p-2 rounded-full bg-slate-100 hover:bg-slate-200",
                    children: /* @__PURE__ */ jsx(FaLinkedin, { className: "text-[rgb(42,75,155)]" })
                  }
                ),
                github && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: github,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "p-2 rounded-full bg-slate-100 hover:bg-slate-200",
                    children: /* @__PURE__ */ jsx(FaGithub, { className: "text-[rgb(42,75,155)]" })
                  }
                ),
                email && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: email,
                    className: "p-2 rounded-full bg-slate-100 hover:bg-slate-200",
                    children: /* @__PURE__ */ jsx(FaEnvelope, { className: "text-[rgb(42,75,155)]" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "px-4 py-2 rounded-lg cursor-pointer bg-[rgb(42,75,155)] text-white font-semibold hover:opacity-95",
                  children: "Cerrar"
                }
              )
            ] })
          ]
        }
      ) })
    ] }) })
  ] });
}

const serviceData1$1 = {
  role: "Ingeniero de Desarrollo FullStack",
  stack: "🚀 Java · SpringBoot · Micronaut · PHP · Laravel · Sql · NoSQL · VueJs · AstroJs | 👾 Enfoque en rendimiento y escalabilidad 🤖"
};
const serviceData2$1 = {
  role: "Ingeniero de Desarrollo FullStack",
  stack: "💻 Java · AWS · Node.js · SQL · Angular · Python · AzureDevops | 🎯 Enfoque en producto, performance y escalabilidad"
};
const serviceData3$1 = {
  role: "Ingeniero de Desarrollo FrontEnd",
  stack: "🚀 Java & Sql & Angular | 🎯 Enfoque en producto y performance"
};
const img1 = "CarlosEscobar.webp";
const img2 = "kevinmorelo.webp";
const img3 = "VictorPalacios.webp";
const We = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-screen flex justify-center bg-black relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-16", id: "we" }),
    /* @__PURE__ */ jsx("div", { className: "pb-10 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white", children: "Conoce nuestro equipo WebKode" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center mt-10 sm:mt-16", children: [
            /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsx(
              TeamCard,
              {
                name: "Carlos A. Escobar.",
                role: serviceData1$1.role,
                tagline: serviceData1$1.stack,
                avatarSrc: img1,
                avatarAlt: "Carlos Escobar",
                linkedin: "https://www.linkedin.com/in/carlosesconav/",
                github: "https://github.com/carlosesconav",
                email: "mailto:carlos.escobar@webkode.co",
                bio: "Más de 3 años construyendo productos escalables a nivel Cloud y OnPremise. Me enfoco en performance, escalabilidad y buenas prácticas (Clean architecture, testing y CI/CD).",
                skills: ["Java", "PHP", "C#", "SpringBoot", "SQL", "NoSQL", ".NET Core", "AWS", "Docker", "CI/CD", "Micronaut", "AstroJs", "VueJs", "Laravel"]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsx(
              TeamCard,
              {
                name: "Kevin Morelo V.",
                role: serviceData2$1.role,
                tagline: serviceData2$1.stack,
                avatarSrc: img2,
                avatarAlt: "Kevin Morelo",
                linkedin: "https://www.linkedin.com/in/kevinmorelo/",
                github: "https://github.com/KevinMorelo",
                email: "mailto:kevin.morelo@webkode.co",
                bio: "Fullstack con visión emprendedora. Disfruto transformar ideas en productos digitales medibles, con obsesión por la optimización, la experiencia de usuario y la integración tecnológica.",
                skills: ["Java", "JavaScript", "Node.js", "PostgreSQL", "AWS", "Docker", "CI/CD", "Angular", "Python", "JUnit"]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsx(
              TeamCard,
              {
                name: "Victor M. Palacios.",
                role: serviceData3$1.role,
                tagline: serviceData3$1.stack,
                avatarSrc: img3,
                avatarAlt: "Victor Palacios",
                linkedin: "https://www.linkedin.com/in/victormanuelpalacios/",
                github: "https://github.com/VictorMpalacios",
                email: "mailto:victor.palacios@webkode.co",
                bio: "Frontend enfocado en accesibilidad y microinteracciones. Experiencia en design systems, testing y performance web.",
                skills: [
                  "React",
                  "TypeScript",
                  "Vite",
                  "Playwright",
                  "Design System"
                ]
              }
            ) })
          ] })
        ] })
      }
    ) })
  ] });
};

const CheckArrowIcon = () => /* @__PURE__ */ jsx("div", { className: "rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4", children: /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20px",
    height: "20px",
    className: "fill-white",
    children: /* @__PURE__ */ jsx("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" })
  }
) });

const serviceData1 = [
  "Presencia digital inmediata con tu marca.",
  "Siempre disponible.",
  "Diseño moderno y adaptable.",
  "Inversión accesible."
];
const serviceData2 = [
  "Imagen profesional y confiable.",
  "Estructura completa.",
  "Mayor alcance comercial.",
  "Escalable y listo para crecer con tu empresa."
];
const serviceData3 = [
  "Tu tienda abierta 24/7.",
  "Ventas en línea seguras con pasarelas de pago confiables.",
  "Fácil de usar.",
  "Expande tu mercado y vende más allá de tu ubicación física."
];
const Services = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-screen flex justify-center bg-gray-900 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-16", id: "service" }),
    /* @__PURE__ */ jsx("div", { className: "pb-10 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center mb-16", children: [
            /* @__PURE__ */ jsx("span", { className: "block-subtitle text-white", children: "Encuentra la mejor opción para ti" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white", children: "Selecciona uno de nuestros servicios" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20", children: [
            /* @__PURE__ */ jsx("div", { className: "w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "p-8 bg-[rgb(42,75,155)] rounded-3xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold font-heading text-white text-left", children: "Plan Esencial." }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left", children: "Una página sencilla, elegante y profesional para mostrar tu marca al mundo." }),
              /* @__PURE__ */ jsx("ul", { className: "mb-2 2xl:mb-6 text-white", children: serviceData1.map((text, index) => /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                /* @__PURE__ */ jsx("span", { children: text })
              ] }, `${text}-${index}`)) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/#home",
                  className: "inline-block text-white text-center py-2 px-4 w-full rounded-xl rounded-t-xl \n                    contained-button transition-transform duration-300 hover:scale-110 cursor-pointer bg-[rgb(191,24,24)] font-bold leading-loose mt-16",
                  "aria-label": "Get started",
                  children: "!Lo quiero!"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "px-8 py-8 bg-[rgb(42,75,155)] rounded-3xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left", children: "Plan Corporativo." }),
              /* @__PURE__ */ jsx("p", { className: "mt-8 mb-8 2xl:mb-12 text-gray-300 leading-loose text-left", children: "La carta de presentación perfecta para tu empresa con un sitio completo con secciones claras que transmiten confianza y profesionalismo." }),
              /* @__PURE__ */ jsx("ul", { className: "mb-14 text-white", children: serviceData2.map((text, index) => /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                /* @__PURE__ */ jsx("span", { children: text })
              ] }, `${text}-${index}`)) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/#home",
                  className: "inline-block text-white text-center \n                    py-2 px-4 w-full contained-button leading-loose \n                    transition-transform duration-300 hover:scale-110 font-bold mt-20 rounded-xl cursor-pointer bg-[rgb(191,24,24)]",
                  "aria-label": "Get started",
                  children: "!Lo quiero!"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "p-8 bg-[rgb(42,75,155)] rounded-3xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-bold font-heading text-white text-left", children: "Plan Tienda Online." }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-start items-end" }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 mb-6 2xl:mb-10 text-gray-300 leading-loose text-left", children: "Tu negocio abierto las 24 horas una tienda virtual con carrito de compras y pagos en línea." }),
              /* @__PURE__ */ jsx("ul", { className: "mb-2 2xl:mb-6 text-white", children: serviceData3.map((text, index) => /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                /* @__PURE__ */ jsx("span", { children: text })
              ] }, `${text}-${index}`)) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/#home",
                  className: "inline-block text-white text-center py-2 px-4 w-full \n                    rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16\n                    cursor-pointer transition-transform duration-300 hover:scale-110 bg-[rgb(191,24,24)]",
                  "aria-label": "Get started",
                  children: "!Lo quiero!"
                }
              )
            ] }) })
          ] })
        ] })
      }
    ) })
  ] });
};

const testimonialsData = [
  {
    customerName: "Andres Ceballos",
    customerTitle: "CEO de NovaHaus",
    content: "El equipo de Webkode hizo un trabajo excepcional en la creación de nuestro portal web. Supieron captar nuestras ideas, aportaron soluciones creativas y lograron un resultado que superó nuestras expectativas. Destaco su profesionalismo, compromiso y la calidad humana con la que nos acompañaron en todo el proceso.",
    image: "Andres-ceballos.webp"
  },
  {
    customerName: "Nataly Palacios",
    customerTitle: "CEO de Creación Mental",
    content: "Trabajar con el equipo de Webkode fue una experiencia excepcional. Supieron entender desde el primer momento lo que necesitábamos y lograron crear un portal web moderno, funcional y totalmente adaptado a nuestra visión. El equipo demostró un profesionalismo admirable, siempre atentos a los detalles y con una disposición impecable. Estamos muy satisfechos con el resultado y sin duda volveríamos a contar con ellos.",
    image: "Nataly.webp"
  },
  {
    customerName: "Jose Sanchez",
    customerTitle: "CEO de Sociedad Biomedica",
    content: "Trabajar con el equipo Webkode fue una experiencia excepcional. Desde el primer momento entendieron nuestras necesidades y lograron plasmar en el portal web exactamente lo que buscábamos. Su profesionalismo, dedicación y calidad en cada detalle marcaron la diferencia. Sin duda, un equipo altamente recomendado.",
    image: "Jose-sanchez.webp"
  }
];
const Testimonies = () => /* @__PURE__ */ jsxs("section", { className: "w-full flex justify-center pt-16 text-white mb-16 lg:mb-32 bg-black relative", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute -top-16", id: "feedback" }),
  /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full lg:w-[1150px] justify-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: 0.3 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "block-subtitle text-center font-bold mb-6", children: "Testimonios" }),
        /* @__PURE__ */ jsxs("div", { className: "block-big-title text-center mb-20 px-8 sm:px-24 md:px-48", children: [
          "¡Clientes que les ha encantado",
          " ",
          /* @__PURE__ */ jsx("label", { className: "font-bold", children: "Webkode" }),
          "!"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col text-white lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center", children: testimonialsData.map((testimonial, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-[rgb(42,75,155)] flex flex-col px-6 py-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex mb-2" }),
              /* @__PURE__ */ jsxs("div", { className: "content-text-white", children: [
                '"',
                testimonial.content,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex mt-4 mb-2 xl:mt-8 xl:mb-4", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: testimonial.image,
                    alt: "Customer avatar",
                    width: "45px",
                    height: "5px",
                    "aria-label": testimonial.customerName,
                    className: "rounded-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "content-text-white font-medium", children: testimonial.customerName }),
                  /* @__PURE__ */ jsx("div", { className: "content-text-gray", children: testimonial.customerTitle })
                ] })
              ] })
            ]
          },
          `${testimonial.customerName}-${index}`
        )) })
      ]
    }
  ) })
] });

const InstagramIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    fill: "white",
    className: "h-5 w-5",
    children: /* @__PURE__ */ jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })
  }
);

function LinkdinIcon() {
  return /* @__PURE__ */ jsx("img", { src: "/LINKDIN.webp", alt: "Linkdin Logo", className: "w-24" });
}

function Webkode() {
  return /* @__PURE__ */ jsx("img", { src: "/WEBKODE-SOLO-BLANCO.webp", alt: "Webkode Logo", className: "w-24" });
}

const footerData = [
  {
    title: "Productos",
    items: ["Servicios", "Nosotros"]
  },
  {
    title: "Enlaces importantes",
    items: [
      "Organización de nuestro equipo",
      "Terminos y condiciones",
      "Politica de privacidad"
    ]
  },
  {
    title: "Empresa",
    items: ["Nosotros", "Contactanos"]
  }
];
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { "aria-label": "Site footer", children: /* @__PURE__ */ jsx("div", { className: "pt-10  lg:pt-20 lg:pb-16 bg-gray-900 radius-for-skewed ", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/3 mb-16 lg:mb-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center lg:justify-start items-center grow basis-0", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white mr-2 text-6xl", children: /* @__PURE__ */ jsx(Webkode, {}) }),
        /* @__PURE__ */ jsx("div", { className: "text-white font-['Poppins'] font-bold text-xl", children: "Webkode" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0", children: '"Kodificamos tus ideas"' }),
      /* @__PURE__ */ jsxs("div", { className: "w-36 mx-auto lg:mx-0", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button",
            href: "https://www.linkedin.com/in/web-kode-043755380/",
            target: "_blank",
            "aria-label": "Linkdin",
            children: /* @__PURE__ */ jsx(LinkdinIcon, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button",
            href: "https://www.instagram.com/webkodeco/",
            target: "_blank",
            "aria-label": "Instagram",
            children: /* @__PURE__ */ jsx(InstagramIcon, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto mb-16 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-white", children: "Productos" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[0].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto mb-16 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-white", children: "Enlaces importantes" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[1].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-white", children: "Empresa" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[2].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] })
    ] })
  ] }) }) }) });
};

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    "button",
    {
      className: "w-12 h-12 fixed bottom-6 right-6 rounded-xl\n          bg-gray-800 hover:bg-gray-700 cursor-pointer flex justify-center items-center transition z-50",
      onClick: scrollToTop,
      "aria-label": "Scroll to top",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          width: "35",
          height: "35",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
              stroke: "rgb(42,75,155)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    }
  ) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Webkode" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Navbar", "client:component-export": "Navbar" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Hero", "client:component-export": "Hero" })} ${renderComponent($$result2, "We", We, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/We", "client:component-export": "We" })} ${renderComponent($$result2, "Services", Services, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Services", "client:component-export": "Services" })} ${renderComponent($$result2, "Testimonies", Testimonies, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Testimonies", "client:component-export": "Testimonies" })} ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/sections/Footer", "client:component-export": "Footer" })} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/components/ui/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/kevinandresmorelovillalobos/Proyectos/webkode-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
