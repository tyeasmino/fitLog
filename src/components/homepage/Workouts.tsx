import { IWorkout } from "@/types/workouts.type";
import WorkoutCard from "../shared/WorkoutCard";

const getLifts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}

export default async function Workouts() {

    const workoutsData = await getLifts();

    return (
        <div id="library" className="text-white p-4 md:p-10">
            <h3 className="uppercase text-3xl font-semibold">The library</h3>
            <p className="text-[#9CA3AF] mb-10">Twelve lifts covering every major muscle group.</p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workoutsData.map((workout: IWorkout, ind: number) => {
                    return <WorkoutCard key={ind} workout={workout} />
                })}
            </div>
        </div>
    )
}
