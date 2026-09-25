import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa6";
import RemoveWorkoutButton from "../my-plans/RemoveWorkoutButton";

interface IListedWorkoutCardProps {
    workout: IWorkout;
    showMarkAsDone?: boolean;
    listType: "today" | "saved";
}

export default function ListedWorkoutCard({
    workout,
    showMarkAsDone = false,
    listType,
}: IListedWorkoutCardProps) {

    return (
        <div className="group my-4 flex flex-col gap-4 rounded-xl border border-[#252932] bg-[#14171D] p-3 transition-all hover:border-[#323741] sm:flex-row sm:items-center sm:p-3.5">

            {/* Image */}
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-[#20242C] sm:h-16.5 sm:w-27.5">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="110px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
                <h2 className="truncate text-sm font-black uppercase tracking-tight text-white">
                    {workout.name}
                </h2>

                <p className="mt-0.5 truncate text-[11px] text-[#858B96]">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
                        <FaRegClock className="h-2.5 w-2.5 text-[#C2F800]" />
                        <span>{workout.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
                        <span className="text-[9px] font-bold text-[#C2F800]">
                            ◉
                        </span>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
                        <FaRegStar className="h-2.5 w-2.5 text-[#C2F800]" />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2 sm:ml-auto">

                {/* View Details */}
                <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-[#353A44] px-3.5 py-1.5 text-[10px] font-medium text-[#D2D5DB] transition-all hover:border-[#5A606C] hover:bg-[#1B1F27] hover:text-white"
                >
                    View Details
                </Link>

                {/* Mark as Done - Today's Plan only */}
                {showMarkAsDone && (
                    <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-full bg-[#C2F800] px-3.5 py-1.5 text-[10px] font-bold text-black transition-all hover:bg-[#D4FF4D]"
                    >
                        <FaCheck className="h-2.5 w-2.5" />
                        Mark as Done
                    </button>
                )}

                {/* Remove */}
                <RemoveWorkoutButton workout={workout} listType={listType} />

            </div>
        </div>
    );
}

