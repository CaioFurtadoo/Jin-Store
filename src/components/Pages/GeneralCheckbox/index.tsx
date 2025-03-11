interface CheckboxProps {
    text: string;
}

export const GeneralCheckbox: React.FC<CheckboxProps> = ({ text }) => {
    const id = `checkbox-${text.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={id}
                className="peer opacity-0 absolute w-0 h-0"  // Aqui, escondemos visualmente o input, mas ele ainda é interativo
            />
            <label
                htmlFor={id}
                className="transition-all duration-300 shadow-sm w-4 h-4 border border-gray-300 rounded-sm bg-white cursor-pointer flex items-center justify-center peer-checked:bg-[#634C9F] peer-checked:inset-shadow-sm"
            >
                <span className="peer-checked:text-[#9cb7f1] text-white text-[9px]">✔</span>
            </label>
            <label htmlFor={id} className="text-sm cursor-pointer">{text}</label>
        </div>
    );
};
