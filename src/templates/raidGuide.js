import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../Components/shared/Layout"
import Button from "../Components/shared/Button"

export const { data } = graphql`
  query pageQuery($slug: String) {
    sanityRaid(slug: { current: { eq: $slug } }) {
      id
      name
      raidDescription
      slug {
        current
      }
      bannerImage {
        asset {
          gatsbyImageData
        }
      }
      encounters {
        _key
        encounterNumber
        encounterName
        encounterSubTitle
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
        enemyComposition {
          enemyType
          enemyElementName
          enemyElementIcon {
            asset {
              gatsbyImageData
            }
          }
        }
        hasMap
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
        isLootable
      }
    }
  }
`

const RaidGuide = ({ data }) => {
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
        <Button
          linkTo="/"
          title={`${data.sanityRaid.name} Loot Tables`}
          className="inline-flex items-center justify-center w-full py-3 mt-4 text-black bg-yellow-300 rounded cursor-pointer hover:bg-yellow-500"
        >
          Raid Rewards
        </Button>
      </section>

      {data.sanityRaid.encounters.map(encounter => (
        <section
          id={encounter.encounterNumber}
          key={encounter._key}
          class="text-gray-600 body-font relative"
        >
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
              <h3 className="text-gray-100 uppercase">
                {encounter.encounterSubTitle}
              </h3>
              <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-50">
                {encounter.encounterName}
              </h2>
              <div class="leading-relaxed text-base text-gray-200">
                {encounter.description.map(child => (
                  <p>{child.children[0].text}</p>
                ))}
              </div>
              {encounter.hasMap && (
                <Button
                  linkTo={`/${encounter.encounterName}`}
                  className="inline-flex items-center px-4 py-3 mt-4 text-black bg-yellow-300 rounded cursor-pointer hover:bg-yellow-500"
                >
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
                </Button>
              )}
            </div>
            <div class="grid grid-cols-1 place-content-start md:w-1/2 md:pl-12">
              <h2 class="title-font font-semibold text-gray-50 tracking-wider text-sm mb-3 uppercase">
                Hazards
              </h2>
              <div class="grid grid-cols-1 place-items-start place-content-center list-none -mb-1 bg-gray-200 rounded py-4 px-4">
                {encounter.enemyComposition.map(enemy => (
                  <li>
                    <div className="flex justify-center">
                      <GatsbyImage
                        image={enemy.enemyElementIcon.asset.gatsbyImageData}
                        alt={`Destiny 2 ${enemy.enemyElementName} Icon`}
                        className="inline-block h-[20px] w-[20px]"
                      />
                      <p className="inline-block pl-2">{enemy.enemyType}</p>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  )
}

export default RaidGuide
