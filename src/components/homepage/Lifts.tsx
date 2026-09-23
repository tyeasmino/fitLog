
const getLifts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}

export default async function Lifts() {

    const liftsData = await getLifts();
    console.log(liftsData, "liftsData");

    return (
        <div className="text-white p-10">
            <h3>The library</h3>
            <p>Twelve lifts covering every major muscle group.</p>

        </div>
    )
}
