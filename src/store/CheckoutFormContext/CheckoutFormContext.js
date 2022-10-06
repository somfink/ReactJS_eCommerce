import React, { useReducer } from "react";
import { FORM_ACTION } from "../../reducers/FormReducer/FormActionTypes";
import {
  FormReducer,
  FORM_INIT_STATE,
} from "../../reducers/FormReducer/FormReducer";

const CheckoutFormContext = React.createContext({
  firstName: {},
  lastName: {},
  phoneNumber: {},
  email: {},
  street: {},
  city: {},
  state: {},
  postal: {},
  country: {},
  instructions: null,
  onGetFirstName: () => {},
  onGetLastName: () => {},
  onGetPhoneNum: () => {},
  onGetEmail: () => {},
  onGetStreet: () => {},
  onGetCity: () => {},
  onGetState: () => {},
  onGetPostal: () => {},
  onGetCountry: () => {},
  onGetInstructions: () => {},
});

export const CheckoutContextProvider = ({ children }) => {
  const [checkoutForm, dispatchCheckoutForm] = useReducer(
    FormReducer,
    FORM_INIT_STATE
  );

  const firstNameInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.FIRST_NAME_INPUT,
      firstName: e.target.value,
      firstNameIsValid: e.target.value.trim().length > 0,
    });
  };

  const lastNameInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.LAST_NAME_INPUT,
      lastName: e.target.value,
      lastNameIsValid: e.target.value.trim().length > 0,
    });
  };

  const phoneInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.PHONE_INPUT,
      phoneNumber: e.target.value,
      phoneIsValid: e.target.value.trim().length > 8,
    });
  };

  const emailInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.EMAIL_INPUT,
      email: e.target.value,
      emailIsValid: e.target.value.trim().includes("@"),
    });
  };

  const streetInputHandler = (e) => {
    const inputValue = e.target.value;
    const inputValueValidate = /\d/.test(inputValue);

    dispatchCheckoutForm({
      type: FORM_ACTION.STREET_INPUT,
      street: inputValue,
      streetIsValid: inputValue.trim().length > 1 && inputValueValidate,
    });
  };

  const cityInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.CITY_INPUT,
      city: e.target.value,
      cityIsValid: e.target.value.trim().length > 1,
    });
  };

  const stateInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.STATE_INPUT,
      state: e.target.value,
      stateIsValid: e.target.value.trim().length > 1,
    });
  };

  const postalInputHandler = (e) => {
    const inputValue = e.target.value;
    const inputValidation = inputValue.includes("-") && /\d/.test(inputValue);
    dispatchCheckoutForm({
      type: FORM_ACTION.POSTAL_INPUT,
      postal: inputValue,
      postalIsValid: inputValue.trim().length > 1 && inputValidation,
    });
  };

  const countryInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.COUNTRY_INPUT,
      country: e.target.value,
      countryIsValid: e.target.value.trim().length > 1,
    });
  };

  const instructionsInputHandler = (e) => {
    dispatchCheckoutForm({
      type: FORM_ACTION.INSTRUCTIONS_INPUT,
      instructions: e.target.value,
    });
    console.log(checkoutForm);
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        firstName: checkoutForm.firstName,
        lastName: checkoutForm.lastName,
        phoneNumber: checkoutForm.phoneNumber,
        email: checkoutForm.email,
        street: checkoutForm.street,
        city: checkoutForm.city,
        state: checkoutForm.state,
        postal: checkoutForm.postal,
        country: checkoutForm.country,
        instructions: checkoutForm.instructions,
        onGetFirstName: firstNameInputHandler,
        onGetLastName: lastNameInputHandler,
        onGetPhoneNum: phoneInputHandler,
        onGetEmail: emailInputHandler,
        onGetStreet: streetInputHandler,
        onGetCity: cityInputHandler,
        onGetState: stateInputHandler,
        onGetPostal: postalInputHandler,
        onGetCountry: countryInputHandler,
        onGetInstructions: instructionsInputHandler,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

export default CheckoutFormContext;
