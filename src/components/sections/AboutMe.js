import React from 'react';
import { ReactButton, ReactInfoItem, ReactStatCard, ReactSectionTitle } from '../shared';
import { images } from '../../constants/images';

export default function AboutMe() {
  return (
    <section id="about" className="py-5 sm:py-10">
      <div className="section-container">
      <ReactSectionTitle title="Biography" />
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Biography */}
            <div className="space-y-6">
              
              <div className="space-y-4 text-xl sm:text-2xl text-secondary">
                <p>
                  Self-introduction text paragraph 1.
                </p>
                <p>
                  Self-introduction text paragraph 2.
                </p>
              </div>
            </div>

            {/* Info and Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-4">
                <ReactInfoItem label="Name:" value="Wanzhen Li" />
                <ReactInfoItem label="Email:" value="wanzhenli@gmail.com" />
                <ReactInfoItem label="From:" value="Natick, MA" />
                <div className="mt-8 flex justify-center md:justify-start">
                  <ReactButton
                    variant="primary"
                    label="Download CV"
                    href="#"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 sm:place-items-start place-items-center w-full max-w-[600px]">
                <ReactStatCard number="5" label="Years of Experience" />
                <ReactStatCard number="90+" label="Happy Clients" />
                <ReactStatCard number="135+" label="Project Completed" />
                <ReactStatCard number="25" label="Get Awards" />
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src={images.about} 
              alt=""
              className="w-full max-w-[400px] mx-auto aspect-[3/4] object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 