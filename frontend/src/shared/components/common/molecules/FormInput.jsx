import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import FormErrorMessage from "../atom/FormErrorMessage"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/shared/lib/utils";
import { useState } from "react"

const FormInput = ({ label, name, placeholder, type = "", value, onChange, error, componentType = "input", options = [] }) => {

    const renderComponent = () => {

        const [open, setOpen] = useState(false)


        switch (componentType) {
            case 'text':
                return (
                    <Input name={name} id={name} placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(name, e.target.value)} />
                )
            case 'select':
                return (
                    <Select value={value} onValueChange={(val) => onChange(name, val)}>
                        <SelectTrigger className={"w-full"}>
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )
            case 'select-search':
                return (
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {value
                                    ? options.find((framework) => framework.value === value)?.label
                                    : "Select options..."}
                                <ChevronsUpDown className="opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                            <Command>
                                <CommandInput placeholder="Searc options..." className="h-9" />
                                <CommandList className={"max-h-40 overflow-y-auto"}>
                                    <CommandEmpty>No framework found.</CommandEmpty>
                                    <CommandGroup>
                                        {options.map((framework) => (
                                            <CommandItem
                                                key={framework.value}
                                                value={framework.label}
                                                onSelect={() => {
                                                    onChange(name, framework.value)
                                                    setOpen(false)
                                                }}
                                            >
                                                {framework.label}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        value === framework.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                )
            default:
                return (
                    <Input name={name} id={name} placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(name, e.target.value)} />
                )
        }
    }

    return (
        <div className="grid w-full gap-1.5">
            <Label htmlFor={name}>{label}</Label>
            {renderComponent()}
            <FormErrorMessage message={error} />
        </div>
    )

}

export default FormInput