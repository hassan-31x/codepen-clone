import { useEffect, useState } from 'react';

const NewEditor = ({
  language,
  name,
  value,
  onChange
}) => {
  const [isCodeMirrorLoaded, setIsCodeMirrorLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('codemirror').then(() => {
        setIsCodeMirrorLoaded(true);
      }).catch((error) => {
        console.error('Failed to load CodeMirror:', error);
      });
    }
  }, []);

  if (!isCodeMirrorLoaded) {
    // Return a placeholder or loading state
    return <div>Loading CodeMirror...</div>;
  }

  const CodeMirror = require('codemirror');
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/material.css');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/css/css');
  const { Controlled: ControlledEditor } = require('react-codemirror2');

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div>
      <div>{name}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper w-96"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default NewEditor;
