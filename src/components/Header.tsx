import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-4 h-6 bg-amber-700 rounded-full transform rotate-12"></div>
            <div className="w-4 h-6 bg-amber-700 rounded-full transform -rotate-12"></div>
          </div>
          <span className="text-2xl font-medium text-amber-700">
            wildlife.co
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 transition-colors"
          >
            Registration
          </a>
          <a
            href="#"
            className="text-amber-700 hover:text-amber-800 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2 bg-amber-100 rounded-full border-none outline-none text-amber-800 placeholder-amber-600"
          />
          <Icon
            name="Search"
            className="absolute right-3 top-2.5 w-5 h-5 text-amber-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
