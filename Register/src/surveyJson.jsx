const surveyJson = {
  elements: [
    {
      name: "firstName",
      title: "Enter your first name:",
      type: "text",
      isRequired: true,
    },
    {
      name: "middleName",
      title: "Enter your middle name:",
      type: "text",
      isRequired: true,
    },
    {
      name: "lastName",
      title: "Enter your last name:",
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
      title: "Enter your phone country code:",
      type: "text",
      isRequired: true,
    },
    {
      name: "phoneNumber",
      title: "Enter your phone number:",
      type: "text",
      isRequired: true,
    },
    {
      name: "address",
      title: "Enter your address:",
      type: "text",
      isRequired: true,
    },
    {
      name: "email",
      title: "Enter your email:",
      type: "text",
      isRequired: true,
      validators: [
        {
          type: "regex",
          regex: "@",

          text: "Enter a valid email address",
        },
        {
          type: "minlength", // Add a custom validator for minimum length
          min: 8, // Set your desired minimum length
          text: "Email must be at least 8 characters",
        },
      ],
    },
    {
      name: "confirmEmail",
      title: "Confirm your email:",
      type: "text",
      isRequired: true,
    },

    {
      name: "password",
      title: "Enter your password:",
      type: "text", // Change this to "password" if you're using a password input
      inputType: "password", // survey-react-ui-specific property for input type
      isRequired: true,
      validators: [
        {
          type: "text",
          minLength: 8,
        },
      ],
    },
    {
      name: "confirmPassword",
      title: "Confirm your password:",
      type: "text", // Change this to "password" if you're using a password input
      inputType: "password", // survey-react-ui-specific property for input type
      isRequired: true,
      validators: [
        {
          type: "text",
          minLength: 8,
        },
      ],
    },
  ],
};

export default surveyJson;
