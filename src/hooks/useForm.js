import { useState } from "react";

import Input from "../components/UI/Input";

const useForm = (formObject) => {
  const [formState, setFormState] = useState(formObject);

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  const handleBlur = (event) => {};

  const renderFormInputs = (className) =>
    Object.values(formState).map(({ inputName, props }) => (
      <Input
        key={props.label}
        className={`${props.className} ${className}`}
        label={props.label}
        input={{
          id: props.input.id,
          type: props.input.type,
          value: formState[inputName.props.value],
          onChange: handleChange,
          onBlur: handleBlur,
        }}
      />
    ));

  const isFormValid = Object.values(formState).every(
    (input) => input.isValid === true
  );

  return [renderFormInputs, isFormValid];
};

export default useForm;
