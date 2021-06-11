import React from "react"
import { FaTwitch } from "react-icons/fa"
import Button from "../shared/Button"
import fireteams from "../../images/bungieFireteams.png"

const Hero = () => {
  return (
    <section class="relative left-0 flex items-center justify-center h-screen overflow-hidden text-white body-font bg-dsc-hero">
      <div class="relative z-30 p-5 bg-black bg-opacity-20 min-h-[100%] min-w-[100%]">
        <div class="items-center justify-center w-full mx-auto text-center lg:w-2/3 lg:mt-48">
          <h1 class="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Welcome to your last LFG group
          </h1>
          <p class="mb-8 leading-relaxed">
            Tired of spending hours in LFG and even longer in raids that fall
            into arguments and disarray?
            <br />
            Vegan Vex Milk is the number one clan in the world for raid sherpas
            and raid carries, no matter your skill level. Our only rule is be
            18+.
          </p>
          <div class="grid place-items-center grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <Button
              hrefTo="https://www.twitch.tv/veganvexmilk"
              className="px-6 py-2 text-lg text-gray-700 bg-gray-100 border-0 rounded sm:w-full md:w-72 focus:outline-none hover:bg-gray-200"
            >
              <FaTwitch className="inline-block text-purple-500" />
              <p className="inline-block ml-4">Twitch Stream</p>
            </Button>
            <Button
              hrefTo="https://www.bungie.net/en/ClanV2/FireteamSearch?platform=1&activityType=22&lang=en&groupid=&"
              className="sm:w-[20%] md:w-72 px-6 py-2 text-lg text-white bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-600"
            >
              <img
                className="w-[1.25rem] h-[1.25rem] inline-block"
                src={fireteams}
                alt=""
              />
              <p className="inline-block ml-4">Fireteams</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
