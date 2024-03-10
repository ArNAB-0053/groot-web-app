import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-850 py-24 px-28">
            <div className="px-4 py-6 md:px-6 ">
                <div className="flex items-center space-x-4">
                    <Link className="flex space-x-2 items-center" href="#">
                        <FlagIcon className="h-6 w-6 rounded-lg bg-gray-200 p-1 dark:bg-gray-800" />
                        <span className="font-bold tracking-tighter">Home</span>
                    </Link>
                    <h1 className="text-2xl font-bold tracking-tighter">Plant Disease Detector</h1>
                </div>
            </div>
            <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16 xl:px-6">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="blogcontent border-t border-r rounded-lg overflow-hidden border-b dark:border-gray-800">
                        <Link className="block transition-transform transform-gpu scale-100 hover:scale-105" href="#">
                            <img
                                alt="Cover image"
                                className="aspect-post object-cover"
                                height={300}
                                src="/placeholder.svg"
                                width={500}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    Detecting Rust: A Guide to Identifying and Treating Rust Fungus on Your Plants
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
                                <p className="mt-4 leading-loose">
                                    Rust fungus is a common disease that affects a wide variety of plants, including roses, beans, and
                                    tomatoes. It is caused by several different species of fungi in the order Pucciniales, and it can be a
                                    serious problem for gardeners and farmers.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="blogcontent border-t border-r rounded-lg overflow-hidden border-b dark:border-gray-800">
                        <Link className="grid gap-4 p-6 items-start border-b last:mb-0" href="#">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                                <img
                                    alt="Cover image"
                                    className="aspect-[16/9] object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    width={500}
                                />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    How to Spot and Stop Powdery Mildew on Your Plants
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
                                <p>
                                    Powdery mildew is a common fungal disease that affects a wide variety of plants, including roses,
                                    zucchinis, and grapes. It is caused by several different species of fungi in the order Erysiphales,
                                    and it can be a serious problem for gardeners and farmers.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="blogcontent border-t border-r rounded-lg overflow-hidden border-b dark:border-gray-800">
                        <Link className="grid gap-4 p-6 items-start border-b last:mb-0" href="#">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                                <img
                                    alt="Cover image"
                                    className="aspect-[16/9] object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    width={500}
                                />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    The Complete Guide to Identifying and Treating Common Plant Diseases
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
                                <p>
                                    Plants are susceptible to a wide variety of diseases caused by fungi, bacteria, viruses, and other
                                    pathogens. These diseases can cause a range of symptoms, including wilting, yellowing of the leaves,
                                    spots, and lesions, and can ultimately lead to the death of the plant.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="blogcontent border-t border-r rounded-lg overflow-hidden border-b dark:border-gray-800">
                        <Link className="grid gap-4 p-6 items-start border-b last:mb-0" href="#">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                                <img
                                    alt="Cover image"
                                    className="aspect-[16/9] object-cover"
                                    height={300}
                                    src="/placeholder.svg"
                                    width={500}
                                />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    The Top 10 Most Common Plant Diseases and How to Treat Them
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
                                <p>
                                    Plants are susceptible to a wide variety of diseases caused by fungi, bacteria, viruses, and other
                                    pathogens. These diseases can cause a range of symptoms, including wilting, yellowing of the leaves,
                                    spots, and lesions, and can ultimately lead to the death of the plant.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full max-w-sm mx-auto">
                    <Link className="flex items-center" href="#">
                        Previous
                    </Link>
                    <Link className="flex items-center" href="#">
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page


function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}
