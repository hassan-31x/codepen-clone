import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import NewEditor from "@/components/NewEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

import "./App.css";

export default function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const iframeRef = useRef(null);
  const handleIframeError = (event: any) => {
    // const errorMessage = event.message;
    // console.error('Error in the iframe:', errorMessage);
    console.log("hellow");
    // Handle the error as needed
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    console.log(iframe);
    iframe?.contentWindow?.addEventListener("error", handleIframeError);

    // return () => {
    //   iframe.contentWindow.removeEventListener('mouseup', handleIframeError);
    // };
  }, []);

  return (
    <div>
      <div className="min-h-screen flex flex-col scrollbar scrollbar-thumb-red-600">
        <Navbar />

        <ResizablePanelGroup
          direction="vertical"
          className="!h-[calc(100vh-4rem)] rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup
              direction="horizontal"
              className="px-3 pt-1 pb-5 bg-black"
            >
              <ResizablePanel defaultSize={33}>
                <NewEditor
                  language="xml"
                  name="HTML"
                  value={html}
                  onChange={setHtml}
                />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={33}>
                <NewEditor
                  language="css"
                  name="CSS"
                  value={css}
                  onChange={setCss}
                />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={33}>
                <NewEditor
                  language="javascript"
                  name="JavaScript"
                  value={js}
                  onChange={setJs}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <iframe
              srcDoc={`<html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
              </html>`}
              title="output"
              className="w-full h-full"
              // sandbox='allow-scripts' //for security purposes (commented out in order to show console errors)
              ref={iframeRef}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
