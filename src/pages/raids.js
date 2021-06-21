import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../Components/shared/Layout"

export default class Raids extends Component {
  render() {
    return (
      <Layout>
        <section class="text-gray-600 body-font">
          <div className="pt-20 text-3xl text-center">
            <h1>Raid Guides</h1>
          </div>
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-dsc-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="title-font text-white sm:text-2xl text-xl font-medium  mb-3">
                    Deep Stone Crypt
                  </h2>
                  <p class="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    to="/deepstonecrypt"
                    class="text-white py-5 px-12 bg-yellow-400 rounded inline-flex items-center"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-vog-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Vault of Glass
                  </h2>
                  <p class="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <Link
                    to="/vaultofglass"
                    class="text-white py-5 px-12 bg-yellow-400 rounded inline-flex items-center"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-raid-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                    Coming soon!
                  </h2>
                  <p class="leading-relaxed mb-3 text-white">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <a class="text-white py-5 px-12 bg-yellow-400 rounded inline-flex items-center">
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
