import React from 'react';
import { ReactButton, ReactInfoItem, ReactStatCard } from '../shared';
import { images } from '../../constants/images';

export default function AboutMe() {
  return (
    <section id="about" className="py-10 sm:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Biography */}
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-serif font-bold text-primary">Biography</h2>
              <div className="space-y-4 text-xl sm:text-2xl text-secondary">
                <p>
                  I am a web developer and web designer and I'm from Las Vegas. Allowing me to work on 
                  projects from concept until the very moment we hit publish. Unique layouts, integrations, 
                  and great typography are what I focus on when working on websites.
                </p>
                <p>
                  Delivering work within time and budget which meets client's requirements is our motto. 
                  lorem Ipsum has been the industry's standard dummy text ever since an unknown printer 
                  took a galley.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:place-items-start place-items-center">
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