import Link from "next/link";

export default function EmptyList() {
    return (
        <div className="mt-4 flex min-h-82.5 flex-col items-center justify-center rounded-xl border border-dashed border-[#292D35] bg-[#101217] text-center">
            <h2 className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
                Nothing here yet
            </h2>

            <p className="mt-1 max-w-sm text-xs text-[#777D88]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/workouts"
                type="button"
                className="mt-5 rounded-full bg-[#C2F800] px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-[#D4FF4D] hover:shadow-[0_0_20px_rgba(194,248,0,0.15)]"
            >
                Go to workouts
            </Link>
        </div>
    )
}
