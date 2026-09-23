import Logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="navbar shadow-sm md:px-10 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Image src={Logo} alt="Logo" width={20} />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-[#15171D] rounded-box z-1 mt-3 w-52 p-2 shadow  text-[#9CA3AF]">
                        <li className="bg-[#1A2312] text-[#C2F800] rounded-full"><a>Workouts</a></li>
                        <li><a>My Plan</a></li>
                    </ul>
                </div>
                <a className="text-xl hidden lg:flex gap-4">
                    <Image src={Logo} alt="Logo" />
                    <span className="text-white uppercase font-bold text-lg">fitlog</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#9CA3AF]">
                    <li className="bg-[#1A2312] text-[#C2F800] rounded-full"><a>Workouts</a></li>
                    <li><a>My Plan</a></li>
                </ul>
            </div>
            <div className="navbar-end text-[#9CA3AF] flex gap-6">
                <Link href="#" className="flex gap-2 text-white text-sm md:text-base ">Plan <span className="bg-[#C2F800] px-1.5 md:px-2 rounded-full text-black">0</span></Link>
                <Link href="#" className="flex gap-2 text-sm md:text-base">Saved <span className="border px-1.5 md:px-2 rounded-full border-[#2D313B]">0</span></Link>
            </div>
        </div>
    )
}
