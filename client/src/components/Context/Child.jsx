import { useContext } from "react";
import { Subscribe } from "./Context";

const Child = () => {
  const { edit, setEdit } = useContext(Subscribe);
  return (
    <div>
      {edit === false ? "Hi" : "Hello"}
      <button onClick={() => setEdit(!edit)}>Click me</button>
    </div>
  );
};

export default Child;
