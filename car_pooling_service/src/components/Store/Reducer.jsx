import { createSlice } from "@reduxjs/toolkit";


const initialState = {
department: "",
email: "",
encodedImage: null,
firstName: "",
lastName: "",
licenceId: null,
password: "",
phoneNumber: "",
registerNumber: null,
verificationCode: null,
verified: false,
yearOfStudy: "",
};
const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.department = action.payload.department;
      state.email = action.payload.email;
      state.encodedImage = action.payload.encodedImage;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.licenceId = action.payload.licenceId;
      state.password = action.payload.password;
        state.phoneNumber = action.payload.phoneNumber;
        state.registerNumber = action.payload.registerNumber;
        state.verificationCode = action.payload.verificationCode;
        state.verified = action.payload.verified;
        state.yearOfStudy = action.payload.yearOfStudy;
        
    },
  },
});

const initialidState = {
  idSelected: 1,
};

const selectedIdSlice = createSlice({
  name: "selectedid",
  initialState: initialidState,
  reducers: {
    setIdselected: (state, action) => {
      state.idSelected = action.payload;
    },
  },
});

export const { setIdselected } = selectedIdSlice.actions;
export const { setLogin } = slice.actions;
export default {
  Loginslice: slice.reducer,
  selectedIdslice: selectedIdSlice.reducer,
};
