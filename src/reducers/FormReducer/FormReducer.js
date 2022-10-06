import { FORM_ACTION } from "./FormActionTypes";

export const FORM_INIT_STATE = {
  firstName: { value: null, isValid: false },
  lastName: { value: null, isValid: false },
  phoneNumber: { value: null, isValid: false },
  email: { value: null, isValid: false },
  street: { value: null, isValid: false },
  city: { value: null, isValid: false },
  state: { value: null, isValid: false },
  postal: { value: null, isValid: false },
  country: { value: null, isValid: false },
  instructions: '',
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTION.FIRST_NAME_INPUT:
      return {
        ...state,
        firstName: {
          value: action.firstName,
          isValid: action.firstNameIsValid,
        },
      };

    case FORM_ACTION.LAST_NAME_INPUT:
      return {
        ...state,
        lastName: {
          value: action.lastName,
          isValid: action.lastNameIsValid,
        },
      };

    case FORM_ACTION.PHONE_INPUT:
      return {
        ...state,
        phoneNumber: {
          value: action.phoneNumber,
          isValid: action.phoneIsValid,
        },
      };

    case FORM_ACTION.EMAIL_INPUT:
      return {
        ...state,
        email: { value: action.email, isValid: action.emailIsValid },
      };

    case FORM_ACTION.STREET_INPUT:
      return {
        ...state,
        street: { value: action.street, isValid: action.streetIsValid },
      };

    case FORM_ACTION.CITY_INPUT:
      return {
        ...state,
        city: { value: action.city, isValid: action.cityIsValid },
      };

    case FORM_ACTION.STATE_INPUT:
      return {
        ...state,
        state: { value: action.state, isValid: action.stateIsValid },
      };

    case FORM_ACTION.POSTAL_INPUT:
      return {
        ...state,
        postal: { value: action.postal, isValid: action.postalIsValid },
      };

    case FORM_ACTION.COUNTRY_INPUT:
      return {
        ...state,
        country: { value: action.country, isValid: action.countryIsValid },
      };

    case FORM_ACTION.INSTRUCTIONS_INPUT:
      return {
        ...state,
        instructions: action.instructions,
      };

    default:
      return FORM_INIT_STATE;
  }
};
