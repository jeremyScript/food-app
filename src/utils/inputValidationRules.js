export const requiredRule = (inputName, inputValue) =>
  inputValue.trim().length === 0 ? `${inputName} required` : null;

export const minLengthRule = (inputName, inputValue, minChars) =>
  inputValue.length < minChars
    ? `${inputName} should be at least ${minChars} characters long`
    : null;

export const maxLengthRule = (inputName, inputValue, maxChars) =>
  inputValue.length > maxChars
    ? `${inputName} cannot be more than ${maxChars} characters long`
    : null;

export const matchRule = (inputName, value1, value2) =>
  value1 !== value2 ? `${inputName} does not match` : null;
