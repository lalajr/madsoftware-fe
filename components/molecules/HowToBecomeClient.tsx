'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SectionHeading } from '@/components/atoms/SectionHeading'
import { getSiteSettings } from '@/sanity/utils/settings'
import { SiteSettings, Step } from '@/types/SiteSettings'
import { ButtonWithArrow } from '@/components/atoms/ButtonWithArrow'

export function HowToBecomeClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
  })
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null)
  const [stepsArray, setStepsArray] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const settings = await getSiteSettings()
        setSiteSettings(settings)
        setStepsArray(settings?.howToBecomeClient?.steps || [])
      } finally {
        setIsLoading(false)
      }
    }
    fetchSiteSettings()
  }, [])

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (isLoading) {
    return (
      <section ref={ref} className="py-[48px] lg:py-[120px] text-white">
        <div className="container mx-auto px-4">
          {/* Optional loading state */}
        </div>
      </section>
    )
  }

  if (!siteSettings?.howToBecomeClient) {
    return null
  }

  const { title, subtitle, steps } = siteSettings.howToBecomeClient

  return (
    <section ref={ref} className="py-[48px] lg:py-[120px] text-white">
      <div className="container min-w-container mx-auto px-4">
        <SectionHeading
          title={title}
          subtitle={subtitle}
        />

        <div ref={ref}>
          {stepsArray && stepsArray.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {stepsArray.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="group bg-deep-charcoal hover:bg-crimson rounded-[24px] py-[32px] px-[24px] lg:px-[32px] transition-colors duration-300"
                >
                  <div className="text-crimson transition-colors duration-300 group-hover:text-white text-[64px] leading-none md:text-[145px] font-bold mb-8">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-[40px] leading-[48px] font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[18px] leading-[32px] font-normal mb-8">
                    {step.description}
                  </p>
                  {step.cta && (
                    <ButtonWithArrow href={step.ctaUrl} className="inline-flex" outline>
                      {step.cta}
                    </ButtonWithArrow>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}