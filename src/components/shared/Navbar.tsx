"use client"

import Logo from "@/assets/logo.png"
import { WorkoutsContext } from "@/context/WorkoutsContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export default function Navbar() {
    const { todaysPlan, saveForLater } = useContext(WorkoutsContext);
    return (
        <div className="navbar shadow-sm md:px-10 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Link href="/"><Image src={Logo} alt="Logo" width={20} /></Link>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-[#15171D] rounded-box z-1 mt-3 w-52 p-2 shadow  text-[#9CA3AF]">
                        <li className="bg-[#1A2312] text-[#C2F800] rounded-full"><Link href="/workouts">Workouts</Link></li>
                        <li><Link href="/my-plans">My Plan</Link></li>
                    </ul>
                </div>
                <Link href="/" className="text-xl hidden lg:flex gap-4">
                    <Image src={Logo} alt="Logo" />
                    <span className="text-white uppercase font-bold text-lg">fitlog</span>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#9CA3AF]">
                    <li className="bg-[#1A2312] text-[#C2F800] rounded-full"><Link href="/workouts">Workouts</Link></li>
                    <li><Link href="/my-plans">My Plan</Link></li>
                </ul>
            </div>
            <div className="navbar-end text-[#9CA3AF] flex gap-6">
                <Link href="#" className="flex gap-2 text-white text-sm md:text-base ">Plan <span className="bg-[#C2F800] px-1.5 md:px-2 rounded-full text-black">{todaysPlan.length}</span></Link>
                <Link href="#" className="flex gap-2 text-sm md:text-base">Saved <span className="border px-1.5 md:px-2 rounded-full border-[#2D313B]">{saveForLater.length}</span></Link>
            </div>
        </div>
    )
}
