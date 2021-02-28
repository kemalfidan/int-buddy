import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another


const CodePrettier = (props) => {
  
  let code, setCode;
  if ("state" in props) {
    [code, setCode] = React.useState(
      props.state.yourAnswer
    );
  } else {
    [code, setCode] = React.useState(
      props.children
    );
  }
  return (
     <Editor
      value={code}
      onValueChange={(code) => {setCode(code); if ("state" in props) props.state.yourAnswer = code}}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
      disabled={props.disabled}
    />
  );
}

export default CodePrettier;