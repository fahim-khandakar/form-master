import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, passRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" />
        <br />
        <input ref={passRef} type="password" name="pass" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
