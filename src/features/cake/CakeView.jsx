import { useSelector } from "react-redux";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <button>order a cake</button>
      <button>restock cakes</button>
    </div>
  );
}
export default CakeView;
