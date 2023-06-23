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
    return <div>Loading CodeMirror...</div>;
  }

  const CodeMirror = require('codemirror');
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/base16-dark.css');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/css/css');
  require('codemirror/addon/edit/closebrackets');
  const { Controlled: ControlledEditor } = require('react-codemirror2');

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className='w-[33%] h-full flex flex-col items-start'>
      <div className='bg-[#151515] text-gray-400 flex items-center gap-1 px-3 text-xs lg:text-md lg:font-semibold border-t-2 border-gray-400 py-2'><span className={`text-black text-xs w-5 h-5 flex items-center justify-center rounded-md ${name === 'HTML' ? 'bg-red-500' : name === 'CSS' ? 'bg-blue-500' : 'bg-yellow-400'}`}>{name === 'HTML' ? '/' : name === 'CSS' ? '#' : '()'}</span>{name}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code w-full text-sm flex-grow scrollbar scrollbar-thumb-pink-500"
        style={{fontFamily: 'Source Code Pro'}}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'base16-dark',
          lineNumbers: true,
          autoCloseBrackets: true
        }}
      />
    </div>
  );
};

export default NewEditor;
