

export const RunOut = () => {

    const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const pecasRestantes = getRandomNumber(15, 40);

    return(
        <div className="flex flex-col gap-1.5">
            <p className="text-[11px] text-[#9CA3AF]">This product is about to run out</p>
            <div className="w-[100%] h-[6px] bg-gradient-to-r from-[#FFD200] to-[#DC2626]"></div>
            <p className="text-[12px] text-[#6B7280]">avaliable only: <strong className="text-[16px] font-bold text-[#030712]">{pecasRestantes}</strong></p>
        </div>
    )
}