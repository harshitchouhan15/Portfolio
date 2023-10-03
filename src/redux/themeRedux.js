import { createSlice } from "@reduxjs/toolkit";




const themeSlice =  createSlice({

    name:'theme',

    initialState:false,

    reducers:{
        toggleTheme : state=>true,
        exitDarkmode: state=>false
        
        }
    
})

 export const {toggleTheme,exitDarkmode} = themeSlice.actions
export default themeSlice.reducer

