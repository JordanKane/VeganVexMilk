import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { FaPaypal } from "react-icons/fa"
import Button from "../shared/Button"
import { isBrowser } from "../../utils"

const navLinks = [
  {
    linkName: "About",
    linkTo: "#about",
  },
  {
    linkName: "Features",
    linkTo: "#features",
  },
  {
    linkName: "Testimonials",
    linkTo: "#testimonials",
  },
  {
    linkName: "FAQs",
    linkTo: "#faqs",
  },
  {
    linkName: "Donate",
    linkTo: "#donate",
  },
]

const Header = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 640)
  const [isOpen, setIsOpen] = useState(false)

  const updateMedia = () => {
    setMobile(window.innerWidth <= 640)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  if (!isBrowser) {
    return
  }

  return (
    <>
      {isMobile ? (
        <header className="py-3 text-white bg-black body-font">
          <div className="container grid grid-cols-2 p-1 mx-auto place-content-between md:flex-row">
            <Link
              to="/"
              className="self-center inline-block ml-4 place-self-start"
            >
              <span className="text-lg font-black leading-none text-white select-none logo">
                Vegan Vex Milk
              </span>
            </Link>
            <button
              className={`menu ${
                isOpen ? "opened" : ""
              } place-self-end self-center mr-2`}
              aria-label="Main Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>

          <div
            id="side-menu"
            className={`${
              isOpen
                ? "sidebar-open min-h-screen min-w-full py-20"
                : "sidebar-closed max-h-0 min-w-full"
            }`}
          >
            <nav className="grid items-center grid-cols-1 gap-10 place-items-center">
              {navLinks.map((link, index) => (
                <Link
                  to={link.linkTo}
                  title={link.linkName}
                  id={index}
                  className="text-xl font-bold"
                >
                  {link.linkName}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      ) : (
        <header className="py-3 text-white bg-black body-font">
          <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <Link to="/">
              <span className="text-xl font-black leading-none text-white select-none logo">
                Vegan Vex Milk
              </span>
            </Link>

            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              {navLinks.map((link, index) => (
                <Link
                  to={link.linkTo}
                  title={link.linkName}
                  id={index}
                  clasName="mr-4 hover:underline hover:text-gray-400"
                >
                  {link.linkName}
                </Link>
              ))}
              <Button
                hrefTo="https://paypal.me/jordanakane?locale.x=en_GB"
                className="w-[30] px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-blue-900"
              >
                <FaPaypal className="inline-block text-white" />
                <p className="inline-block ml-4">Donate</p>
              </Button>
            </nav>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
