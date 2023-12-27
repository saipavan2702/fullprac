import { setAccount } from "./store.js";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
  const account = useSelector((state) => state.auth.account);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (event) => {
    console.log(account.username);
    dispatch(
      setAccount({ ...account, [event.target.name]: event.target.value })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={onChange} />
        <input type="text" name="email" onChange={onChange} />
        <input type="text" name="password" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// const store = configureStore({
//     name: "auth",
//     reducer: {
//       auth: authReducer,
//     },
//   });

export default Redux;
