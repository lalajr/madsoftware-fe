'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import Layout from "@/components/layout/Layout";
import { SectionHeading } from '@/components/atoms/SectionHeading';
import CareerContactSection from '@/components/molecules/CareerContactSection';
import { IconLinkedin } from '@/components/atoms/Icons';
import Link from 'next/link';
import { getPage } from '@/sanity/utils/page';
import { Page as PageType } from '@/types/Page';
import Page from '@/components/molecules/Page';
import { getSiteSettings } from '@/sanity/utils/settings';
import { SectionHeading as SectionHeadingType } from '@/types/SiteSettings';
import { TeamMember } from '@/types/Team';
import { getTeamMembers } from '@/sanity/utils/team';
export default function AboutUs() {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });

  const [page, setPage] = useState<PageType | null>(null);
  const [meetTheTeam, setMeetTheTeam] = useState<SectionHeadingType | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  
  useEffect(() => {
    const fetchPage = async () => {
        const page = await getPage('aboutUs');
        console.log(page);
        setPage(page);
    };
    fetchPage();

    const fetchSettings = async () => {
        const settings = await getSiteSettings();
        if (settings.meetTheTeam) {
            setMeetTheTeam(settings.meetTheTeam);
        }
    };
    fetchSettings();
    
    const fetchTeamMembers = async () => {
        const teamMembers = await getTeamMembers();
        console.log(teamMembers);
        setTeamMembers(teamMembers);
    };
    fetchTeamMembers();
  }, []);

  return (
    <Layout>
        {page && <Page page={page} />}

        {/* Team Section */}
        <section ref={teamRef} className="py-[48px] lg:py-[120px]">
            <div className="container min-w-container mx-auto px-4">
            <SectionHeading
                title={meetTheTeam?.title || ''}
                subtitle={meetTheTeam?.subtitle || ''}
            />

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, delay: 0.2 + (index * 0.3) }}
                    className="relative h-[562px] lg:h-[910px]"
                >
                    {/* Card Container */}
                    <div className="relative w-full h-[362px] lg:h-[600px] group">
                    {/* Card */}
                    <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        {/* Front */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden [backface-visibility:hidden] flex items-center justify-center">
                        <img
                            src={member.image.url}
                            alt={member.image.alt}
                            className="w-full h-full object-cover object-center"
                        />
                        </div>
                        
                        {/* Back */}
                        <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-crimson [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center p-8">
                        <p className="text-[18px] lg:text-[24px] text-white text-center">
                            {member.quote}
                        </p>
                        </div>
                    </div>
                    </div>
                    
                    {/* Info below card */}
                    <div className="mt-4 text-center lg:text-left text-white">
                    <h3 className="text-[40px] leading-[48px] font-bold mt-[48px]">{member.name}</h3>
                    <p className="text-[32px] leading-[41px] mt-[16px] lg:mt-[32px]">{member.role}</p>
                    <ul className="max-md:hidden flex justify-center lg:justify-start gap-4 mt-[32px]">
                        <li>
                            <Link href={member.linkedinUrl || ''} className="text-crimson hover:text-crimson/80 transition-colors">
                                <IconLinkedin className="w-[60px] h-[60px]"/>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="career-contact-section">
            <CareerContactSection />
        </section>
    </Layout>
  );
}
