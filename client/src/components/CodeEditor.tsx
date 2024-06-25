import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {
  githubLight,
  githubLightInit,
  githubDark,
  githubDarkInit,
} from "@uiw/codemirror-theme-github";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function CodeEditor() {
    //language choose 
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlices.currentLanguage
  );
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage(currentLanguage)!]} // ! -> indicates that this is not null
      onChange={onChange}
      theme={githubDarkInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
      })}
    />
  );
}

export default CodeEditor;
