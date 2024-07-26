import axios from "axios";
import React from "react";
import ToastMassage from "../Helper/ToastMassage";
import { useDispatch } from "react-redux";

import LoginSupportHook from "./Login.Support.Hook";
import UseAxios from "./UseAxios";

/**
 *
 * @param {Object} obj
 */

export default async function useLoginSupport(obj) {
  const instance= UseAxios()
  const data = await instance.post("/api/user/login", obj);
  ToastMassage(data.data);


  return await data.data.user
}
