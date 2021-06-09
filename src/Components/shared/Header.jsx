import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header class="text-white bg-black body-font py-3">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <span class="text-xl font-black leading-none text-white select-none logo">
            Vegan Vex Milk
          </span>
        </Link>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-300   hover:underline text-white">
            About
          </a>
          <a class="mr-5 hover:text-gray-300   hover:underline text-white">
            Strategies
          </a>
          <Link
            to="#cta"
            class="mr-5 hover:text-gray-300   hover:underline text-white"
          >
            Donate
          </Link>
        </nav>
        {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Join our fireteam
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  )
}

export default Header
