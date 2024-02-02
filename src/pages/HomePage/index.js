import React from 'react'
import BannerSection from './BannerSection';
import PremiumFeature from './PremiumFeature';
import WhyAndorFi from './WhyAndorFi';
import Footer from './Footer'
// import ReviewsSection from './ReviewsSection'
import AndorMoileFeature from './AndorMoileFeature';
import Protects from "./Protects"
import YourJarvis from './YourJarvis';

import InterFacesSection from './InterFacesSection';
import ScrollBar from './ScrollBar';

function index() {
  return (
    <>
    <BannerSection/>   
    <PremiumFeature/>
    <WhyAndorFi/>
    <InterFacesSection/>
    <AndorMoileFeature/>
    <ScrollBar/>
    <Protects/>
    <YourJarvis/>
    {/*
  <ReviewsSection/>
  */}
    <ScrollBar/>
    <Footer/>
    </>
  )
}

export default index