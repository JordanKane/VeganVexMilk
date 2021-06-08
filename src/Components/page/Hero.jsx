import React from "react"
// import videoSrc from "../../images/italian.mp4"

const Hero = () => {
  return (
    <section class="relative left-0 flex items-center justify-center h-screen overflow-hidden text-white body-font bg-vex">
      <div class="relative z-30 p-5 bg-black bg-opacity-20 min-h-[100%]">
        <div class="items-center justify-center w-full mx-auto text-center lg:w-2/3 lg:mt-48">
          <h1 class="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            The best raid team, you're ever going to roll with
          </h1>
          {/* <p class="mb-8 leading-relaxed">
            After what has felt like an eternity we are happy to welcome
            everyone back inside the Tavern Company! We are still asking
            everyone to follow all current restrictions and rules whilst dinning
            inside which are… Maximum groups of 6 (from two households) Face
            coverings must be worn whenever not seated. Keep a minim of 1 meter
            apart from other customers.
          </p> */}
          <div class="grid place-items-center grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <button class="sm:w-[20%] md:w-72 text-center px-6 py-2 text-lg text-white bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-600">
              About
            </button>
            <button class="sm:w-[20%] md:w-72 px-6 py-2 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Donate
            </button>
          </div>
        </div>
      </div>
      {/* <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </section>
  )
}

export default Hero
