import { useDispatch, useSelector } from "react-redux";
import { ordered,restocked } from "./iceSlice";
function IceView() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream- {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>order iceCream</button>
      <button onClick={() => dispatch(restocked(4))}>restock  iceCream</button>
    </div>
  );
}
export default IceView;
