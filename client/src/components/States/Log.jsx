import { setLogIn } from "./otherreducer.js";
import { useDispatch, useSelector } from "react-redux";

const Log = () => {
  const logIn = useSelector((state) => state.other.logIn);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("persist:auth");
  };

  const onChange = (event) => {
    dispatch(setLogIn({ ...logIn, [event.target.name]: event.target.value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={onChange}
          value={logIn.email}
        />
        <input
          type="text"
          name="password"
          onChange={onChange}
          value={logIn.password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Log;
