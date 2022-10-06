import { useContext, useEffect } from "react";

import CheckoutFormContext from "../../../store/CheckoutFormContext/CheckoutFormContext";

import SingleInput from "../../UI/FormInput/SingleInput";
import Button from "../../UI/Button/Button";

import "./CheckoutForm.scss";

const CheckoutForm = ({ onClick, onBackClick }) => {
  const CheckoutFormCtx = useContext(CheckoutFormContext);

  useEffect(() => {
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);

  const isFormFilledCorrect =
    CheckoutFormCtx.firstName.isValid &&
    CheckoutFormCtx.lastName.isValid &&
    CheckoutFormCtx.phoneNumber.isValid &&
    CheckoutFormCtx.email.isValid &&
    CheckoutFormCtx.street.isValid &&
    CheckoutFormCtx.city.isValid &&
    CheckoutFormCtx.state.isValid &&
    CheckoutFormCtx.postal.isValid &&
    CheckoutFormCtx.country.isValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormFilledCorrect) {
      onClick();
      return;
    }
    alert("Fill correct all inputs below");
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="form-name">
        <h3>Full Name</h3>
        <div className="form-name__input">
          <SingleInput
            type={"text"}
            id={"first-name"}
            label={"First Name"}
            onChange={CheckoutFormCtx.onGetFirstName}
            isValid={CheckoutFormCtx.firstName.isValid}
          />
          <SingleInput
            type={"text"}
            id={"last-name"}
            label={"Last Name"}
            onChange={CheckoutFormCtx.onGetLastName}
            isValid={CheckoutFormCtx.lastName.isValid}
          />
        </div>
      </div>
      <div className="form-number">
        <h3>Phone Number</h3>
        <SingleInput
          type={"number"}
          id={"phone-number"}
          label={"Phone Number"}
          onChange={CheckoutFormCtx.onGetPhoneNum}
          isValid={CheckoutFormCtx.phoneNumber.isValid}
        />
      </div>
      <div className="form-email">
        <h3>E-mail</h3>

        <SingleInput
          type={"text"}
          id={"email"}
          label={"example@example.com"}
          onChange={CheckoutFormCtx.onGetEmail}
          isValid={CheckoutFormCtx.email.isValid}
        />
      </div>
      <div className="form-address">
        <h3>Delivery Address</h3>
        <div className="form-address__street">
          <SingleInput
            type={"text"}
            id={"street-address"}
            label={"Street Address"}
            onChange={CheckoutFormCtx.onGetStreet}
            isValid={CheckoutFormCtx.street.isValid}
          />
        </div>
        <div className="form-address__city">
          <SingleInput
            type={"text"}
            id={"city"}
            label={"City"}
            onChange={CheckoutFormCtx.onGetCity}
            isValid={CheckoutFormCtx.city.isValid}
          />
          <SingleInput
            type={"text"}
            id={"state"}
            label={"State / Province"}
            onChange={CheckoutFormCtx.onGetState}
            isValid={CheckoutFormCtx.state.isValid}
          />
        </div>
        <div className="form-address__country">
          <SingleInput
            type={"text"}
            id={"postal"}
            label={"Postal / Zip Code"}
            onChange={CheckoutFormCtx.onGetPostal}
            isValid={CheckoutFormCtx.postal.isValid}
          />
          <SingleInput
            type={"text"}
            id={"country"}
            label={"Country"}
            onChange={CheckoutFormCtx.onGetCountry}
            isValid={CheckoutFormCtx.country.isValid}
          />
        </div>
      </div>
      <div className="form-instructions">
        <h3>Special Instructions</h3>
        <textarea onChange={CheckoutFormCtx.onGetInstructions}></textarea>
      </div>
      <div className="form-btn">
        <Button onClick={onBackClick}>Go Back</Button>
        <Button type={"submit"} onClick={formSubmitHandler}>
          Go to Summary
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
