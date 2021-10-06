import { useState } from "react";

import Input from "../components/UI/Input";

const useForm = (formObject) => {
  const [formState, setFormState] = useState(formObject);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prevState) => {
      const inputObj = { ...prevState[name] };
      inputObj.props.input.value = value;
      inputObj.isTouched = true;
      validateInput(inputObj);
      return { ...formState, [name]: inputObj };
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const inputObj = { ...formState[name] };
    inputObj.isTouched = true;
    validateInput(inputObj);
    setFormState({ ...formState, [name]: inputObj });
  };

  const renderFormInputs = () =>
    Object.values(formState).map(
      ({ inputName, isValid, isTouched, errorMessage, props }) => {
        return (
          <Input
            key={props.label}
            className={`${props.className}`}
            label={props.label}
            isTouched={isTouched}
            isValid={isValid}
            errorMessage={errorMessage}
            input={{
              id: props.input.id,
              name: inputName,
              type: props.input.type,
              value: formState[inputName].props.input.value,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        );
      }
    );

  const validateInput = (inputObj) => {
    for (let rule of inputObj.validationRules) {
      if (!rule.validate(inputObj.props.input.value)) {
        inputObj.isValid = false;
        inputObj.errorMessage = rule.errorMessage;
        return;
      }
    }
    inputObj.isValid = true;
    inputObj.errorMessage = "";
  };

  const isFormValid = Object.values(formState).every(
    (input) => input.isValid === true
  );

  console.log("formState", formState.firstName.props.input.value);

  return [renderFormInputs, isFormValid];
};

export default useForm;
