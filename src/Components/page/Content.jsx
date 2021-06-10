import React from "react"
import fireteam from "../../images/fireteam.jpeg"
import eot from "../../images/eot.jpeg"

const Content = () => {
  return (
    // <!-- Section 1 -->
    <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img src={fireteam} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
        </div>

        {/* <!-- Content --> */}
        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Who we are
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
            We are a sherpa clan headed by the world's best sherpa, with over
            1,500 carries and counting.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              We have several thousand cumulative raid completions, so we know
              <span className="font-bold"> every square inch</span> of the
              raids.
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              LFG sessions are the headache that never relents. Noisy kids? No
              microphones? Constant noise and arguing? - Not with us.
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              We cater to any and all skill levels or backgrounds.
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- End  Content --> */}
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-20 md:flex-row max-w-7xl lg:px-16">
        {/* <!-- Content --> */}
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Inclusive clan
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            We're as much about having fun and no stress as we are about
            surgically taking you through the raids.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              New to the game and want to see what the fuss is about? - We got
              you.
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Took a break and need the latest meta weapons? - We can help.
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Have a disability and feel excluded from activities? - Welcome
              aboard.
            </li>
          </ul>
        </div>
        {/* <!-- End  Content --> */}

        {/* <!-- Image --> */}
        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img src={eot} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
        </div>
      </div>
    </section>
  )
}

export default Content
