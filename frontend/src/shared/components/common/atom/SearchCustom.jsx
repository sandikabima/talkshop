import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


const SearchCustom = ({ value, onChange }) => {
    return (
        <div className="relative">
            <Search
                size={20}
                className="text-[#89868D] absolute left-3 top-1/2 transform -translate-y-1/2"
            /><Input
                placeholder={"Search"}
                className={"pl-10 bg-white"}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchCustom

