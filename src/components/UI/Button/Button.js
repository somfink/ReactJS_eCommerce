import "./Button.scss";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
