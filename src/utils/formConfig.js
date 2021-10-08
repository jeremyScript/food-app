import * as rules from "./inputValidationRules";
import { fullStates } from "./states";

export const checkoutForm = {
  firstName: {
    inputName: "firstName",
    props: {
      className: "",
      label: "First name",
      input: {
        id: "first-name",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [rules.createRequiredRule("First name")],
  },
  lastName: {
    inputName: "lastName",
    props: {
      className: "",
      label: "Last name",
      input: {
        id: "last-name",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [rules.createRequiredRule("Last name")],
  },
  addressLine1: {
    inputName: "addressLine1",
    props: {
      className: "",
      label: "Address line 1",
      input: {
        id: "address-line-1",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [rules.createRequiredRule("Address")],
  },
  addressLine2: {
    inputName: "addressLine2",
    props: {
      className: "",
      label: "Address line 2 (Optional)",
      input: {
        id: "address-line-2",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: true,
    isTouched: false,
    validation: [],
  },
  city: {
    inputName: "city",
    props: {
      className: "",
      label: "City",
      input: {
        id: "city",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [rules.createRequiredRule("City")],
  },
  state: {
    inputName: "state",
    inputType: "select",
    props: {
      className: "",
      label: "State",
      input: {
        id: "state",
        value: "",
        placeholder: "Select state",
        options: fullStates,
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [rules.createRequiredRule("State")],
  },
  zipCode: {
    inputName: "zipCode",
    props: {
      className: "",
      label: "Zip code",
      input: {
        id: "zip-code",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [
      rules.createRequiredRule("Zip code"),
      rules.createZipCodeRule("Zip code"),
    ],
  },
  phone: {
    inputName: "phone",
    props: {
      className: "",
      label: "Phone",
      input: {
        id: "phone",
        type: "text",
        value: "",
        placeholder: "e.g., 000-000-0000",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [
      rules.createRequiredRule("Phone number"),
      rules.createPhoneRule("Phone number"),
    ],
  },
  email: {
    inputName: "email",
    props: {
      className: "",
      label: "Email",
      input: {
        id: "email",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validation: [
      rules.createRequiredRule("Email"),
      rules.createEmailRule("Email"),
    ],
  },
};
