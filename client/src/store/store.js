//this will create the global reducer it will hold all application

const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./auth-slice";




const store = configureStore({
    reducer : {
      auth :  authReducer

    }
})
export default store;