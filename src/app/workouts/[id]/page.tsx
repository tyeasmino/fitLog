

import Link from "next/link";

import AddToTodaysPlanButton from "@/components/workoutDetails/AddToTodaysPlanButton";
import SaveForLaterButton from "@/components/workoutDetails/SaveForLaterButton";
import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BiCheck, BiDumbbell, BiListCheck, BiStar } from "react-icons/bi";
import { BsArrowLeft, BsStar } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { GiFlame } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";

interface IWorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkouts = async (): Promise<IWorkout[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
};

export default async function WorkoutDetailsPage({
    params,
}: IWorkoutDetailsPageProps) {
    const { id } = await params;

    const workoutsData = await getWorkouts();

    const workout = workoutsData.find(
        (workout: IWorkout) => String(workout.id) === String(id)
    );

    if (!workout) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-[#0d0f13] px-5 py-8 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Back Button */}
                <Link
                    href="/workouts"
                    className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                    <BsArrowLeft className="h-4 w-4" />
                    Back to library
                </Link>

                {/* Main Content */}
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">

                    {/* ================= IMAGE ================= */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151820]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={1000}
                            height={1000}
                            className="h-full min-h-125 w-full object-cover lg:min-h-155"
                        />
                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="flex flex-col justify-center">

                        {/* Title */}
                        <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#baff00] px-4 py-1.5 text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* ================= STATS CARD ================= */}
                        <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#151820]">

                            {/* Equipment */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <BiDumbbell className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Equipment
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <FiTarget className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Difficulty
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <BiListCheck className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Sets
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <BiCheck className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Reps
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <LuClock3 className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Duration
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <GiFlame className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Calories
                                    </span>
                                </div>

                                <span className="text-sm text-zinc-200">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <BiStar className="h-4 w-4 text-zinc-500" />

                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                                        Rating
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <BsStar className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                                    <span className="text-sm text-zinc-200">
                                        {workout.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ================= INSTRUCTIONS ================= */}
                        <div className="mt-7">
                            <h2 className="text-sm font-bold uppercase tracking-wide">
                                Instructions
                            </h2>

                            <div className="mt-4 space-y-4">
                                {workout.instructions.map(
                                    (instruction, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4"
                                        >
                                            <span className="mt-0.5 text-sm font-medium text-zinc-500">
                                                {index + 1}.
                                            </span>

                                            <p className="text-sm leading-6 text-zinc-400">
                                                {instruction}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ================= ACTIONS ================= */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                            {/* Add to plan */}
                            <AddToTodaysPlanButton workout={workout} />

                            {/* Save */}
                            <SaveForLaterButton workout={workout} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
