
import { Controlled as ControlledEditor } from "react-codemirror2";

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/base16-light.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/addon/edit/closebrackets'
import { useTheme } from "./theme-provider";

type NewEditorProps = {
  language: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const NewEditor = ({
  language,
  name,
  value,
  onChange
}: NewEditorProps) => {

  const { theme } = useTheme()

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const COLORS = {
    HTML: 'red-500',
    CSS: 'blue-500',
    JavaScript: 'yellow-400'
  }

  return (
    <div className='w-full h-full flex flex-col items-start'>
      <div className='bg-[#151515] text-gray-400 flex items-center gap-1 px-3 text-xs lg:text-md lg:font-semibold border-t-2 border-gray-400 py-2'>
        <span className={`text-black text-xs w-5 h-5 flex items-center justify-center rounded-md bg-${COLORS[name]}`}>{name === 'HTML' ? '/' : name === 'CSS' ? '#' : '()'}</span>
        {name}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code w-full !h-full text-sm scrollbar scrollbar-thumb-pink-500"
        style={{fontFamily: 'Source Code Pro'}}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: theme === 'dark' ? 'base16-dark' : 'base16-light',
          lineNumbers: true,
          autoCloseBrackets: true
        }}
      />
    </div>
  );
};

export default NewEditor;
