const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="password" name="pass" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
