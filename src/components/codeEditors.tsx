import { useState } from 'react'

const CodeEditor = (props) => {
    const [text, setText] = useState('')
  return (
    <div className="border w-[33%] rounded-lg">
        <div className="my-5">
            {props.name}
        </div>

        {/* <textarea className="w-full px-4 py-3 border-none" value={text} onChange={e => console.log(e.target.value)}></textarea> */}
        {/* <textarea className="w-full px-4 py-3 border-none" value={props.value} onChange={e => props.handleChange(e.target.value)}></textarea> */}
        <input className="w-full px-4 py-3 border-none" value={props.value} onChange={e => props.handleChange(e.target.value)} />
    </div>
  )
}

export default CodeEditor