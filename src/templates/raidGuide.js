import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../Components/shared/Layout"

export const { data } = graphql`
  query pageQuery($slug: String) {
    sanityRaid(slug: { current: { eq: $slug } }) {
      name
      raidDescription
      slug {
        current
      }
      id
      bannerImage {
        asset {
          gatsbyImageData
        }
      }
      encounters {
        encounterNumber
        encounterName
        description {
          children {
            text
          }
        }
        encounterBanner {
          asset {
            gatsbyImageData
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
      }
    }
  }
`

const raidGuide = ({ data }) => {
  console.log(data.sanityRaid)
  return (
    <Layout>
      <section
        id="hero"
        className="grid bg-white grid-col-1 place-content-center md:py-12"
      >
        <h2 className="text-base text-center text-gray-500 uppercase">
          Raid Guide
        </h2>
        <h1 className="text-4xl text-center text-gray-900">
          {data.sanityRaid.name}
        </h1>
        <h3 className="text-xl italic text-center text-gray-400">
          {data.sanityRaid.raidDescription}
        </h3>
      </section>

      {data.sanityRaid.encounters.map((encounter, index) => (
        <section id="sparrow-race" class="text-gray-600 body-font relative">
          <div className="absolute w-full h-full">
            <GatsbyImage
              image={encounter.encounterBanner.asset.gatsbyImageData}
              alt="Destiny 2 Deep Stone Crypt - Crypt Security"
              // placeholder="blurred"
              // layout="fixed"
              className="absolute inset-0 w-full h-full z-[-9999]"
              // width={20}
              // height={20}
            />
          </div>
          <div class="container flex flex-wrap px-5 py-24 mx-auto items-center bg-black bg-opacity-40">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <h3 className="text-gray-100 uppercase">Raid Start</h3>
              <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-50">
                {encounter.encounterName}
              </h2>
              <div class="leading-relaxed text-base text-gray-200">
                {encounter.description.map(child => (
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
              <h2 class="title-font font-semibold text-gray-50 tracking-wider text-sm mb-3 uppercase">
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
              <h2 class="title-font font-semibold text-gray-50 tracking-wider text-sm mt-5 mb-3 uppercase">
                Rewards
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
      ))}
    </Layout>
  )
}

export default raidGuide
