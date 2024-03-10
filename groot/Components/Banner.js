import Link from "next/link"
import Header from "./Header"

export default function Banner() {
    return (
        <div className="lg:px-16 overflow-hidden py-12">
            <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 xl:gap-12">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Groot
                            </h1>
                            <p className="text-gray-600 md:text-xl dark:text-white/400">
                                Upload an image of a plant leaf to detect diseases. Our AI model will analyze the image and provide you
                                with the results.
                            </p>
                            <button className="mt-10 pt-6 cursor-default flex items-center justify-start gap-y-4">
                                <Link href='/Body' className="bg-black px-6 py-3 text-white rounded-full">Get Started</Link>
                                <Link href='/About' className="bg-[#f4f4f4] shadow-sm ml-8 px-6 py-3 rounded-full">Learn more</Link>
                            </button>
                        </div>
                        {/* <div className="flex justify-center">
                            <img
                                alt="Image"
                                className="leaf"
                                height="300"
                                src="leaf2.jpg"
                                width="500"
                            />
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
