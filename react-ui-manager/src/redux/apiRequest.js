// handle api call truyền thông tin vào redux
import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./authSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/user/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/dashboard");
  } catch (err) {
    dispatch(loginFailed());
    console.log(user);
  }
};
