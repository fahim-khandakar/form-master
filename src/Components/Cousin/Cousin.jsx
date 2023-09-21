import Friend from "../Friend/Friend";

const Cousin = ({ name }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {name === "Sohana" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
