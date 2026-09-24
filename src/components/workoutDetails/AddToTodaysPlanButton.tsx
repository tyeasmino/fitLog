"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";

export default function AddToTodaysPlanButton({ workout }: { workout: IWorkout }) {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext)

    const handleAddToTodaysPlan = () => {
        console.log("add to today's plan btn triggered ", workout);

        setTodaysPlan([...todaysPlan, workout]);
        alert(`You have added "${workout.name}"`);
    }

    return (
        <button
            onClick={() => handleAddToTodaysPlan()}
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#baff00] px-5 text-sm font-bold text-black transition-all hover:bg-[#c5ff26] active:scale-[0.98]"
        >
            <FaRegCalendarPlus className="h-4 w-4 fill-black" />
            Add to today&apos;s plan
        </button>
    )
}
