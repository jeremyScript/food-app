import { useState } from "react";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";

const useForm = (formObj) => {
  const [formState, setFormState] = useState(formObj);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevState) => {
      const inputObj = {
        ...prevState[name],
        props: {
          ...prevState[name].props,
          input: { ...prevState[name].props.input, value: value },
        },
      };
      return { ...formState, [name]: validateInput(inputObj) };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const inputObj = { ...formState[name] };
    inputObj.isTouched = true;
    setFormState({ ...formState, [name]: validateInput(inputObj) });
  };

  const renderFormInputs = () => {
    return Object.values(formState).map(
      ({ inputName, inputType, isValid, isTouched, errorMessage, props }) =>
        inputType === "select" ? (
          <Select
            key={props.label}
            className={`${props.className}`}
            label={props.label}
            isTouched={isTouched}
            isValid={isValid}
            errorMessage={errorMessage}
            select={{
              ...props.input,
              name: inputName,
              value: formState[inputName].props.input.value,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        ) : (
          <Input
            key={props.label}
            className={`${props.className}`}
            label={props.label}
            isTouched={isTouched}
            isValid={isValid}
            errorMessage={errorMessage}
            input={{
              ...props.input,
              name: inputName,
              value: formState[inputName].props.input.value,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        )
    );
  };

  const validateInput = (inputObj) => {
    const inputObjCopy = { ...inputObj };
    for (let rule of inputObj.validation) {
      if (!rule.validate(inputObj.props.input.value)) {
        inputObjCopy.isValid = false;
        inputObjCopy.errorMessage = rule.errorMessage;
        return inputObjCopy;
      }
    }
    inputObjCopy.isValid = true;
    inputObjCopy.errorMessage = "";
    return inputObjCopy;
  };

  const validateAll = () => {
    setFormState((prevState) => {
      const stateCopy = { ...prevState };
      Object.values(stateCopy).forEach((inputObj) => {
        if (!inputObj.isValid) {
          stateCopy[inputObj.inputName] = {
            ...validateInput(inputObj),
            isTouched: true,
          };
        }
      });
      return stateCopy;
    });
  };

  const isFormValid = Object.values(formState).every(
    (input) => input.isValid === true
  );

  const formData = {};

  if (isFormValid) {
    Object.values(formState).forEach((inputObj) => {
      formData[inputObj.inputName] = inputObj.props.input.value;
    });
  }

  const clearAll = () => {
    Object.keys(formState).forEach((inputName) => {
      formState[inputName].props.input.value = "";
    });
  };

  return [renderFormInputs, isFormValid, validateAll, clearAll, formData];
};

export default useForm;
