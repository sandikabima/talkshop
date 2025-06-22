import { NotebookPen } from "lucide-react"
import IconButton from "../common/atom/IconButton"
import SearchCustom from "../common/atom/SearchCustom"

const TableToolbar = ({value, onAdded, onChange}) => {
    return (
        <div className="flex items-center justify-between w-full bg-[#E7E7F4] p-2">
            <div>
                <IconButton icon={NotebookPen} size={16} onClick={onAdded} className={"bg-neutral-900 text-white hover:bg-neutral-700"}>Add</IconButton>
            </div>
            <div>
                <SearchCustom value={value} onChange={onChange}/>
            </div>
        </div>
    )
}

export default TableToolbar