import { useState } from "react";

const StateFulForm = () => {
  const [pass, setPass] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass.length < 6) {
      setError("Password must be 6 character!");
    } else {
      setError("");
      console.log(name, pass);
    }
  };

  const changePass = (e) => {
    setPass(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={changeName} type="text" name="name" />
        <br />
        <input onChange={changePass} type="password" name="password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StateFulForm;
