import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
const store=configureStore(
    {

        reducer:{
            storeReducer:Reducer.dataslice,
            selectedIdReducer:Reducer.selectedIdslice
        }
    }
);
export default store;