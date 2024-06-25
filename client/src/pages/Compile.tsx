import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"

function Compile() {
  return (
    <ResizablePanelGroup
    direction="horizontal">
    <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
        <HelperHeader></HelperHeader>
        <CodeEditor></CodeEditor>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}>
        right side
    </ResizablePanel>
  </ResizablePanelGroup>
  )
}

export default Compile