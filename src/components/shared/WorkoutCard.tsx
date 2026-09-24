import kcal from "@/assets/kcal.svg";
import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";

interface IWorkoutCardProps {
    workout: IWorkout
}

export default function WorkoutCard({ workout }: IWorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            key={workout.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#20242E] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative h-70 overflow-hidden">
                <Image
                    src={workout.image}
                    alt="Lift Image"
                    width={800}
                    height={600}
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Muscle group pills */}
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups?.map((muscle: string) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#C2F800] px-2.5 py-0.5 text-xs font-medium text-black uppercase backdrop-blur-md"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>
                {/* Name */}
                <h2 className="mt-3 uppercase text-2xl font-bold tracking-tight text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 text-sm text-zinc-400">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Stats */}
                <div className="flex gap-5 text-[#9CA3AF]">
                    {/* Duration */}
                    <div className="flex items-center gap-2">
                        <FaRegClock />
                        <p className="text-sm font-semibold">
                            {workout.duration} min
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={kcal}
                            alt="kcal"
                            className=""
                        />
                        <p className="text-sm font-semibold">
                            {workout.caloriesBurned}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <FaRegStar />
                        <p className="mt-0.5 text-sm font-semibold">
                            {workout.rating}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
