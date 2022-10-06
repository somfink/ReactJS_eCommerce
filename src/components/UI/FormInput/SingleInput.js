import "./SingleInput.scss";

const SingleInput = ({ id, type, label, onChange, isValid }) => {
  return (
    <div className="input">
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={isValid > 0 ? "invalid" : ""}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default SingleInput;
