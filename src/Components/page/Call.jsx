import React from "react"
import { FaTwitch, FaCoffee } from "react-icons/fa"
import Button from "../shared/Button"

const CTA = () => {
  return (
    <section id="donate" className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
          The Best Way to Raid in Destiny 2
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          With our expertise and expericence, combined with your effort, we can
          do great things. Join one of our fireteams or watch us on Twitch to
          see how we roll.
        </p>
        <div class="grid place-items-center grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <Button
            hrefTo="https://www.twitch.tv/veganvexmilk"
            className="px-6 py-2 text-lg text-gray-700 bg-gray-100 border-0 rounded sm:w-[40%] md:w-72 focus:outline-none hover:bg-gray-200"
          >
            <FaTwitch className="inline-block text-purple-500" />
            <p className="inline-block ml-4">Twitch Stream</p>
          </Button>
          <Button
            linkTo="/donate"
            role="link"
            // onClick={handleClick}
            className="sm:w-[40%] md:w-72 px-6 py-2 text-lg text-black bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-600"
          >
            <FaCoffee className="inline-block text-black" />
            <p className="inline-block ml-4">Donate</p>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
