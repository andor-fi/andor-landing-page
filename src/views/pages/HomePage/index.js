import React from 'react'
import BannerSection from './BannerSection';
import PremiumFeature from './PremiumFeature';
import WhyAndorFi from './WhyAndorFi';
import Footer from './Footer'
import ReviewsSection from './ReviewsSection'
import InterFacesSection from './InterFacesSection';

function index() {
  return (
    <>
    <BannerSection/>   
    <PremiumFeature/>
    <WhyAndorFi/>
    <InterFacesSection/>
    <ReviewsSection/>
    <Footer/>
    </>
  )
}

export default index