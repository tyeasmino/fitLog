"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";

export default function AddToTodaysPlanButton({ workout }: { workout: IWorkout }) {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext)
    const isPlanFull = todaysPlan.length >= 5;

    const handleAddToTodaysPlan = () => {
        if (todaysPlan.length >= 5) {
            toast.info("Today's plan can contain only 5 lifts");
            return
        }

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
            disabled={isPlanFull}
            className={`flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition-all ${isPlanFull
                ? "cursor-not-allowed bg-[#30352A] text-[#777D88]"
                : "bg-[#baff00] text-black hover:bg-[#c5ff26] active:scale-[0.98]"
                }`}
        >
            {isPlanFull ? (
                <>
                    <FiCheckCircle className="h-4 w-4" />
                    Today&apos;s Plan is Full
                </>
            ) : (
                <>
                    <FaRegCalendarPlus className="h-4 w-4 fill-black" />
                    Add to today&apos;s plan
                </>
            )}
        </button>
    )
}
