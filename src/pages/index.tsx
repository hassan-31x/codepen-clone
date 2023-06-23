import { useState, useEffect, useRef } from 'react'
import CodeEditor from '../components/codeEditors'
import Navbar from '../components/Navbar'
import NewEditor from '../components/NewEditor'
import Head from 'next/head'
// import CodeEditor from '@/components/codeEditor'


export default function Home() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const iframeRef = useRef(null);
  const handleIframeError = (event) => {
    // const errorMessage = event.message;
    // console.error('Error in the iframe:', errorMessage);
    console.log('hellow')
    // Handle the error as needed
  };

  
  useEffect(() => {
    const iframe = iframeRef.current;
    console.log(iframe)
    iframe.contentWindow.addEventListener('error', handleIframeError);

    // return () => {
    //   iframe.contentWindow.removeEventListener('mouseup', handleIframeError);
    // };
  }, []);


  return (
    <div>
      <Head>
        <title>Code Editor</title>
        <link rel="icon" href="/title-logo.png" type="image/png" sizes="32x32" />
        {/* <script>window.global = window;</script> */}
      </Head>


      <div className='min-h-screen flex flex-col scrollbar scrollbar-thumb-red-600'>
        <Navbar />

        <main className='flex flex-col flex-grow'>

          <div className='upper flex justify-between px-3 pt-1 pb-5 bg-black'>
            <NewEditor language='xml' name='HTML' value={html} onChange={setHtml} />
            <NewEditor language='css' name='CSS' value={css} onChange={setCss} />
            <NewEditor language='javascript' name='JavaScript' value={js} onChange={setJs} />
          </div>

          <div className="lower h-[500px]">
            <iframe
              srcDoc={`<html>
              <body style='margin-top: 200px;'>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
              </html>`} 
              title='output' 
              className='w-full h-full'
              // sandbox='allow-scripts' //for security purposes (commented out in order to show console errors)
              // width='100%' height='100%' 
              ref={iframeRef} />
          </div>

        </main> 
      </div>
    </div>
  )
}
