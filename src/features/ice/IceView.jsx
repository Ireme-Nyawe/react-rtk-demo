import { useSelector } from "react-redux";
function IceView() {
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
    return (
      <div>
        <h2>Number of cakes- {numOfIceCream}</h2>
        <button>order a cake</button>
        <button>restock cakes</button>
      </div>
    );
  }
  export default IceView;
  