//Validate strings
const validateString = (value) => {
  return value != null && typeof value === "string" && value.trim().length > 0;
};

const validateEmail = (value) => {
  return (
    validateString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
};

export { validateString, validateEmail };
