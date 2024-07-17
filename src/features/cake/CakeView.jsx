import { useDispatch, useSelector } from "react-redux";
import { ordered,restocked } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>order a cake</button>
      <button onClick={()=>dispatch(restocked(2))}>restock cakes</button>
    </div>
  );
}
export default CakeView;
