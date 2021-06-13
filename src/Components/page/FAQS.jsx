import React from "react"

const FAQS = () => {
  return (
    <section
      id="faqs"
      className="relative py-16 bg-white min-w-screen animation-fade animation-delay bg-dsc-atraks"
    >
      <div className="container px-8 mx-auto sm:px-12 xl:px-5">
        <p className="text-xs font-bold text-center text-gray-200 uppercase lg:text-left sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
          Got a Question? We’ve got answers.
        </p>
        <h3 className="mt-1 text-2xl font-bold text-center text-white lg:text-left sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            How does it work?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            You join our fireteam either from our Twitch streams or directly
            from Bungie Fireteams.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            Do I need the meta weapons and gear?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            No! We're fully equipped to carry you all the way through. If you do
            have them though - it helps the team a little.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            Do I need to know the encounters?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Nope. We have the know-how to guide you through every step and every
            encounter. We will send you the maps for the areas and give you
            guidance on your loadout, roles and positioning as they arise.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            How much does this service cost?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            It's completely free! We do however ask that if you enjoyed your
            time with us, and you want to frequently raid with us again, you buy
            us a coffee through our donatation link. You'll also get some bonus
            items and emblems from us as a thank you!
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQS
