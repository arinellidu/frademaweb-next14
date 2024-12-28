'use client';

import {
  _jobs,
  _brands,
  _careerPosts,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import { _pricingHome } from 'src/_mock';

import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';

import { MarketingServicesHowItWork } from 'src/sections/_filiais/services/marketing-services-how-it-work';

import { CareerLandingHotCategories } from 'src/sections/_career/landing/career-landing-hot-categories';

import { EcommerceLandingHero } from 'src/sections/_ecommerce/landing/ecommerce-landing-hero';

import { MarketingContact } from 'src/sections/_filiais/contact/marketing-contact';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <MarketingServicesHowItWork />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <EcommerceLandingHero />

      {/* rever marketingcontactform */}
      <MarketingContact />

      <HomeFAQs />
    </>
  );
}

// ----------------------------------------------------------------------
