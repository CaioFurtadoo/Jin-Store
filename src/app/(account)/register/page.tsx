import { GeneralInput } from "@/components/Pages/GeneralInput";
import { PagesText } from "@/components/Pages";
import Link from "next/link";


export const Register = () => {
    return (
        <div>
            <PagesText category="" before="Home" actual="Register"/>
            <div className="mx-[280px] border-t border-[#E5E7EB] h-[75vh] flex justify-center items-center">
                <form className="flex flex-col w-[480px]  text-[#030712] gap-5">
                    <div className=" mb-4 flex items-center justify-center gap-7 font-semibold text-[28px] text-[#111827]">
                        <Link className="text-[#9CA3AF] hover:translate-y-[-8px] transition-all duration-300" href="/login">Login</Link>
                        <Link className="hover:translate-y-[-8px] transition-all duration-300" href="/register">Register</Link>
                    </div>
                    <p className="text-[13px] flex justify-center text-center">There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.</p>
                    <GeneralInput padding="p-3" forLabel="user" inputType="text" labelText="Username *"/>
                    <GeneralInput padding="p-3" forLabel="email" inputType="email" labelText="Email address *"/>
                    <GeneralInput padding="p-3" forLabel="password" inputType="password" labelText="Password *"/>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="radio" className="flex items-center gap-1.5 text-[13px]" ><input name="user" type="radio" /> I am a customer</label>
                        <label htmlFor="radio" className="flex items-center gap-1.5 text-[13px]" ><input name="user" type="radio" /> I am a vendor</label>
                    </div>
                    <p className="text-[13px]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong className="text-[#1D4ED8] font-normal">privacy policy</strong>.</p>
                    <button type="submit" className="cursor-pointer mt-1.5 mb-15 bg-[#634C9F] py-[14px] text-white text-[14px] rounded-lg overflow-hidden flex relative z-30 justify-center items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 before:h-[100%] before:bg-[#39245F] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute">register</button>                   
                </form>
            </div>
        </div>
    )
}

export default Register;