"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AddToTodaysPlanButton({ workout }: { workout: IWorkout }) {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext)

    const handleAddToTodaysPlan = () => {
        const alreadyAdded = todaysPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.info(`"${workout.name}" is already in today's plan`);
            return;
        }

        setTodaysPlan([...todaysPlan, workout]);

        toast.success(`"${workout.name}" added to today's plan`);
    };

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
