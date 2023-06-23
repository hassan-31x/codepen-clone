import { useState } from 'react'
import CodeEditor from '../components/codeEditors'
import Navbar from '@/components/Navbar'
import NewEditor from '@/components/NewEditors'
import Head from 'next/head'
// import CodeEditor from '@/components/codeEditor'


export default function Home() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')


  return (
    <div>
      <Head>
        <title>Code Editor</title>
        {/* <script>window.global = window;</script> */}
      </Head>


      <div className='min-h-screen flex flex-col'>
        <Navbar />

        <main className='flex flex-col flex-grow'>

          <div className='upper flex-[1] flex justify-between px-3 pt-5 pb-2 gap-4 bg-amber-700'>
            {/* <CodeEditor name={'HTML'} value={html} handleChange={setHtml} />
            <CodeEditor name={'CSS'} value={css} handleChange={setCss} />
            <CodeEditor name={'JavaScript'} value={js} handleChange={setJs} /> */}
            <NewEditor language='xml' name='HTML' value={html} onChange={setHtml} />
            <NewEditor language='css' name='CSS' value={css} onChange={setCss} />
            <NewEditor language='javascript' name='JavaScript' value={js} onChange={setJs} />
          </div>

          <div className="lower flex-[1]">
            <iframe srcDoc={`<html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>`} title='output' sandbox='allow-scripts' frameBorder='0' width='100%' height='100%' />
          </div>

        </main> 
      </div>
    </div>
  )
}
