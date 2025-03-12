import { GeneralInput } from "@/components/Pages/GeneralInput";
import { PagesText } from "@/components/Pages";
import Link from "next/link";
import { GeneralCheckbox } from "@/components/Pages/GeneralCheckbox";


const Login = () => {
    return (
        <div>
            <PagesText category="" before="Home" actual="Login"/>
            <div className="mx-[280px] border-t border-[#E5E7EB] h-[70vh] flex justify-center items-center ">
                <form className="flex flex-col w-[480px]  text-[#030712] gap-5">
                    <div className=" mb-4 flex items-center justify-center gap-7 font-semibold text-[28px] text-[#111827]">
                        <Link className="hover:translate-y-[-8px] transition-all duration-300" href="/login">Login</Link>
                        <Link className="text-[#9CA3AF] hover:translate-y-[-8px] transition-all duration-300" href="/register">Register</Link>
                    </div>
                    <p className="text-[13px] flex justify-center">If you have an account, sign in with your username or email address.</p>
                    <GeneralInput padding="p-3" forLabel="user" inputType="text" labelText="Username or email address *"/>
                    <GeneralInput padding="p-3" forLabel="password" inputType="password" labelText="Password *"/>
                    <div className="flex justify-between items-center">
                        <GeneralCheckbox text="Remember me"/>
                        <p className="text-[13px] text-[#1D4ED8] hover:border-b hover:border-[#1D4ED8] cursor-pointer">Lost your password?</p>
                    </div>
                    <button type="submit" className="cursor-pointer mt-1.5 mb-15 bg-[#634C9F] py-[14px] text-white text-[14px] rounded-lg overflow-hidden flex relative z-30 justify-center items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 before:h-[100%] before:bg-[#39245F] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;