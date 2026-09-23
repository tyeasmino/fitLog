import BannerImg from "@/assets/banner.png"
import Image from "next/image"

export default function Banner() {
    return (
        <section className="m-4 sm:m-6 md:m-8 lg:m-10">
            <div className="min-h-[50vh] overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] p-5 sm:p-7 md:p-8 lg:p-12 xl:p-16">
                <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row-reverse md:items-center md:gap-8 lg:gap-12 xl:gap-16 md:justify-between">

                    {/* Image */}
                    <div className="w-full shrink-0 md:w-[38%] lg:w-[25%]">
                        <Image
                            src={BannerImg}
                            alt="Workout"
                            priority
                            className="mx-auto h-auto w-full max-w-70 object-contain sm:max-w-[320px] md:max-w-none"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex w-full flex-col md:w-[62%] lg:w-[50%]">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#C2F800] sm:text-sm">
                            workout library
                        </span>

                        <h1 className="mt-2 text-3xl font-bold uppercase leading-[1.05] text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                            Train with intent. Log every set.
                        </h1>

                        <p className="mt-5 max-w-2xl text-sm leading-6 text-[#9CA3AF] sm:text-base md:mt-4 lg:text-lg lg:leading-7">
                            FitLog is a dark, no-nonsense gym companion: pick a lift,
                            lock it into today&apos;s plan, and watch the week&apos;s
                            work add up.
                        </p>

                        <button
                            type="button"
                            className="mt-6 w-fit rounded-md bg-[#C2F800] px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-[#d4ff4d] sm:px-6 sm:py-2.5 md:mt-7 lg:px-8 lg:py-3 lg:text-lg"
                        >
                            Browse Workouts
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
