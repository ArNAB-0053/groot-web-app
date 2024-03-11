import Link from "next/link"
import Header from "./Header"

export default function Banner() {
    return (
        <div className="lg:px-16 overflow-hidden py-16 lg:py-4">
            <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex items-center justify-center flex-col-reverse lg:justify-between lg:flex-row gap-y-10">
                        <div className="space-y-4 lg:w-1/2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Groot
                            </h1>
                            <p className="text-gray-600 md:text-xl dark:text-white/400">
                                Upload an image of a plant leaf to detect diseases. Our AI model will analyze the image and provide you
                                with the results.
                            </p>
                            <button className="mt-10 pt-6 cursor-default flex items-center justify-center flex-col lg:flex-row lg:justify-start gap-y-4 w-full">
                                <Link href='/Body' className="bg-black px-6 py-3 text-white rounded-full w-full">Get Started</Link>
                                <Link href='/About' className="bg-[#f4f4f4]/60 shadow-sm lg:ml-8 px-6 py-3 rounded-full w-full">Learn more</Link>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img
                                alt="Image"
                                className="leaf rotate-[0deg]"
                                height="400"
                                src="leaf2.jpg"
                                width="500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
