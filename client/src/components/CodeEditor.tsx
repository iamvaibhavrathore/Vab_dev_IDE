import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {
  githubDarkInit,
} from "@uiw/codemirror-theme-github";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlices";

function CodeEditor() {
    //language choose 
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlices.currentLanguage
  );


  const fullCode = useSelector(
    (state: RootState)=>state.compilerSlices.fullCode
  )

  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    // console.log("val:", typeof val);
    // setValue(val);
    dispatch(updateCodeValue(value))
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor"
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
