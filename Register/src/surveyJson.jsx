const surveyJson = {
  elements: [
    {
      name: "firstName",
      placeHolder: "Enter your first name",
      title: "First name:",
      type: "text",
      isRequired: true,
    },
    {
      name: "middleName",
      title: "Middle name:",
      placeHolder: "Enter your middle name",
      type: "text",
      isRequired: true,
    },
    {
      name: "lastName",
      title: "Last name:",
      placeHolder: "Enter your last name",
      type: "text",
      isRequired: true,
    },
    {
      name: "birthDate",
      title: "Enter your birth date:",
      type: "text",
      inputType: "date",
      isRequired: true,
    },

    {
      name: "phoneCountryCode",
      placeHolder: "Enter your phone country code",
      title: " country",
      type: "dropdown",
      isRequired: true,
      choicesByUrl: {
        url: "./src/countryCodes.json",
        valueName: "value",
        titleName: "text",
      },
    },
    {
      name: "phoneNumber",
      placeHolder: "Enter your phone number",
      title: "phone number:",
      type: "text",
      isRequired: true,
    },
    {
      name: "address",
      placeHolder: "Enter your address",
      title: "address",
      type: "text",
      isRequired: true,
    },
    {
      name: "email",
      placeHolder: "Enter your email",
      title: "Email:",
      type: "text",
      isRequired: true,
      validators: [
        {
          type: "regex",
          regex: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$",

          text: "Enter a valid email address",
        },
        {
          type: "minlength", // Add a custom validator for minimum length
          min: 8, // Set your desired minimum length
          text: "Email must be at least 15 characters",
        },
      ],
    },
    {
      name: "confirmEmail",
      placeHolder: "Confirm your email",
      title: "Confirm Email:",
      type: "text",
      isRequired: true,
    },

    {
      name: "password",
      placeHolder: "Enter your password",
      title: "Password:",
      type: "password", // Endret fra "text" til "password"
      inputType: "password", // survey-react-ui-spesifikk egenskap for input type
      isRequired: true,
      validators: [
        {
          type: "expression",
          expression: "value.length >= 8",
          text: "Password must be at least 8 characters long.",
        },
        {
          type: "expression",
          expression: "/[A-Z]/.test(value)",
          text: "Password must contain at least one uppercase letter.",
        },
        {
          type: "expression",
          expression: "/[a-z]/.test(value)",
          text: "Password must contain at least one lowercase letter.",
        },
        {
          type: "expression",
          expression: "/\\d/.test(value)",
          text: "Password must contain at least one digit.",
        },
      ],
    },
    {
      name: "confirmPassword",
      placeHolder: "Confirm your password",
      title: "Confirm your password:",
      type: "text",
      inputType: "password",
      isRequired: true,
      validators: [
        {
          type: "expression",
          expression: "value === data['password']",
          text: "Passwords do not match.",
        },
      ],
    },
    {
      type: "html",
      name: "passwordMessage",
      html: '<div id="passwordMessage"></div>',
    },
  ],
};

export default surveyJson;
