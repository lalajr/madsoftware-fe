'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ButtonWithArrow } from '../atoms/ButtonWithArrow';
import { SectionHeading } from '../atoms/SectionHeading';
import { FormField } from '../atoms/FormField';
import { CareerContact } from '@/types/CareersContactForm';
import { getCareerContact } from '@/sanity/utils/contactForm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const CareerContactSection = ({ showCareers = true }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [careerContact, setCareerContact] = useState<CareerContact | null>(null);

  useEffect(() => {
    const fetchCareerContact = async () => {
      const careerContact = await getCareerContact();
      setCareerContact(careerContact);
    };
    fetchCareerContact();
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="pt-[48px] lg:pt-[120px]" ref={sectionRef}>
      {showCareers && (
        <div className="relative py-[67px] lg:pt-[238px] lg:pb-[60px] overflow-hidden">
          {/* Static Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-t-[52px] lg:rounded-t-[120px]"
            style={{
              backgroundImage: `url(${careerContact?.backgroundImage?.asset?.url || '/images/bepartofourteam.jpg'})`,
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="container min-w-container mx-auto px-4"
            >
              <h2 className="w-70 lg:w-100 mx-auto text-[64px] lg:text-[145px] tracking-[2px] leading-none bebas-neue font-bold text-white mb-4 lg:mb-8">
                {careerContact?.title?.mainText}
                <br />
                <span className="text-crimson">{careerContact?.title?.highlightedText}</span>
              </h2>
              <p className="text-[18px] leading-[24px] lg:text-[32px] lg:leading-[42px] text-white mb-8">
                {careerContact?.subtitle}
              </p>
              <ButtonWithArrow href={careerContact?.ctaButton?.link} className="inline-flex">
                {careerContact?.ctaButton?.text}
              </ButtonWithArrow>
            </motion.div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: showCareers ? 0.6 : 0 }}
        className="container min-w-container mx-auto px-4 py-[48px] lg:py-[120px]"
      >

        {/* Mobile Elements */}
        {/* Mobile Title */}
        <SectionHeading title="CONTACT US" subtitle="Get in touch to discuss your next big idea or project—we're here to help bring it to life." className="lg:hidden" />

        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Contact Image - Mobile */}
          <div className="h-[300px] lg:h-full order-1">
            <div className="relative w-full h-full overflow-hidden bg-crimson rounded-[32px]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: showCareers ? 0.8 : 0.2 }}
                src="/images/contactus.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-full flex flex-col order-2">
            
            {/* Desktop Title */}
            <SectionHeading 
              title={careerContact?.contactForm_title || ''} 
              subtitle={careerContact?.contactForm_subtitle || ''} 
              className="hidden lg:block"
            />

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form fields remain the same but with adjusted spacing for mobile */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: showCareers ? 1.1 : 0.5 }}
                className="space-y-6 lg:space-y-8"
              >
                <FormField
                  label="Name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  error={errors.name}
                  required
                />

                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  error={errors.email}
                  required
                />

                <FormField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />

                <FormField
                  label="Message"
                  id="message"
                  type="textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  error={errors.message}
                  required
                />

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: showCareers ? 1.5 : 0.9 }}
                >
                  <ButtonWithArrow type="submit" className="mx-auto lg:ml-0 block">
                    Submit
                  </ButtonWithArrow>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerContactSection; 