"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";

export default function SaveForLaterButton({ workout }: { workout: IWorkout }) {
    const { saveForLater, setSaveForLater } = useContext(WorkoutsContext)

    const handleSaveForLater = () => {
        console.log("save for later btn triggered ", workout);

        setSaveForLater([...saveForLater, workout]);
        alert(`You have saved "${workout.name}"`);
    }

    return (
        <button
            onClick={() => handleSaveForLater()}
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#baff00] px-5 text-sm font-bold text-black transition-all hover:bg-[#c5ff26] active:scale-[0.98]"
        >
            <FiBookmark className="h-4 w-4 fill-black" />
            Save for later
        </button>
    )
}
