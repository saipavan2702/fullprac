import { setAccount } from "./store.js";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../main.jsx";

const Reg = () => {
  const account = useSelector((state) => state.auth.account);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    persistor.purge("persist:auth");
  };

  const onChange = (event) => {
    dispatch(
      setAccount({ ...account, [event.target.name]: event.target.value })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={onChange}
          value={account.username}
        />
        <input
          type="text"
          name="email"
          onChange={onChange}
          value={account.email}
        />
        <input
          type="text"
          name="password"
          onChange={onChange}
          value={account.password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Reg;
