import styles from "../components/Cart/Checkout.module.css";

export const checkoutForm = {
  firstName: {
    inputName: "firstName",
    props: {
      className: styles.left,
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
    validationRules: [],
  },
  lastName: {
    inputName: "lastName",
    props: {
      className: styles.right,
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
    validationRules: [],
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
    validationRules: [],
  },
  addressLine2: {
    inputName: "addressLine2",
    props: {
      className: "",
      label: "Address line 2",
      input: {
        id: "address-line-2",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validationRules: [],
  },
  city: {
    inputName: "city",
    props: {
      className: styles.left,
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
    validationRules: [],
  },
  state: {
    inputName: "state",
    props: {
      className: styles.right,
      label: "State",
      input: {
        id: "state",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validationRules: [],
  },
  zipCode: {
    inputName: "zipCode",
    props: {
      className: styles.left,
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
    validationRules: [],
  },
  phone: {
    inputName: "phone",
    props: {
      className: styles.left,
      label: "Phone",
      input: {
        id: "phone",
        type: "text",
        value: "",
      },
    },
    errorMessage: "",
    isValid: null,
    isTouched: false,
    validationRules: [],
  },
  email: {
    inputName: "email",
    props: {
      className: styles.right,
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
    validationRules: [],
  },
};
