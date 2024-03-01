const InputAccessability = () => {
  return (
    <input
      type="text"
      id="username"
      name="username"
      autoComplete="new-password"
      aria-hidden="true"
      style={{ display: "none" }}
    ></input>
  );
};

export default InputAccessability;
