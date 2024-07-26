import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { word } from "../TextData/TextData";
import axios from "axios";
import GetLocal from "../components/Helper/GetLocal";
import SetLoacl from "../components/Helper/SetLocal";

import { toast } from "react-toastify";
import UseAxios from "../components/CustomHooks/UseAxios";

const instance = UseAxios();
const userDetailse = GetLocal("user") ? GetLocal("user") : {};
export const GetUserSkill = createAsyncThunk("getUserSkill", async (userId) => {
  if (userId) {
    const data = await instance.put(`/api/skill/${userId}`);
    return data.data.data;
  }
});
export const GetUserResult = createAsyncThunk("user-skill", async () => {
  const result = await instance.get("/api/skill/data");

  return result.data.data;
});
const initialState = {
  time: 0,
  wpm: 0,
  word: [],
  stopEvery: false,
  details: {},
  reset: false,
  mode: {},
  text: "",
  user: userDetailse,
  userSkill: {},
  usersResult: [],
  showLoader:false
};

function GiveParagraph(text) {
  if (text == "easy") {
    const randomNumber = Math.floor(Math.random() * word.easy.length);
    return word.easy[randomNumber];
  } else if (text == "normal") {
    const randomNumber = Math.floor(Math.random() * word.normal.length);
    return word.normal[randomNumber];
  } else {
    const randomNumber = Math.floor(Math.random() * word.hard.length);
    return word.hard[randomNumber];
  }
}
const data = createSlice({
  name: "data",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(GetUserSkill.fulfilled, (state, action) => {
      state.userSkill = action.payload;
    });
    builder.addCase(GetUserResult.fulfilled, (state, action) => {
      state.usersResult = action.payload;
    });
  },
  reducers: {
    getTime: (state, action) => {
      console.log(action.payload);
      state.time = action.payload;
    },
    makeWpm: (state, action) => {
      state.details = action.payload;
    },
    GetWord: (state, action) => {
      state.word.push(action.payload);
    },
    StopEvery: (state, action) => {
      state.stopEvery = action.payload;
    },
    ResetTester: (state, action) => {
      state.word = [];
      state.reset = action.payload;
    },
    SetMode: (state, action) => {
      state.mode = action.payload;
      state.text = GiveParagraph(action.payload?.test);
    },

    useLogin: (state, action) => {
      state.user = action.payload;
   
      SetLoacl("user", action.payload);
    },
    LogOut: (state, action) => {
      state.user = {};
      localStorage.removeItem("user");
      toast.success("Logout successfull");
    },
    useUpdateUser: (state, action) => {
      const user = { ...state.user, ...action.payload };

      state.user = user;

      SetLoacl("user", user);
    },
    setLoaderShow: (state, action) => {
      state.showLoader=action.payload
    }
  },
});

export const {
  getTime,
  makeWpm,
  GetWord,
  StopEvery,
  ResetTester,
  SetMode,
  useLogin,
  LogOut,
  useUpdateUser,
  setLoaderShow
} = data.actions;
export default data;
