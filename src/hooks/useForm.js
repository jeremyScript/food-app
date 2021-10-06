import { useState } from "react";

import Input from "../components/UI/Input";

const useForm = (formObject) => {
  const [formState, setFormState] = useState(formObject);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const copy = { ...formState[name] };
    copy.props.input.value = value;
    copy.isTouched = true;
    setFormState({ ...formState, [name]: copy });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const copy = { ...formState[name] };
    copy.isTouched = true;
    setFormState({ ...formState, [name]: copy });
  };

  const renderFormInputs = () =>
    Object.values(formState).map(({ inputName, props }) => {
      console.log(props);
      return (
        <Input
          key={props.label}
          className={`${props.className}`}
          label={props.label}
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
    });

  const isFormValid = Object.values(formState).every(
    (input) => input.isValid === true
  );

  return [renderFormInputs, isFormValid];
};

export default useForm;
