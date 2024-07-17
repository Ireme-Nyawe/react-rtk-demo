import { useState } from "react";
import reactLogo from "./assets/react.svg";
import CakeView from "./features/cake/CakeView";
import "./App.css";
import IceView from "./features/ice/IceView";
import UserView from "./features/users/UserView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IceView />
      <UserView />
    </>
  );
}

export default App;
