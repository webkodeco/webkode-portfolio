import { db } from "../firebase/Client";
import { doc, setDoc } from "firebase/firestore";
import { validateEmail, validateString } from "./ValidateService";
import { v4 as uuidv4 } from "uuid";

export const saveData = async (
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
      const uuid = uuidv4(); // generamos un id único
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
