import React from 'react';
import GeneralLayout from '@layouts/GeneralLayout';
import HeroSection from '@components/page-sections/home/hero-section/HeroSection';
import AboutSection from '@components/page-sections/home/about-section/AboutSection';
import NewsSection from '@components/page-sections/home/news-section/NewsSection';
import PatnersSection from '@components/page-sections/home/patners-section/PatnersSection';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <GeneralLayout>
      <HeroSection />
      <AboutSection />
      <NewsSection/>
      <PatnersSection />
    </GeneralLayout>
  );
}

export default Index;
