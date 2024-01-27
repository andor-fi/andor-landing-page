import React from 'react'
import BannerSection from './BannerSection';
import PremiumFeature from './PremiumFeature';
import WhyAndorFi from './WhyAndorFi';
import Footer from './Footer'
import ReviewsSection from './ReviewsSection'
import AndorMoileFeature from './AndorMoileFeature';
import Protects from "./Protects"
import YourJarvis from './YourJarvis';


function index() {
  return (
    <>
    <BannerSection/>   
    <PremiumFeature/>
    <WhyAndorFi/>
    <AndorMoileFeature/>
    <Protects/>
    <YourJarvis/>
    {/* <ReviewsSection/> */}
    <Footer/>
    </>
  )
}

export default index