import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../Components/shared/Layout"

const Deepstonecrypt = () => {
  const { sanityRaid } = useStaticQuery(graphql`
    query MyQuery {
      sanityRaid(name: { eq: "Deep Stone Crypt" }) {
        bannerImage {
          asset {
            gatsbyImageData
          }
        }
        body {
          children {
            text
          }
        }
        encounters {
          description {
            children {
              text
            }
          }
          encounterMap1 {
            asset {
              gatsbyImageData
            }
          }
          encounterMap2 {
            asset {
              gatsbyImageData
            }
          }
          encounterName
        }
        raidDescription
      }
    }
  `)

  return (
    <Layout>
      <div className="grid space-y-4s grid-col-1 place-content-center md:py-24 bg-dsc-cover">
        <h2 className="text-base text-center uppercase">Raid Guide</h2>
        <h1 className="text-4xl text-center">Deep Stone Crypt</h1>
        <h3 className="text-xl italic text-center">
          {sanityRaid.raidDescription}
        </h3>
      </div>

      <section id="sparrow-race" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Raid Start</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[0].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[0].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <div>
              <a class="cursor-pointer text-black py-3 px-4 bg-yellow-300 rounded hover:bg-yellow-500 inline-flex items-center mt-4">
                Encounter Map
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-solar.png"
                    alt="Destiny 2 Solar Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Brigs</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Fallen Dark Council Guards
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Dregs</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Slow Mines</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-danger.png"
                    alt="Danger Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Narrow Ledges!</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section id="security" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">First Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[1].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[1].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <div>
              <a class="text-black py-3 px-4 bg-yellow-300 rounded hover:bg-yellow-500 inline-flex items-center mt-4 cursor-pointer">
                Encounter Maps
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-solar.png"
                    alt="Destiny 2 Solar Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Overload Captains</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Fallen Dark Council Guards
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Sentinel Servitors</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Hacker Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Exploder Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Marauders</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Dregs</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section id="atraks" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Second Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[2].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[2].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <div>
              <a class="cursor-pointer text-black py-3 px-4 bg-yellow-300 rounded hover:bg-yellow-500 inline-flex items-center mt-4">
                Encounter Maps
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-start">
                  <StaticImage
                    src="../images/d2-raid.png"
                    alt="Destiny 2 Raid Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Atraks-1, Fallen Exo</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Sentinel Servitors</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Operator Vandal</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Hacker Vandal</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Tracer Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Wretches</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section id="jumping" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Interim</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[3].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[3].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-solar.png"
                    alt="Destiny 2 Solar Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Brigs</p>
                </div>
              </li>
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Fallen Dark Council Guards
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Marauders</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Tracer Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Exploder Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Dregs</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-danger.png"
                    alt="Destiny 2 Danger Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Narrow Ledges, Big Drops and Environment Hazards!
                  </p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section id="rapture" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Third Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[4].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[4].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <div>
              <a class="cursor-pointer text-black py-3 px-4 bg-yellow-300 rounded hover:bg-yellow-500 inline-flex items-center mt-4">
                Encounter Map
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-raid.png"
                    alt="Destiny 2 Raid Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={25}
                    height={25}
                  />
                  <p className="inline-block pl-2">Taniks, Reborn</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-raid.png"
                    alt="Destiny 2 Raid Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Overload Captains</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Fallen Dark Council Guards
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Hacker Vandal</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Operator Vandal</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Surpressor Vandal</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Marauders</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Shanks</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Dregs</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>

      <section id="taniks" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Boss Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {sanityRaid.encounters[5].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {sanityRaid.encounters[5].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <div>
              <a class="cursor-pointer text-black py-3 px-4 bg-yellow-300 rounded hover:bg-yellow-500 inline-flex items-center mt-4">
                Encounter Map
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Hazards
            </h2>
            <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <li>
                <div className="flex justify-center">
                  <StaticImage
                    src="../images/d2-raid.png"
                    alt="Destiny 2 Raid Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Taniks, The Abomination</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-void.png"
                    alt="Destiny 2 Void Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">
                    Fallen Dark Council Guards
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Hacker Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Operator Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Surpressor Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Vandals</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Marauders</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-arc.png"
                    alt="Destiny 2 Arc Element Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Fallen Dregs</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/d2-danger.png"
                    alt="Danger Icon"
                    placeholder="blurred"
                    layout="fixed"
                    className="inline-block"
                    width={20}
                    height={20}
                  />
                  <p className="inline-block pl-2">Environment hazards!</p>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Deepstonecrypt
