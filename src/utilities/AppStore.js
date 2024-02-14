import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
const ConfigStore = configureStore({
    reducer:{
        
       cart:Cartslice

    }
});
export default ConfigStore;