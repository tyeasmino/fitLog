import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#0D0F13] px-5 text-white">
            <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#C2F800]">
                    404
                </p>

                <h1 className="mt-3 text-4xl font-black uppercase">
                    Page not found
                </h1>

                <p className="mt-3 text-sm text-[#8F949F]">
                    The page you&apos;re looking for doesn&apos;t exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#D4FF4D]"
                >
                    Back to home
                </Link>
            </div>
        </main>
    );
}

