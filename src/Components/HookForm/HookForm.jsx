import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Hello");
  const passState = useInputState("hello world");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", passState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" /> */}
        <br />
        <input {...passState} type="password" name="pass" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
