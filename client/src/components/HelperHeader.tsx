import { Button } from "./ui/button";
import { ShareIcon, Save, Loader, FileCode2, Copy } from "lucide-react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { toast } from "sonner";

function HelperHeader() {
  //Disable share code for initial
  const [shareBtn, setShareBtn] = useState<boolean>(false);
  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, [urlId]);

  //handle loading
  const [saveLoading, setSaveLoading] = useState<boolean>(false);

  //nevigate user id
  const navigate = useNavigate();

  //creating route
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlices.fullCode
  );
  const handleSaveCode = async () => {
    setSaveLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
    }
  };

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
          disabled={saveLoading}
        >
          {saveLoading ? (
            <>
              <Loader className=" animate-spin" /> Saving
            </>
          ) : (
            <>
              <Save
                size={16}
                className="flex gap-1 justify-center items-center"
              />{" "}
              Save
            </>
          )}
        </Button>
        {/* Diaload Box */}

        {shareBtn && (
          <Dialog>
            <DialogTrigger className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 flex gap-1 justify-center items-center bg-zinc-900 text-zinc-100">
              {/*Share Button */}
              <ShareIcon size={16} />
              Share
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className=" flex gap-1 justify-center items-center">
                  <FileCode2 />
                  Share your code.{" "}
                </DialogTitle>
                <DialogDescription className=" flex flex-col gap-2">
                  <div className="__url flex gap-1">
                    <input
                      type="text"
                      disabled
                      className=" w-full p-2 rounded-md bg-slate-800 text-slate-400 select-none"
                      value={window.location.href}
                    />
                    <Button
                      variant={"outline"}
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          window.location.href
                        );
                        toast("URL Copied to your clipboard!");
                      }}
                    >
                      <Copy size={14} />
                    </Button>
                  </div>
                  <p className=" text-center">
                    Share this URL with your friends to collaborate.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
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
