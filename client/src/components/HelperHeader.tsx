import { Button } from "./ui/button";
import { ShareIcon, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlices";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";

function HelperHeader() {
  const fullCode = useSelector((state:RootState)=>state.compilerSlices.fullCode)
  //creating route
  const handleSaveCode = async ()=>{
    try{
      const response = await axios.post("http://localhost:4000/compiler/save",{
        fullCode: fullCode,
      });
      console.log(response.data);
    }
    catch(error){
      handleError(error);
    }
  }

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlices.currentLanguage
  );
  return (
    <div className="__helper_header h-[50px] bg-zinc-800 p-2 text-zinc-100 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          onClick={handleSaveCode}
          className="bg-green-500 hover:bg-green-600 text-zinc-100"
          variant="default"
        >
          <Save size={16} className="flex gap-1 justify-center items-center" />
          Save
        </Button>
        <Button
          variant="default"
          className=" flex gap-1 justify-center items-center bg-zinc-900 text-zinc-100"
        >
          <ShareIcon size={16} />
          Share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small>Current Language:</small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                // value as -> CompilerSliceStateType me se koi value ho skti h
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[120px] bg-zinc-900 focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default HelperHeader;
