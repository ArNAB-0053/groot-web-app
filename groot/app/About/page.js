import React from 'react'

const page = () => {
  return (
    <div className='lg:px-28 py-24'>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Groot</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Groot is your digital companion for identifying and managing plant diseases. Our mission is to empower
                farmers and gardeners with the knowledge and tools to protect their crops and gardens.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-4 xl:gap-8 xl:grid-cols-4">
              <div className="flex flex-col gap-2">
                <img
                  alt="Image"
                  className="mx-auto aspect-poster overflow-hidden rounded-xl object-cover object-center"
                  height="120"
                  src="healthy.jpg"
                  width="200"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">Healthy</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Image"
                  className="mx-auto aspect-poster overflow-hidden rounded-xl object-cover object-center"
                  height="120"
                  src="Powdery_mildew.JPG"
                  width="200"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">Powdery Mildew</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Image"
                  className="mx-auto aspect-poster overflow-hidden rounded-xl object-cover object-center"
                  height="120"
                  src="rust.JPG"
                  width="200"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">Rust</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Image"
                  className="mx-auto aspect-poster overflow-hidden rounded-xl object-cover object-center"
                  height="120"
                  src="blight.JPG"
                  width="200"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">Blight</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
  