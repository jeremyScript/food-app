import { useState } from "react";
import Input from "../components/UI/Input";

const useForm = (formObj) => {
  const [formState, setFormState] = useState(formObj);

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

  const renderFormInputs = () => {
    return Object.values(formState).map(
      ({ inputName, isValid, isTouched, errorMessage, props }) => (
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
    for (let rule of inputObj.validation) {
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

  return [renderFormInputs, isFormValid];
};

export default useForm;
