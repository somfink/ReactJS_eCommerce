import { useContext, useEffect } from "react";
import CheckoutFormContext from "../../../store/CheckoutFormContext/CheckoutFormContext";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.scss";
import CheckoutSummaryProducts from "./CheckoutSummaryProducts";

const CheckoutSummary = ({ onClick, onBackClick }) => {

  useEffect(() => {
    window.scrollTo({top: 0, left:0, behavior: 'smooth'});
  }, []);

  const checkoutFormCtx = useContext(CheckoutFormContext);
  const userFullName = `${checkoutFormCtx.firstName.value} ${checkoutFormCtx.lastName.value}`;
  const userPhoneNum = `${checkoutFormCtx.phoneNumber.value}`;
  const userEmail = `${checkoutFormCtx.email.value}`;
  const userStreetAddress = `${checkoutFormCtx.street.value}`;
  const userPostalAndCity = `${checkoutFormCtx.postal.value}, ${checkoutFormCtx.city.value}`;
  const userStateAndCountry = `${checkoutFormCtx.state.value}, ${checkoutFormCtx.country.value}`;
  const orderInstructions = `${checkoutFormCtx.instructions}`;

  return (
    <div className="checkoutSummary">
      <h3 className="checkoutSummary-title">Summary</h3>
      <ul className="checkoutSummary-list">
        <li className="checkoutSummary-items">
          <h4 className="checkoutSummary-items__heading">Full Name:</h4>
          <p className="checkoutSummary-items__content">{userFullName}</p>
        </li>
        <li className="checkoutSummary-items">
          <h4 className="checkoutSummary-items__heading">Phone Number:</h4>
          <p className="checkoutSummary-items__content">{userPhoneNum}</p>
        </li>
        <li className="checkoutSummary-items">
          <h4 className="checkoutSummary-items__heading">Email:</h4>
          <p className="checkoutSummary-items__content">{userEmail}</p>
        </li>
        <li className={`checkoutSummary-items ${orderInstructions.length <= 0 ? 'mb-lg' : ''}`}>
          <h4 className="checkoutSummary-items__heading">Delivery Address:</h4>
          <p className="checkoutSummary-items__content">{userStreetAddress}</p>
          <p className="checkoutSummary-items__content">{userPostalAndCity}</p>
          <p className="checkoutSummary-items__content">
            {userStateAndCountry}
          </p>
        </li>
        {orderInstructions.length > 0 && (
          <li className="checkoutSummary-items mb-lg">
            <h4 className="checkoutSummary-items__heading">
              Order Instructions:
            </h4>
            <p className="checkoutSummary-items__content">
              {orderInstructions}
            </p>
          </li>
        )}
        <CheckoutSummaryProducts />
      </ul>
      <div className="checkoutSummary-btn">
        <Button onClick={onBackClick}>Go Back</Button>
        <Button onClick={onClick}>Go To Payment</Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
