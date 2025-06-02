import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Decorative leaf */}
          <div className="relative">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              className="absolute -top-4 -left-4 text-teal-600"
            >
              <path
                d="M10 30C10 15 20 5 35 5C50 5 75 15 75 30C75 45 50 55 35 55C20 55 10 45 10 30Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M35 5L35 55"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-amber-700">Capture</span>
              <br />
              <span className="text-teal-700">the Wonder</span>
            </h1>

            <p className="text-lg text-amber-700 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
              Join Community
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-amber-700 hover:text-amber-800 transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="#"
              className="text-amber-700 hover:text-amber-800 transition-colors"
            >
              <Icon name="Facebook" size={24} />
            </a>
            <a
              href="#"
              className="text-amber-700 hover:text-amber-800 transition-colors"
            >
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - Circular Image */}
        <div className="relative">
          <div className="relative w-96 h-96 mx-auto">
            {/* Main circular image */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/f7855af1-cd41-40c8-a02e-dccd23bafff9.png"
                alt="Lemur in nature"
                className="w-full h-full object-cover"
              />
            </div>

            {/* #naturephotography tag */}
            <div className="absolute bottom-8 right-4">
              <span className="bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg">
                #naturephotography
              </span>
            </div>

            {/* Floating action buttons */}
            <div className="absolute top-4 right-4 flex flex-col space-y-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Icon name="Search" size={20} className="text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Icon name="Heart" size={20} className="text-red-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Icon name="Share2" size={20} className="text-gray-600" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Icon name="Bookmark" size={20} className="text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Curved background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 0C310 0 400 90 400 200C400 310 310 400 200 400C90 400 0 310 0 200C0 90 90 0 200 0Z"
              fill="#D97706"
            />
          </svg>
        </div>

        {/* Additional curved shapes */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M150 0C233 0 300 67 300 150C300 233 233 300 150 300C67 300 0 233 0 150C0 67 67 0 150 0Z"
              fill="#0F766E"
            />
          </svg>
        </div>

        {/* Decorative leaf bottom right */}
        <div className="absolute bottom-12 right-12">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none">
            <path
              d="M50 0C70 25 100 50 85 100C70 125 50 140 25 125C0 100 0 50 25 25C37.5 12.5 43.75 0 50 0Z"
              fill="#0F766E"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Floating leaf decoration top left */}
        <div className="absolute top-32 left-16">
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            className="text-teal-600 opacity-20"
          >
            <path
              d="M30 0C40 15 60 30 50 60C40 75 30 80 15 75C0 60 0 30 15 15C22.5 7.5 26.25 0 30 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
