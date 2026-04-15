import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, User, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-[#1a1a2e] text-white py-2 px-4 flex items-center justify-center relative">
          <p className="text-sm">
            13+ Years of Excellence in Interior Design.{' '}
            <a href="#" className="text-[#c9a84c] hover:underline font-medium">
              Explore our work →
            </a>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Top Navigation */}
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/demaiz.jpg" alt="De Maizon Interiors & Constructions" className="h-12 w-auto" />
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Design Ideas <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Living Room</DropdownMenuItem>
                  <DropdownMenuItem>Bedroom</DropdownMenuItem>
                  <DropdownMenuItem>Kitchen</DropdownMenuItem>
                  <DropdownMenuItem>Bathroom</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Magazine <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Latest Trends</DropdownMenuItem>
                  <DropdownMenuItem>Home Decor</DropdownMenuItem>
                  <DropdownMenuItem>Design Tips</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Cities <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Bangalore</DropdownMenuItem>
                  <DropdownMenuItem>Mumbai</DropdownMenuItem>
                  <DropdownMenuItem>Delhi NCR</DropdownMenuItem>
                  <DropdownMenuItem>Hyderabad</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Projects
              </Link>

              <Link to="/store-locator" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Store Locator
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  More <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>About Us</DropdownMenuItem>
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                  <DropdownMenuItem>Careers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Link to="/shop-furnishings">
                <Button variant="outline" className="relative font-medium">
                  Shop Furnishings
                  <span className="absolute -top-2 -right-2 bg-[#4ade80] text-white text-xs px-2 py-0.5 rounded-full font-semibold">NEW</span>
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <nav className="hidden lg:flex items-center gap-8">
                <Link to="/how-it-works" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  How it works
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Offerings <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Modular Interiors</DropdownMenuItem>
                    <DropdownMenuItem>Full Home Interiors</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Price Calculators <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Kitchen Calculator</DropdownMenuItem>
                    <DropdownMenuItem>Wardrobe Calculator</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/modular-journey" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  The Modular Journey
                </Link>
                <Link to="/franchise" className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Own a franchise
                </Link>
              </nav>
              <Button className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-6 rounded-full">
                CONSULT ONLINE NOW
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

