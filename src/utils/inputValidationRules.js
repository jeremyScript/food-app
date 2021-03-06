export const createRequiredRule = (inputName) => {
  return {
    errorMessage: `${inputName} is required`,
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

export const createMatchRule = (inputName) => {
  return {
    errorMessage: `${inputName} does not match`,
    validate: (inputValue, formObj) =>
      inputValue === formObj.password.props.input.value,
  };
};

export const createPhoneRule = (inputName) => {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return {
    errorMessage: `${inputName} entered is not valid`,
    validate: (inputValue) => regex.test(inputValue),
  };
};

export const createEmailRule = (inputName) => {
  const regex = /^\S+@\S+\.\S+$/;
  return {
    errorMessage: `${inputName} entered is not valid`,
    validate: (inputValue) => regex.test(inputValue),
  };
};

export const createZipCodeRule = (inputName) => {
  const regex = /^\d{5}(?:[-\s]\d{4})?$/;
  return {
    errorMessage: `${inputName} entered is not valid`,
    validate: (inputValue) => regex.test(inputValue),
  };
};
