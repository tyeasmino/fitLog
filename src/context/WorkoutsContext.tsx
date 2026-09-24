"use client";
import { createContext, useState } from "react";

export const WorkoutsContext = createContext({});

export default function WorkoutsProvider({ children }: { children: ReactNode }) {
    const [todaysPlan, setTodaysPlan] = useState([]);
    const [saveForLater, setSaveForLater] = useState([]);

    const sharedData = {
        todaysPlan, setTodaysPlan, saveForLater, setSaveForLater
    }

    return (
        <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
    )
}
