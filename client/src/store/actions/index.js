import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (loginValues) => async (dispatch) => {
  await axios
    .post("/auth/login", loginValues)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .then((data) => {
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error);
      document.querySelector(".error").innerHTML =
        "Incorrect Email or Password";
    });
};

export const signup = (signupValues) => async (dispatch) => {
  await axios
    .post("/auth/signup", signupValues)
    .then((res) => {
      console.log("res", res);
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .then((data) => {
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error);
    });
};
