import React from "react"
import Hero from "../Components/page/Hero"
import Content from "../Components/page/Content"
import Features from "../Components/page/Features"
import FAQS from "../Components/page/FAQS"
import Testimonials from "../Components/page/Testimonials"
import Call from "../Components/page/Call"
import Layout from "../Components/shared/Layout"

const index = () => {
  return (
    <Layout>
      <Hero />
      <Content />
      <Features />
      <Testimonials />
      <FAQS />
      <Call />
    </Layout>
  )
}

export default index
