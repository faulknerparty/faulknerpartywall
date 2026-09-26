/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  ShieldAlert,
  Scale,
  FileCheck2,
  Home as HomeIcon,
} from 'lucide-react';
import heroPropertyImg from './assets/images/uk_terraced_homes_hero_1790422192613.jpg';
import plansPropertyImg from './assets/images/party_wall_architectural_plans_1790422208934.jpg';

const LINKS = {
  home: 'https://faulknersurveyors.co.uk/',
  aboutUs: 'https://faulknersurveyors.co.uk/about-us/',
  contactUs: 'https://faulknersurveyors.co.uk/contact-us/',
  faqs: 'https://faulknersurveyors.co.uk/faqs/',
  homeownerBeware: 'https://faulknersurveyors.co.uk/homeowner-beware/',
  adjoiningOwner: 'https://faulknersurveyors.co.uk/i-am-the-adjoining-owner/',
  surveyorCost: 'https://faulknersurveyors.co.uk/party-wall-surveyor-cost/',
  whyAgreement: 'https://faulknersurveyors.co.uk/why-get-a-party-wall-agreement/',
  removingChimney: 'https://faulknersurveyors.co.uk/removing-a-chimney/',
  call: 'tel:03300100262',
} as const;

const LOGO_URL = 'https://faulknersurveyors.co.uk/wp-content/uploads/2024/06/faulkner-logo.webp';

interface ServiceItem {
  label: string;
  href: string;
  summary: string;
}

const SERVICE_DROPDOWN_ITEMS: ServiceItem[] = [
  {
    label: 'Adjoining Owner',
    href: LINKS.adjoiningOwner,
    summary: 'Guidance if you have received a Party Wall Notice from a neighbour.',
  },
  {
    label: 'Removing a Chimney',
    href: LINKS.removingChimney,
    summary: 'What you need to know before removing a shared chimney breast.',
  },
  {
    label: 'Party Wall Surveyor Cost',
    href: LINKS.surveyorCost,
    summary: 'How surveying fees are structured and who is responsible.',
  },
  {
    label: 'Why Get a Party Wall Agreement',
    href: LINKS.whyAgreement,
    summary: 'Protecting both properties and neighbourly relations under the Act.',
  },
  {
    label: 'Homeowner Beware',
    href: LINKS.homeownerBeware,
    summary: 'How to spot misleading letters and unregulated party wall advice.',
  },
];

const COMPACT_CARDS = [
  {
    index: '01',
    kicker: 'Structural Alterations',
    title: 'Removing a Chimney',
    description:
      'Planning to remove a chimney breast attached to a shared wall? Understand notice requirements, structural considerations, and how to protect both homes.',
    ctaLabel: 'Read chimney guidance',
    href: LINKS.removingChimney,
  },
  {
    index: '02',
    kicker: 'Fee Guidance',
    title: 'Surveyor Cost',
    subtitle: 'Party Wall Surveyor Cost',
    description:
      'Clear information on how party wall surveyor costs work, why building owners normally cover reasonable fees, and how to keep expenses sensible.',
    ctaLabel: 'View cost guidance',
    href: LINKS.surveyorCost,
  },
  {
    index: '03',
    kicker: 'Statutory Protection',
    title: 'Party Wall Agreement',
    subtitle: 'Why Get a Party Wall Agreement',
    description:
      'Discover why a formal Party Wall Agreement and Schedule of Condition safeguard building plans and prevent avoidable disputes between neighbours.',
    ctaLabel: 'Why get an agreement',
    href: LINKS.whyAgreement,
  },
];

function BrandLogo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={LINKS.home}
      className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
      aria-label="Faulkner Party Wall Surveyors — Home"
    >
      {!imgFailed ? (
        <span
          className={`inline-flex items-center rounded px-2.5 py-1.5 transition-opacity duration-150 group-hover:opacity-90 ${
            variant === 'header'
              ? 'bg-[#0D1B2A]'
              : 'bg-[#0D1B2A] border border-white/10'
          }`}
        >
          <img
            src={LOGO_URL}
            alt="Faulkner Party Wall Surveyors"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </span>
      ) : (
        <span
          className={`font-display text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap ${
            variant === 'header' ? 'text-[#0D1B2A]' : 'text-[#F9F7F2]'
          }`}
        >
          Faulkner <span className="font-normal text-[#B68D40]">Party Wall Surveyors</span>
        </span>
      )}
    </a>
  );
}

export default function App() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [heroImgError, setHeroImgError] = useState(false);
  const [plansImgError, setPlansImgError] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#0D1B2A]">
      {/* Header — Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E2DDD2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand */}
          <BrandLogo variant="header" />

          {/* Zone 2: Primary Navigation (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#1E2F42]"
          >
            <a
              href={LINKS.home}
              className="py-1 whitespace-nowrap hover:text-[#0D1B2A] border-b-2 border-transparent hover:border-[#B68D40] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
            >
              Home
            </a>

            <a
              href={LINKS.aboutUs}
              className="py-1 whitespace-nowrap hover:text-[#0D1B2A] border-b-2 border-transparent hover:border-[#B68D40] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 py-1 whitespace-nowrap cursor-pointer hover:text-[#0D1B2A] border-b-2 border-transparent hover:border-[#B68D40] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B68D40] transition-transform duration-150 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  aria-label="Party Wall Services"
                  className="absolute left-0 top-full pt-2 w-80 z-50"
                >
                  <div className="bg-[#FFFFFF] border border-[#DCD6C8] rounded-md shadow-lg py-2 divide-y divide-[#EFECE4]">
                    {SERVICE_DROPDOWN_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-3 hover:bg-[#F9F7F2] transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#B68D40]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-[#0D1B2A] group-hover:text-[#8C6928] transition-colors">
                            {item.label}
                          </span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5 text-[#B68D40] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 shrink-0"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="text-xs text-[#4A5B6E] mt-0.5 leading-relaxed">
                          {item.summary}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={LINKS.faqs}
              className="py-1 whitespace-nowrap hover:text-[#0D1B2A] border-b-2 border-transparent hover:border-[#B68D40] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
            >
              FAQs
            </a>

            <a
              href={LINKS.contactUs}
              className="py-1 whitespace-nowrap hover:text-[#0D1B2A] border-b-2 border-transparent hover:border-[#B68D40] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B68D40]"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={LINKS.call}
              className="inline-flex items-center gap-2 bg-[#0D1B2A] hover:bg-[#182D44] text-[#F9F7F2] text-sm font-semibold px-4 py-2.5 rounded transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              <span>Call Us</span>
              <span className="hidden xl:inline text-[#C5A059] font-normal tabular-nums">
                · 03300 100 262
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded border border-[#D5CFC2] text-[#0D1B2A] hover:bg-[#EFECE4] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile-Friendly Navigation Drawer with Accordion Services Dropdown */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            className="lg:hidden bg-[#FFFFFF] border-b border-[#DCD6C8] px-4 pt-3 pb-6 space-y-1 shadow-lg max-h-[82vh] overflow-y-auto"
          >
            <a
              href={LINKS.home}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded text-base font-medium text-[#0D1B2A] hover:bg-[#F9F7F2]"
            >
              <span>Home</span>
            </a>

            <a
              href={LINKS.aboutUs}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded text-base font-medium text-[#0D1B2A] hover:bg-[#F9F7F2]"
            >
              <span>About Us</span>
            </a>

            {/* Mobile Services Dropdown */}
            <div className="border-y border-[#EFECE4] py-1 my-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between py-3 px-3 rounded text-base font-semibold text-[#0D1B2A] hover:bg-[#F9F7F2] cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B68D40] transition-transform duration-150 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 pb-2 space-y-1">
                  {SERVICE_DROPDOWN_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 rounded hover:bg-[#F9F7F2] border-l-2 border-[#B68D40]/40 hover:border-[#B68D40] transition-colors"
                    >
                      <div className="text-sm font-semibold text-[#0D1B2A]">
                        {item.label}
                      </div>
                      <div className="text-xs text-[#4A5B6E] mt-0.5">
                        {item.summary}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={LINKS.faqs}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded text-base font-medium text-[#0D1B2A] hover:bg-[#F9F7F2]"
            >
              <span>FAQs</span>
            </a>

            <a
              href={LINKS.contactUs}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded text-base font-medium text-[#0D1B2A] hover:bg-[#F9F7F2]"
            >
              <span>Contact Us</span>
            </a>

            <div className="pt-3">
              <a
                href={LINKS.call}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0D1B2A] text-[#F9F7F2] text-sm font-semibold py-3 px-4 rounded hover:bg-[#182D44] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                <span>Call Us · 03300 100 262</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#E2DDD2] bg-gradient-to-b from-[#F9F7F2] to-[#F2EFE7]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Hero Headline, Copy for Property Owners & Neighbours, CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#63512D]">
                  <span>Party Wall etc. Act 1996</span>
                  <span aria-hidden="true">·</span>
                  <span>Building Owners &amp; Adjoining Neighbours</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-semibold text-[#0D1B2A] leading-[1.12] tracking-tight">
                  Clear party wall advice for your property plans.
                </h1>

                <p className="text-base sm:text-lg text-[#2C3E50] leading-relaxed max-w-[64ch]">
                  Whether you are a homeowner planning building works—such as an extension, loft
                  conversion, or chimney removal—or an adjoining neighbour who has received a
                  Party Wall Notice, Faulkner Party Wall Surveyors provides straightforward,
                  impartial guidance to protect both properties.
                </p>

                {/* Primary Hero Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-1">
                  <a
                    href={LINKS.call}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#0D1B2A] hover:bg-[#182D44] text-[#F9F7F2] text-sm sm:text-[15px] font-semibold px-6 py-3.5 rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                  >
                    <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                    <span>Speak to a Surveyor</span>
                  </a>

                  <a
                    href={LINKS.adjoiningOwner}
                    className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#EFECE4] text-[#0D1B2A] border border-[#C6BFA8] text-sm sm:text-[15px] font-semibold px-6 py-3.5 rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                  >
                    <span>I’m an Adjoining Owner</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C6928]" aria-hidden="true" />
                  </a>
                </div>

                {/* Tailored Brief Copy for Both Audiences */}
                <div className="pt-6 border-t border-[#DED8C8] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-sans text-sm font-semibold text-[#0D1B2A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B68D40]" aria-hidden="true" />
                      <span>For Property Owners Planning Work</span>
                    </h2>
                    <p className="mt-1.5 text-sm text-[#415264] leading-relaxed">
                      Serve valid notices on time and put clear agreements in place so your
                      extension, loft, or structural alteration proceeds without avoidable delays.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sans text-sm font-semibold text-[#0D1B2A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B2A]" aria-hidden="true" />
                      <span>For Adjoining Neighbours</span>
                    </h2>
                    <p className="mt-1.5 text-sm text-[#415264] leading-relaxed">
                      Received a notice next door? Understand your options clearly and ensure your
                      home is safeguarded with a formal Schedule of Condition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: UK Residential Property Imagery */}
              <div className="lg:col-span-5">
                <div className="relative rounded-md overflow-hidden border border-[#D5CFC2] bg-[#0D1B2A]">
                  {!heroImgError ? (
                    <img
                      src={heroPropertyImg}
                      alt="Classic British brick terraced and semi-detached residential homes with shared party walls and chimney stacks"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgError(true)}
                      className="w-full aspect-[4/3] object-cover block"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#0D1B2A] via-[#162B42] to-[#233B54] flex flex-col items-center justify-center p-8 text-center text-[#F9F7F2]">
                      <HomeIcon className="w-10 h-10 text-[#C5A059] mb-3" aria-hidden="true" />
                      <p className="font-display text-lg">UK Residential Party Wall Specialists</p>
                      <p className="text-xs text-[#C7D0D9] mt-1">
                        Practical advice for terraced, semi-detached, and detached homes
                      </p>
                    </div>
                  )}

                  {/* Subtle architectural caption bar */}
                  <div className="bg-[#0D1B2A] text-[#F9F7F2] px-5 py-4 border-t border-[#C5A059]/30 flex items-center justify-between gap-4">
                    <div className="text-xs sm:text-[13px] text-[#DCE2E9]">
                      <span className="font-semibold text-[#FFFFFF]">Direct Surveyor Advice</span>
                      <span className="mx-2 text-[#C5A059]" aria-hidden="true">·</span>
                      <span>Extensions, Lofts &amp; Shared Walls</span>
                    </div>
                    <a
                      href={LINKS.call}
                      className="text-xs font-semibold text-[#C5A059] hover:text-[#E5C478] whitespace-nowrap tabular-nums transition-colors"
                    >
                      03300 100 262
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Compact Linked Cards Section */}
        <section
          aria-labelledby="essential-guides-heading"
          className="py-14 sm:py-18 bg-[#F9F7F2] border-b border-[#E2DDD2]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-medium text-[#7A6030]">
                  Essential Party Wall Guidance
                </p>
                <h2
                  id="essential-guides-heading"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B2A] mt-1"
                >
                  Key considerations before work begins
                </h2>
              </div>
              <a
                href={LINKS.faqs}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D1B2A] hover:text-[#8C6928] transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>Browse Frequently Asked Questions</span>
                <ArrowUpRight className="w-4 h-4 text-[#B68D40]" aria-hidden="true" />
              </a>
            </div>

            {/* 3 Compact Linked Cards: Removing a Chimney, Surveyor Cost, Party Wall Agreement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPACT_CARDS.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col justify-between bg-[#FFFFFF] border border-[#DCD6C8] hover:border-[#0D1B2A] rounded-md p-6 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B68D40]"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#6B7A8C] mb-3">
                      <span className="font-mono font-semibold text-[#8C6928] tabular-nums">
                        {card.index}
                      </span>
                      <span>{card.kicker}</span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-[#0D1B2A] group-hover:text-[#8C6928] transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[#3E4F61] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EFECE4] flex items-center justify-between text-sm font-semibold text-[#0D1B2A]">
                    <span>{card.ctaLabel}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#B68D40] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Secondary Notice Strip: Adjoining Owner & Homeowner Beware */}
            <div className="mt-6 bg-[#F2EFE7] border border-[#DCD6C8] rounded-md p-5 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <ShieldAlert
                  className="w-5 h-5 text-[#8C6928] shrink-0 mt-0.5 sm:mt-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-[#2C3E50]">
                  <span className="font-semibold text-[#0D1B2A]">
                    Received an unexpected party wall letter?
                  </span>{' '}
                  Read our{' '}
                  <a
                    href={LINKS.homeownerBeware}
                    className="font-semibold text-[#0D1B2A] underline decoration-[#B68D40] underline-offset-4 hover:text-[#8C6928]"
                  >
                    Homeowner Beware
                  </a>{' '}
                  guide or our dedicated{' '}
                  <a
                    href={LINKS.adjoiningOwner}
                    className="font-semibold text-[#0D1B2A] underline decoration-[#B68D40] underline-offset-4 hover:text-[#8C6928]"
                  >
                    Adjoining Owner
                  </a>{' '}
                  resource before signing anything.
                </p>
              </div>

              <a
                href={LINKS.homeownerBeware}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D1B2A] hover:text-[#8C6928] whitespace-nowrap shrink-0"
              >
                <span>Homeowner Beware Guide</span>
                <ArrowUpRight className="w-4 h-4 text-[#B68D40]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Short "Why Faulkner?" Section */}
        <section
          aria-labelledby="why-faulkner-heading"
          className="py-14 sm:py-20 bg-[#FFFFFF] border-b border-[#E2DDD2]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Why Faulkner Copy & Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-medium text-[#7A6030]">
                  <span>Our Approach</span>
                  <span aria-hidden="true">·</span>
                  <span>Practical Surveying</span>
                </div>

                <h2
                  id="why-faulkner-heading"
                  className="font-display text-2xl sm:text-4xl font-semibold text-[#0D1B2A] tracking-tight"
                >
                  Why Faulkner?
                </h2>

                <p className="text-base text-[#2C3E50] leading-relaxed max-w-[62ch]">
                  Party wall procedures are meant to resolve potential issues constructively—not
                  slow down residential projects or create friction between neighbours. At Faulkner
                  Party Wall Surveyors, we focus on clear guidance and reasonable costs so every
                  party knows where they stand.
                </p>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded bg-[#F9F7F2] border border-[#DCD6C8] flex items-center justify-center shrink-0 mt-0.5">
                      <FileCheck2 className="w-4 h-4 text-[#8C6928]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-[#0D1B2A]">
                        Clear, Jargon-Free Guidance
                      </h3>
                      <p className="text-sm text-[#415264] mt-1 leading-relaxed">
                        We explain the Party Wall etc. Act 1996 in plain English, helping building
                        owners serve accurate notices and helping neighbours understand their rights
                        without unnecessary complexity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded bg-[#F9F7F2] border border-[#DCD6C8] flex items-center justify-center shrink-0 mt-0.5">
                      <Scale className="w-4 h-4 text-[#8C6928]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-[#0D1B2A]">
                        Reasonable, Proportionate Costs
                      </h3>
                      <p className="text-sm text-[#415264] mt-1 leading-relaxed">
                        We believe surveying fees should remain sensible and proportionate to the
                        planned works. Our straightforward approach avoids unnecessary delays while
                        ensuring thorough protection for both homes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={LINKS.aboutUs}
                    className="inline-flex items-center gap-2 bg-[#0D1B2A] hover:bg-[#182D44] text-[#F9F7F2] text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>About Us</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                  </a>

                  <a
                    href={LINKS.surveyorCost}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D1B2A] hover:text-[#8C6928] px-2 py-2 transition-colors whitespace-nowrap"
                  >
                    <span>Learn about Party Wall Surveyor Cost</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B68D40]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Column: Architectural Plans Imagery */}
              <div className="lg:col-span-5">
                <div className="rounded-md overflow-hidden border border-[#DCD6C8] bg-[#F9F7F2]">
                  {!plansImgError ? (
                    <img
                      src={plansPropertyImg}
                      alt="Residential structural building plans and surveyor scale ruler on a timber table"
                      referrerPolicy="no-referrer"
                      onError={() => setPlansImgError(true)}
                      className="w-full aspect-[4/3] object-cover block"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-[#F2EFE7] flex flex-col items-center justify-center p-8 text-center">
                      <Scale className="w-10 h-10 text-[#8C6928] mb-3" aria-hidden="true" />
                      <p className="font-display text-lg text-[#0D1B2A]">
                        Impartial Party Wall Surveying
                      </p>
                      <p className="text-xs text-[#4A5B6E] mt-1">
                        Clear documentation and Schedules of Condition
                      </p>
                    </div>
                  )}

                  <div className="p-5 bg-[#F9F7F2] border-t border-[#E2DDD2]">
                    <p className="text-xs text-[#415264] leading-relaxed">
                      Have questions before appointing a surveyor? Review our{' '}
                      <a
                        href={LINKS.faqs}
                        className="font-semibold text-[#0D1B2A] underline decoration-[#B68D40] underline-offset-4 hover:text-[#8C6928]"
                      >
                        FAQs
                      </a>{' '}
                      or speak directly with our team for straightforward initial advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Contact CTA Section with 03300 100 262 */}
        <section
          aria-labelledby="contact-cta-heading"
          className="bg-[#0D1B2A] text-[#F9F7F2] py-14 sm:py-18 border-b border-[#1E324A]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#C5A059] tracking-wide">
                  <span>Speak With Faulkner Party Wall Surveyors</span>
                </div>
                <h2
                  id="contact-cta-heading"
                  className="font-display text-2xl sm:text-4xl font-semibold text-[#FFFFFF] tracking-tight"
                >
                  Ready to discuss your property plans or party wall notice?
                </h2>
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  Call our team on{' '}
                  <a
                    href={LINKS.call}
                    className="font-semibold text-[#FFFFFF] underline decoration-[#C5A059] underline-offset-4 hover:text-[#C5A059] tabular-nums"
                  >
                    03300 100 262
                  </a>{' '}
                  for clear, practical advice, or visit our contact page to get in touch.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <a
                  href={LINKS.call}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-[#D4B06A] text-[#0D1B2A] text-sm sm:text-base font-semibold px-6 py-3.5 rounded transition-colors duration-150 whitespace-nowrap tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFFFFF]"
                >
                  <Phone className="w-4 h-4 text-[#0D1B2A]" aria-hidden="true" />
                  <span>03300 100 262</span>
                </a>

                <a
                  href={LINKS.contactUs}
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-[#F9F7F2] border border-[#C5A059]/60 text-sm sm:text-base font-semibold px-6 py-3.5 rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#08111B] text-[#CBD5E1] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Brand & Telephone */}
            <div className="md:col-span-5 space-y-4">
              <BrandLogo variant="footer" />
              <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
                Clear party wall advice and practical surveying guidance for property owners and
                adjoining neighbours.
              </p>
              <div className="pt-1">
                <a
                  href={LINKS.call}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F9F7F2] hover:text-[#C5A059] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
                  <span>03300 100 262</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-2.5">
              <h3 className="font-sans text-xs font-semibold text-[#C5A059] tracking-wide">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={LINKS.home} className="hover:text-[#FFFFFF] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href={LINKS.aboutUs} className="hover:text-[#FFFFFF] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href={LINKS.faqs} className="hover:text-[#FFFFFF] transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href={LINKS.contactUs} className="hover:text-[#FFFFFF] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="md:col-span-4 space-y-2.5">
              <h3 className="font-sans text-xs font-semibold text-[#C5A059] tracking-wide">
                Services &amp; Guides
              </h3>
              <ul className="space-y-2 text-sm">
                {SERVICE_DROPDOWN_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-[#FFFFFF] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>© {new Date().getFullYear()} Faulkner Party Wall Surveyors. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href={LINKS.home} className="hover:text-[#CBD5E1] transition-colors">
                faulknersurveyors.co.uk
              </a>
              <span aria-hidden="true">·</span>
              <a href={LINKS.call} className="hover:text-[#CBD5E1] transition-colors tabular-nums">
                03300 100 262
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
