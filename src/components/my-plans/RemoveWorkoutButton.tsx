
"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";


interface IRemoveWorkoutButtonProps {
    workout: IWorkout;
    listType: "today" | "saved";
}



export default function RemoveWorkoutButton({ workout, listType }: IRemoveWorkoutButtonProps) {
    const { todaysPlan, setTodaysPlan, saveForLater, setSaveForLater } = useContext(WorkoutsContext)

    const handleRemove = () => {
        if (listType === 'today') {
            setTodaysPlan(todaysPlan.filter((plan) => plan.id !== workout.id))

            toast.success(`"${workout.name}" removed from today's plan`)
        } else {
            setSaveForLater(saveForLater.filter((plan) => plan.id !== workout.id))

            toast.success(`"${workout.name}" removed from saved list`)
        }
    }

    return (
        <button
            type="button"
            onClick={() => handleRemove()}
            aria-label={`Remove ${workout.name}`}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[#626873] transition-colors hover:bg-[#242830] hover:text-white"
        >
            <FaTimes className="h-3 w-3" />
        </button>
    )
}
