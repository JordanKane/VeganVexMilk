import React from "react"
import { FaTwitch, FaPaypal } from "react-icons/fa"
import Button from "../shared/Button"
import fireteams from "../../images/bungieFireteams.png"

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
          The New Standard for Design
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Use our award-winning tools to help you maximize your profits. We've
          uncovered the correct recipe for converting visitors into customers.
        </p>
        <div class="grid place-items-center grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-2/3 mx-auto">
          <Button
            hrefTo="https://www.twitch.tv/veganvexmilk"
            className="sm:w-[20%] md:w-72 px-6 py-2 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
          >
            <FaTwitch className="inline-block text-purple-500" />
            <p className="inline-block ml-4">Watch us on Twitch</p>
          </Button>
          <Button
            hrefTo="https://www.bungie.net/en/ClanV2/FireteamSearch?platform=1&activityType=22&lang=en&groupid=&"
            className="sm:w-[20%] md:w-72 px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-blue-900"
          >
            <FaPaypal className="inline-block text-white" />
            <p className="inline-block ml-4">Buy us a coffee!</p>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
