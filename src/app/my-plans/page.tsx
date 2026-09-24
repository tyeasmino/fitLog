"use client"

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { useContext } from "react";



export default function MyPlans() {
    const { todaysPlan } = useContext(WorkoutsContext)

    console.log(todaysPlan, " today's plan");
    return (
        <div>My Plans</div>
    )
}
