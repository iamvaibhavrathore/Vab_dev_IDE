import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Initial state define
export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "This is html code",
    css: "This is css code",
    javascript: "This is js code",
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },

    updateCodeValue: (
      state,
      action: PayloadAction<string>
    ) => {
    //   const { code, language } = action.payload;
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage,updateCodeValue } =
  compilerSlice.actions;