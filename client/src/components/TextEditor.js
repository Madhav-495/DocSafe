import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
const TextEditor = () => {
  const [value, setValue] = useState('');
  const handleChange = (newValue) => {
    setValue(newValue); 
  };
  return (
    <div>
      {/* create custome text-editor according to you  */}
      <Editor
        height="50vh"
        width="50%"
        theme="vs-dark"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
export default TextEditor;
