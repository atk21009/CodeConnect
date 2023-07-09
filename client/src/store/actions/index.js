import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (loginValues) => async (dispatch) => {
  const res = await axios.post("/auth/login", loginValues);
  if (res) {
    window.location.href = "/dashboard";
  } else {
    window.location.href = "/login";
  }
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signup = (signupValues) => async (dispatch) => {
  const res = await axios.post("/auth/signup", signupValues);
  if (res) {
    window.location.href = "/dashboard";
  } else {
    window.location.href = "/login";
  }
  dispatch({ type: FETCH_USER, payload: res.data });
};
