'use client'

import Layout from "@/components/layout/Layout";
import Hero from "@/components/molecules/Hero";
import ClientsSection from "@/components/molecules/ClientsSection";
import WorkWithBestSection from "@/components/molecules/WorkWithBestSection";
import WhatWeDoSection from "@/components/molecules/WhatWeDoSection";
import CaseStudiesSection from "@/components/molecules/CaseStudiesSection";
import CareerContactSection from "@/components/molecules/CareerContactSection";
import { useEffect, useState } from "react";
import { getHomepage } from "@/sanity/utils/home";
import { Homepage } from "@/types/Homepage";

export default function Home() {
  const [homepage, setHomepage] = useState<Homepage | null>(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      const homepageObject = await getHomepage();
      setHomepage(homepageObject);
    };
    fetchHomepage();
  }, []);
  
  return (
    <Layout>
      <section className="hero-section">
        {homepage && <Hero data={homepage} />}
      </section>
      <section className="clients-section">
        {homepage && <ClientsSection data={homepage.clientsSection} />}
      </section>
      <section className="work-with-best-section">
        {homepage && <WorkWithBestSection data={homepage.workWithBestSection} />}
      </section>
      <section className="what-we-do-section">
        {homepage && <WhatWeDoSection data={homepage.whatWeDoSection} />}
      </section>
      <section className="case-studies-section">
        <CaseStudiesSection />
      </section>
      <section className="career-contact-section">
        <CareerContactSection />
      </section>
    </Layout>
  );
}
