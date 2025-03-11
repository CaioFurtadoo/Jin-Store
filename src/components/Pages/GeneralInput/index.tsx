
interface inputProps{
    forLabel: string;
    inputType: string;
    labelText: string;
    padding:string
}
export const GeneralInput: React.FC<inputProps> = ({forLabel, inputType, labelText,padding}) => {
    return(
        <label className="text-[13px] w-[100%] flex flex-col gap-1.5" htmlFor={forLabel}>{labelText}<input className={`border border-[#D1D5DB] ${padding}  rounded-lg  focus:outline-[#d1d2d3] focus:inset-shadow-sm focus:inset-shadow-[#d0d1d1] shadow-sm`} type={inputType} /></label>
    )
}