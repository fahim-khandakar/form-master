import { useContext } from "react";
import { AssetContext } from "../Granpa/Grandpa";

const Friend = () => {
  const asset = useContext(AssetContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>Has: {asset}</p>
    </div>
  );
};

export default Friend;
