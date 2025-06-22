import { Pencil, Trash } from "lucide-react";
import IconButton from "../common/atom/IconButton";


const RowAction = ({ onEdit, onDelete }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <IconButton icon={Pencil} size={18} className={"bg-neutral-900 text-white hover:bg-neutral-700"} onClick={onEdit} />
            <IconButton icon={Trash} size={18} className={"bg-red-500 text-white hover:bg-red-400"} onClick={onDelete} />
        </div>
    )
}

export default RowAction