//Validate strings
const validateString = (value) => {
  return value != null && typeof value === "string" && value.trim().length > 0;
};

const validateEmail = (value) => {
  return (
    validateString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
};

const validateTel = (value) => {
  return (
    validateTel(value) && !/^\d{7,15}$/.test(phone.replace(/\D/g, ""))
  );
};

export { validateString, validateEmail, validateTel };
