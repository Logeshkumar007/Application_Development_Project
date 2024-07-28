import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phn: "",
    country: "",
    district: "",
    state: ""
}
const slice=createSlice(
    {
        name:"login",initialState,reducers:{
            setLogin:(state,action)=>{
                state.email=action.payload.email;
                state.password=action.payload.password;
                state.firstname=action.payload.firstname;
                state.lastname=action.payload.lastname;
                state.phn=action.payload.phn;
                state.country=action.payload.country;
                state.district=action.payload.district;
                state.state=action.payload.state;
                }
        }
    }
)







const initialidState = {
  idSelected: 1
};


const selectedIdSlice = createSlice({
  name: "selectedid",
  initialState: initialidState,
  reducers: {
    setIdselected: (state, action) => {
      state.idSelected = action.payload;
    }
  }
});


export const { setIdselected } = selectedIdSlice.actions;
export const {setLogin}=slice.actions
export default { Loginslice:slice.reducer,selectedIdslice:selectedIdSlice.reducer } ;