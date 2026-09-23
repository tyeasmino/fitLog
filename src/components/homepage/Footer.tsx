import { FaDumbbell } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#090A0D] footer sm:footer-horizontal text-neutral-content items-center md:px-10 md:py-8">
            <aside className="grid-flow-col items-center">
                <FaDumbbell className="text-[#C2F800] text-lg" />
                <span className="text-white uppercase font-bold text-lg">fitlog</span>
            </aside>
            <nav className="text-[#6B7280] grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p>© {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
            </nav>
        </footer>
    )
}
