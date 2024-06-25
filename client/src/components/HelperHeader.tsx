import { Button } from "./ui/button";
import { ShareIcon, Save } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function HelperHeader() {
    return (
        <div className="__helper_header h-[50px] bg-zinc-800 p-2 text-zinc-100 flex justify-between items-center">
            <div className="__btn_container flex gap-1">
                <Button className="bg-green-500 hover:bg-green-600 text-zinc-100" variant="default">
                    <Save size={16} className="flex gap-1 justify-center items-center" />
                    Save
                </Button>
                <Button
                    variant='default'
                    className=" flex gap-1 justify-center items-center bg-zinc-900 text-zinc-100"
                >
                    <ShareIcon size={16} />
                    Share
                </Button>
            </div>
            <div className="__tab_switcher">
                <Select defaultValue="html">
                    <SelectTrigger className="w-[180px] bg-zinc-900 focus:ring-0">
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
