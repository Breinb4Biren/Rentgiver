
import { useState } from "react";
import { Menu, X, User, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">RentFinder</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Neighborhoods</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">For Landlords</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700">
              <Heart className="w-4 h-4 mr-2" />
              Saved
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              List Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Neighborhoods</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">For Landlords</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" className="justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Saved Properties
                  </Button>
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    List Property
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
