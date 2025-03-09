'use client'

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface ISelectProps<T> {
    options: {
        label: string | React.JSX.Element; value: T
    }[]
    value?: T
    setValue: (value: T) => void
    placeholder?: string
}
export function Select<T>({ value, options, setValue, placeholder }: ISelectProps<T>) {
    const [showOptions, setShowOptions] = useState(false)
    return (
        <div className="relative w-full" onClick={(e) => { setShowOptions(!showOptions) }} onMouseLeave={() => setShowOptions(false)}>
            {value ? <span className="flex items-center  w-full py-2 gap-2 px-3 rounded-lg justify-between">{options.find((option) => option.value == value)?.label} <ChevronDownIcon width={10} className="w-2  stroke-black-lighter-100" /></span> : <span className="flex items-center border w-full py-2 px-3 rounded-lg text-gray-400 border-slate-100">{placeholder ?? "Select an option"}</span>}
            {showOptions && <div className="absolute top-[100$] w-full flex-col bg-white flex animate-in  fade-in gap-0 z-50 rounded-lg overflow-hidden border border-slate-100 shadow shadow-slate-50">
                {
                    options.filter((option) => option.value != value).map((option, i) => (
                        <span
                            className="flex items-center border-b border-slate-50 w-full py-2 px-3 hover:bg-brand/5 transition-none"
                            key={i}
                            onClick={() => { setValue(option.value); setShowOptions(false) }}
                        >
                            {option.label}
                        </span>
                    ))
                }

            </div>}
        </div>
    )
}