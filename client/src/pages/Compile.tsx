import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateFullCode } from "@/redux/slices/compilerSlices";
import { toast } from "sonner";


function Compile() {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/compiler/load", {
        urlId: urlId,
      });
      dispatch(updateFullCode(response.data.fullCode));
    } catch (error) {
      if (axios.isAxiosError(error)){
        if(error?.response?.status === 500){
          toast("Invalid URL, Default code loaded")
        }
      }
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <HelperHeader></HelperHeader>
        <CodeEditor></CodeEditor>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Compile;
