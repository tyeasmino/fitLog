"use client";

import {
    createContext,
    ReactNode,
    useState,
} from "react";

import { IWorkout } from "@/types/workouts.type";

interface IWorkoutsContext {
    todaysPlan: IWorkout[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

    saveForLater: IWorkout[];
    setSaveForLater: React.Dispatch<React.SetStateAction<IWorkout[]>>;

    completedWorkouts: IWorkout[];
    setCompletedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>(
    {} as IWorkoutsContext
);

export default function WorkoutsProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
    const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);
    const [completedWorkouts, setCompletedWorkouts] = useState<IWorkout[]>([]);

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        saveForLater,
        setSaveForLater,
        completedWorkouts,
        setCompletedWorkouts,
    };

    return (
        <WorkoutsContext.Provider value={sharedData}>
            {children}
        </WorkoutsContext.Provider>
    );
}
