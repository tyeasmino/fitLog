"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function MarkAsDoneButton({
    workout,
}: {
    workout: IWorkout;
}) {
    const {
        completedWorkouts,
        setCompletedWorkouts,
    } = useContext(WorkoutsContext);

    // Check whether this workout is already completed
    const isCompleted = completedWorkouts.some(
        (item: IWorkout) => item.id === workout.id
    );

    const handleMarkAsDone = () => {
        if (isCompleted) {
            toast.info(`"${workout.name}" is already completed`);
            return;
        }

        setCompletedWorkouts([
            ...completedWorkouts,
            workout,
        ]);

        toast.success(`"${workout.name}" marked as done`);
    };

    return (
        <button
            type="button"
            onClick={() => handleMarkAsDone()}
            disabled={isCompleted}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold ${isCompleted
                ? "bg-[#30352A] text-[#C2F800]"
                : "bg-[#C2F800] text-black hover:bg-[#D4FF4D]"
                }`}
        >
            <FaCheck className="h-2.5 w-2.5" />

            {isCompleted ? "Completed" : "Mark as Done"}
        </button>
    );
}
