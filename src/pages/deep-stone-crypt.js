import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../Components/shared/Layout"
import overload from "../images/overload-smg.png"
import risk from "../images/riskrunner.jpeg"
import ward from "../images/wardcliffe.jpeg"

const Deepstonecrypt = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      sanityRaid(name: { eq: "Deep Stone Crypt" }) {
        bannerImage {
          asset {
            id
          }
        }
        raidDescription
        slug {
          current
        }
        encounters {
          description {
            children {
              text
            }
          }
          encounterName
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="grid space-y-4s grid-col-1 place-content-center md:py-24 bg-dsc-cover">
        <h2 className="text-base text-center uppercase">Raid Guide</h2>
        <h1 className="text-4xl text-center">Deep Stone Crypt</h1>
        <h3 className="text-xl italic text-center">
          {data.sanityRaid.raidDescription}
        </h3>
      </div>

      <section id="sparrow-race" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Raid Start</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[0].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[0].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Learn More
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
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <h2>No gear required!</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="security" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">First Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[1].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[1].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <Link
              to="/deep-stone-crypt/crypt-security"
              class="text-indigo-500 inline-flex items-center mt-4"
            >
              Our Strategy
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
            </Link>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap justify-between list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <div class="justify-center mr-5">
                <img className="w-20" src={risk} alt="" srcset="" />
              </div>
              <div class="justify-center mx-5">
                <img className="w-20" src={overload} alt="" srcset="" />
              </div>
              <div class="justify-center mr-5">
                <img className="w-20" src={ward} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atraks" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Second Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[2].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[2].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Our Strategy
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
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <h2>No gear required!</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="jumping" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Interim</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[3].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[3].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Our Strategy
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
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <h2>No gear required!</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="rapture" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Third Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[4].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[4].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Our Strategy
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
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <h2>No gear required!</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="taniks" class="text-gray-600 body-font">
        <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h3 className="uppercase">Boss Encounter</h3>
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {data.sanityRaid.encounters[5].encounterName}
            </h2>
            <div class="leading-relaxed text-base">
              {data.sanityRaid.encounters[5].description.map(child => (
                <p>{child.children[0].text}</p>
              ))}
            </div>
            <a class="text-indigo-500 inline-flex items-center mt-4">
              Our Strategy
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
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3 uppercase">
              Gear at a glance
            </h2>
            <div class="flex flex-wrap list-none -mb-1 bg-gray-200 rounded py-4 px-4">
              <h2>No gear required!</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Deepstonecrypt
