import {configureStore } from "@reduxjs/toolkit"
import rootReducer from "./themeRedux"

const store = configureStore({
    reducer: {
        theme: rootReducer
    },
  });

  export default store