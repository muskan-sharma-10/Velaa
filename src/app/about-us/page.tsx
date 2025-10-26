import AboutDescription from '@/components/about-us/AboutDescription'
import AboutUs from '@/components/about-us/aboutus'
import OurVisionMission from '@/components/about-us/OurVisionMission'
import StatsSection from '@/components/about-us/StatsSection'
import WhatYoullFindSection from '@/components/about-us/WhatYoullFindSection'
import React from 'react'

function page() {
  return (
    <div>
      <AboutUs/>
      <AboutDescription/>
      <OurVisionMission/>
      <StatsSection/>
      <WhatYoullFindSection/>
    </div>
  )
}

export default page
