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
    html: `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VABTHOR RCE</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="landing-page">
        <h1 class="title">VABTHOR RCE</h1>
        <p class="subtitle">Revolutionizing Creative Experiences</p>
        <button class="cta-button" id="exploreButton">Explore More</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,

    css: `
/* Reset default styles */
body, h1, p, button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #1f4037, #99f2c8);
    overflow: hidden;
    margin: 0;
}

.landing-page {
    text-align: center;
    color: white;
    animation: fadeIn 2s ease-in-out;
}

.title {
    font-size: 3rem;
    margin-bottom: 20px;
    animation: slideIn 1s ease-out;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    animation: slideIn 1s ease-out 0.5s;
}

.cta-button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    background-color: rgb(24 24 27);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    animation: slideIn 1s ease-out 1s;
}

.cta-button:hover {
    background-color: #1f4037;
    transform: scale(1.1);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
    `,


    javascript: `
document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('exploreButton');

    exploreButton.addEventListener('click', () => {
        alert('Explore More button clicked!');
    });
});
    `,
    
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

    updateFullCode:(state, action:PayloadAction<CompilerSliceStateType["fullCode"]>)=>{
      state.fullCode = action.payload;
    }
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage,updateCodeValue, updateFullCode } =
  compilerSlice.actions;