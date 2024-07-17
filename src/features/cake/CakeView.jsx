import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>order a cake</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>restock cakes</button>
    </div>
  );
}
export default CakeView;
