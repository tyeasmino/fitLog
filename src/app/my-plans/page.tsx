"use client";

import EmptyList from "@/components/my-plans/EmptyList";
import ListedWorkoutCard from "@/components/shared/ListedWorkoutCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function MyPlans() {
    const { todaysPlan, saveForLater } = useContext(WorkoutsContext)

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration")

    const sortWorkouts = (workouts: IWorkout[]) => {
        const sortedWorkouts = [...workouts]

        if (sortBy === 'rating') {
            sortedWorkouts.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === 'caloriesBurned') {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        } else if (sortBy === 'duration') {
            sortedWorkouts.sort((a, b) => b.duration - a.duration)
        }

        return sortedWorkouts
    }

    const sortedTodaysPlanedWorkouts = sortWorkouts(todaysPlan)
    const sortedSaveForLaterWorkouts = sortWorkouts(saveForLater)

    // Today's Plan statistics
    const totalExercises = todaysPlan.length;

    const totalMinutes = todaysPlan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = todaysPlan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <div className="min-h-screen bg-[#0D0F13] px-4 py-8 text-white sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-350">

                {/* =====================================================
                    PAGE HEADER
                ====================================================== */}
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-2 text-sm text-[#8F949F]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* =====================================================
                    STATS
                ====================================================== */}
                <div className="mt-7 overflow-hidden rounded-xl border border-[#252932] bg-[#14171D]">
                    <div className="grid grid-cols-1 sm:grid-cols-3">

                        {/* Exercises */}
                        <div className="px-5 py-5 sm:px-6 sm:py-6">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-[#858B96]">
                                Exercises
                            </p>

                            <p className="mt-1 text-3xl font-black leading-none text-[#C2F800]">
                                {totalExercises}
                            </p>
                        </div>

                        {/* Minutes */}
                        <div className="px-5 py-5 sm:px-6 sm:py-6">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-[#858B96]">
                                Minutes
                            </p>

                            <p className="mt-1 text-3xl font-black leading-none text-white">
                                {totalMinutes}
                            </p>
                        </div>

                        {/* Calories */}
                        <div className="px-5 py-5 sm:px-6 sm:py-6">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-[#858B96]">
                                Calories
                            </p>

                            <p className="mt-1 text-3xl font-black leading-none text-white">
                                {totalCalories}
                            </p>
                        </div>
                    </div>
                </div>


                {/* =====================================================
                    TOOLBAR
                ====================================================== */}
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Tabs */}
                    <div className="inline-flex w-fit rounded-lg border border-[#252932] bg-[#14171D] p-1">
                        <button
                            type="button"
                            onClick={() => setActiveTab("today")}
                            className={`rounded-md px-5 py-2 text-xs font-semibold transition-all ${activeTab === "today"
                                ? "bg-[#252932] text-white shadow-sm"
                                : "text-[#777D88] hover:text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-5 py-2 text-xs font-semibold transition-all ${activeTab === "saved"
                                ? "bg-[#252932] text-white shadow-sm"
                                : "text-[#777D88] hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-[#777D88]">
                            Sort By
                        </span>

                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as "duration" | "caloriesBurned" | "rating")}
                                className="appearance-none rounded-lg border border-[#292D35] bg-[#14171D] py-2 pl-3 pr-9 text-xs font-medium text-white outline-none transition-colors hover:border-[#3A3F49] focus:border-[#C2F800]"
                            >
                                <option value="duration">Duration</option>
                                <option value="caloriesBurned">Calories</option>
                                <option value="rating">Rating</option>
                            </select>

                            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#858B96]" />
                        </div>
                    </div>
                </div>


                {/* =====================================================
                    SAVED TAB
                ====================================================== */}
                {activeTab === "today" && sortedTodaysPlanedWorkouts.length > 0
                    ? (sortedTodaysPlanedWorkouts.map((workout: IWorkout) => {
                        return <ListedWorkoutCard key={workout.id} workout={workout} showMarkAsDone={true} listType="today" />
                    })) : activeTab === "saved" && sortedSaveForLaterWorkouts.length > 0
                        ? (sortedSaveForLaterWorkouts.map((workout: IWorkout) => {
                            return <ListedWorkoutCard key={workout.id} workout={workout} showMarkAsDone={false} listType="saved" />
                        })) : (
                            <EmptyList />
                        )
                }

            </div>
        </div>
    );
}


