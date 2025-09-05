import { motion, AnimatePresence } from "framer-motion";

import { CloseModal } from "../../assets/icons/CloseModal";


export const ContactMeModal = ({ setIsOpen }) => {

  const country = [
  { id: 1, name: "Afganistán", code: "+93" },
  { id: 2, name: "Albania", code: "+355" },
  { id: 3, name: "Alemania", code: "+49" },
  { id: 4, name: "Andorra", code: "+376" },
  { id: 5, name: "Angola", code: "+244" },
  { id: 6, name: "Argentina", code: "+54" },
  { id: 7, name: "Armenia", code: "+374" },
  { id: 8, name: "Australia", code: "+61" },
  { id: 9, name: "Austria", code: "+43" },
  { id: 10, name: "Bélgica", code: "+32" },
  { id: 11, name: "Bolivia", code: "+591" },
  { id: 12, name: "Brasil", code: "+55" },
  { id: 13, name: "Canadá", code: "+1" },
  { id: 14, name: "Chile", code: "+56" },
  { id: 15, name: "China", code: "+86" },
  { id: 16, name: "Colombia", code: "+57" },
  { id: 17, name: "Corea del Sur", code: "+82" },
  { id: 18, name: "Costa Rica", code: "+506" },
  { id: 19, name: "Cuba", code: "+53" },
  { id: 20, name: "Dinamarca", code: "+45" },
  { id: 21, name: "Ecuador", code: "+593" },
  { id: 22, name: "Egipto", code: "+20" },
  { id: 23, name: "El Salvador", code: "+503" },
  { id: 24, name: "España", code: "+34" },
  { id: 25, name: "Estados Unidos", code: "+1" },
  { id: 26, name: "Estonia", code: "+372" },
  { id: 27, name: "Filipinas", code: "+63" },
  { id: 28, name: "Finlandia", code: "+358" },
  { id: 29, name: "Francia", code: "+33" },
  { id: 30, name: "Grecia", code: "+30" },
  { id: 31, name: "Guatemala", code: "+502" },
  { id: 32, name: "Honduras", code: "+504" },
  { id: 33, name: "Hungría", code: "+36" },
  { id: 34, name: "India", code: "+91" },
  { id: 35, name: "Indonesia", code: "+62" },
  { id: 36, name: "Irlanda", code: "+353" },
  { id: 37, name: "Israel", code: "+972" },
  { id: 38, name: "Italia", code: "+39" },
  { id: 39, name: "Japón", code: "+81" },
  { id: 40, name: "México", code: "+52" },
  { id: 41, name: "Nicaragua", code: "+505" },
  { id: 42, name: "Noruega", code: "+47" },
  { id: 43, name: "Nueva Zelanda", code: "+64" },
  { id: 44, name: "Panamá", code: "+507" },
  { id: 45, name: "Paraguay", code: "+595" },
  { id: 46, name: "Perú", code: "+51" },
  { id: 47, name: "Polonia", code: "+48" },
  { id: 48, name: "Portugal", code: "+351" },
  { id: 49, name: "Reino Unido", code: "+44" },
  { id: 50, name: "República Dominicana", code: "+1-809" },
  { id: 51, name: "Rusia", code: "+7" },
  { id: 52, name: "Suecia", code: "+46" },
  { id: 53, name: "Suiza", code: "+41" },
  { id: 54, name: "Turquía", code: "+90" },
  { id: 55, name: "Ucrania", code: "+380" },
  { id: 56, name: "Uruguay", code: "+598" },
  { id: 57, name: "Venezuela", code: "+58" },
  { id: 58, name: "Vietnam", code: "+84" },
  { id: 59, name: "Sudáfrica", code: "+27" },
];


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
          tabindex="-1"
          aria-hidden="true"
          className="w-full h-full fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative p-4 w-full max-w-md max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relativerounded-lg shadow-sm bg-gray-800 rounded-2xl">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-lg font-semibold text-white">
                  Ingresa tus datos de contacto
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
                  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                  onClick={() => setIsOpen(false)}>
                  <CloseModal />
                  <span className="sr-only">Cerrar modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Nombre (*):
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Correo electrónico (*):
                    </label>
                    <input
                      type="email"
                      name="name"
                      id="name"
                      className="bg-gray-600 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                      placeholder="Ingresa tu correo electrónico"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      for="country"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      País (*):
                    </label>
                    <select
                      id="category"
                      className=" border border-gray-300 bg-gray-600 text-gray-400 
                      text-sm rounded-lg block w-full p-2.5"
                      size="5"
                    >
                      <option selected disabled>Seleccione una opción</option>
                      {country.map((c) => {

                        return(
                        <option key={c.id} value={c.code}>
                           {c.name} - {c.code}
                          </option>)
                      })}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Número de contacto (*):
                    </label>
                    <input
                      type="number"
                      name="name"
                      id="name"
                      className="bg-gray-600 border border-gray-300 text-white text-sm rounded-lg
                      focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Ingresa tu número de contacto"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      for="description"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Dejanos un mensaje
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-300 "
                      placeholder="Escribe un mensaje"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center 
                  bg-[rgb(42,75,155)] hover:scale-110 outline-none  
                  font-medium rounded-lg transition-transform duration-300 text-sm px-5 py-2.5 
                  text-center cursor-pointer"
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
