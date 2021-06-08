import React from "react"
import Hero from "../Components/page/Hero"
import Features from "../Components/page/Features"
import Steps from "../Components/page/Steps"
import Testimonials from "../Components/page/Testimonials"
import Call from "../Components/page/Call"
import Layout from "../Components/shared/Layout"

const index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Steps />
      <Testimonials />
      <Call />
    </Layout>
  )
}

export default index
