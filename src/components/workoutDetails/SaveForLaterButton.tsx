"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

export default function SaveForLaterButton({ workout }: { workout: IWorkout }) {
    const { saveForLater, setSaveForLater } = useContext(WorkoutsContext)

    const handleSaveForLater = () => {
        const alreadySaved = saveForLater.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info(`"${workout.name}" is already saved`);
            return;
        }

        setSaveForLater([...saveForLater, workout]);

        toast.success(
            `"${workout.name}" saved for later`
        );
    };


    return (
        <button
            onClick={() => handleSaveForLater()}
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#151820] px-5 text-sm font-bold text-white transition-all hover:border-white/20 hover:bg-[#20242E]"
        >
            <FiBookmark className="h-4 w-4" />
            Save for later
        </button>
    )
}
