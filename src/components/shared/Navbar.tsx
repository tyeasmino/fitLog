"use client";

import Logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export default function Navbar() {
    const { todaysPlan, saveForLater } = useContext(WorkoutsContext);
    const pathname = usePathname();

    const isWorkoutsActive = pathname.startsWith("/workouts");

    const isMyPlanActive = pathname.startsWith("/my-plans");

    return (
        <div className="navbar border-b border-[#222630] bg-[#0D0F13] shadow-sm md:px-10">

            {/* Mobile */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <Image src={Logo} alt="Logo" width={20} />
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-[#15171D] p-2 text-[#9CA3AF] shadow"
                    >
                        <li
                            className={
                                isWorkoutsActive
                                    ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                                    : ""
                            }
                        >
                            <Link href="/workouts">Workouts</Link>
                        </li>

                        <li
                            className={
                                isMyPlanActive
                                    ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                                    : ""
                            }
                        >
                            <Link href="/my-plans">My Plan</Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Logo */}
                <Link
                    href="/"
                    className="hidden items-center gap-4 text-xl lg:flex"
                >
                    <Image src={Logo} alt="Logo" />
                    <span className="text-lg font-bold uppercase text-white">
                        fitlog
                    </span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#9CA3AF]">

                    <li
                        className={
                            isWorkoutsActive
                                ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                                : ""
                        }
                    >
                        <Link href="/workouts">Workouts</Link>
                    </li>

                    <li
                        className={
                            isMyPlanActive
                                ? "rounded-full bg-[#1A2312] text-[#C2F800]"
                                : ""
                        }
                    >
                        <Link href="/my-plans">My Plan</Link>
                    </li>

                </ul>
            </div>

            {/* Right */}
            <div className="navbar-end flex gap-4 text-[#9CA3AF] md:gap-6">

                <Link
                    href="/my-plans"
                    className="flex gap-2 text-sm text-white md:text-base"
                >
                    Plan
                    <span className="rounded-full bg-[#C2F800] px-1.5 text-black md:px-2">
                        {todaysPlan.length}
                    </span>
                </Link>

                <Link
                    href="/my-plans"
                    className="flex gap-2 text-sm md:text-base"
                >
                    Saved
                    <span className="rounded-full border border-[#2D313B] px-1.5 md:px-2">
                        {saveForLater.length}
                    </span>
                </Link>

            </div>
        </div>
    );
}
