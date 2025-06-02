import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-12">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Decorative leaf */}
          <div className="absolute -top-8 -left-4">
            <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
              <path
                d="M40 0C60 20 80 40 70 80C60 100 40 120 20 100C0 80 0 40 20 20C30 10 35 0 40 0Z"
                fill="#1E5A5A"
                opacity="0.8"
              />
            </svg>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-amber-700 block">Capture</span>
            <span className="text-teal-800 block">the Wonder</span>
          </h1>

          <p className="text-lg text-amber-600 mb-8 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            Join Community
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-12">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Circular Image */}
        <div className="relative">
          <div className="relative w-96 h-96 mx-auto">
            {/* Main circular image */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/eb097b35-3aa5-4c4b-a88c-3339e70ebe98.png"
                alt="Lemur in nature"
                className="w-full h-full object-cover"
              />
            </div>

            {/* #naturephotography tag */}
            <div className="absolute bottom-8 right-4">
              <span className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg">
                #naturephotography
              </span>
            </div>

            {/* Social icons */}
            <div className="absolute top-4 right-4 flex space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src="https://cdn.poehali.dev/files/591f3693-16e0-48cd-9e76-d8e87ca294bd.png"
                  alt="Search"
                  className="w-6 h-6"
                />
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
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 0C310 0 400 90 400 200C400 310 310 400 200 400C90 400 0 310 0 200C0 90 90 0 200 0Z"
              fill="#D4AF37"
            />
          </svg>
        </div>

        {/* Additional curved shapes */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-15">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M150 0C233 0 300 67 300 150C300 233 233 300 150 300C67 300 0 233 0 150C0 67 67 0 150 0Z"
              fill="#1E5A5A"
            />
          </svg>
        </div>

        {/* Decorative leaf bottom right */}
        <div className="absolute bottom-12 right-12">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none">
            <path
              d="M50 0C70 25 100 50 85 100C70 125 50 140 25 125C0 100 0 50 25 25C37.5 12.5 43.75 0 50 0Z"
              fill="#1E5A5A"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
