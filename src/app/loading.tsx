export default function Loading() {
    return (
        <div className="min-h-screen bg-[#0D0F13] px-4 py-8 text-white sm:px-6 md:px-8 lg:px-10">
            <div className="mx-auto max-w-350 animate-pulse">

                {/* Banner skeleton */}
                <div className="mb-10 h-80 rounded-2xl bg-[#15171D]" />

                {/* Library heading */}
                <div className="mb-8">
                    <div className="h-8 w-48 rounded bg-[#20242E]" />
                    <div className="mt-3 h-4 w-72 rounded bg-[#20242E]" />
                </div>

                {/* Workout cards skeleton */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-[#20242E]"
                        >
                            <div className="h-70 bg-[#292D35]" />

                            <div className="space-y-3 p-5">
                                <div className="h-5 w-24 rounded bg-[#292D35]" />
                                <div className="h-6 w-3/4 rounded bg-[#292D35]" />
                                <div className="h-4 w-1/2 rounded bg-[#292D35]" />

                                <div className="mt-5 h-px bg-white/10" />

                                <div className="h-4 w-2/3 rounded bg-[#292D35]" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}


