import { useContext } from "react";
import { AssetContext } from "../Granpa/Grandpa";

const Special = () => {
  const asset = useContext(AssetContext);
  return (
    <div>
      <h2>Special</h2>
      <p>Has: {asset}</p>
    </div>
  );
};

export default Special;
