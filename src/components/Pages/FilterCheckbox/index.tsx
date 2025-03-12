"use client"

interface CheckboxProps {
    text: string
    checked?: boolean
    onChange: (checked: boolean) => void
}

export const FilterCheckbox: React.FC<CheckboxProps> = ({ text, checked, onChange }) => {
    return (
        <div className="flex items-center gap-3 group hover:scale-[102%] transition-all">
            <input
                type="checkbox"
                id={text}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="peer hidden"
            />
            <label
                htmlFor={text}
                className={`transition-all duration-300 shadow-sm w-4 h-4 border border-gray-300 rounded-sm bg-white cursor-pointer flex items-center justify-center peer-checked:bg-[#634C9F] peer-checked:inset-shadow-sm group-hover:text-[#634C9F]`}
            >
                <span className="peer-checked:text-[#9cb7f1] text-white text-[9px]">✔</span>
            </label>
            <label htmlFor={text} className="text-sm cursor-pointer">{text}</label>
        </div>
    )
}
