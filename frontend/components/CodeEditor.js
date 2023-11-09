// frontend/components/CodeEditor.js
import React from "react";

const CodeEditor = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "100%", height: "200px" }}
    />
  );
};

export default CodeEditor;
