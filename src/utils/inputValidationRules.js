export const createRequiredRule = (inputName) => {
  return {
    errorMessage: `${inputName} required`,
    validate: (inputValue) => inputValue.trim().length > 0,
  };
};

export const createMinLengthRule = (inputName, minChars) => {
  return {
    errorMessage: `${inputName} should be at least ${minChars} characters long`,
    validate: (inputValue) => inputValue.length > minChars,
  };
};

export const createMaxLengthRule = (inputName, maxChars) => {
  return {
    errorMessage: `${inputName} cannot be more than ${maxChars} characters long`,
    validate: (inputValue) => inputValue.length <= maxChars,
  };
};

export const createMatchRule = (inputName, value1, value2) =>
  value1 !== value2 ? `${inputName} does not match` : null;
