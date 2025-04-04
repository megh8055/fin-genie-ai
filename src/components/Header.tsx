
import React from 'react';
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-8 w-8 text-rupeerise-green" />
          <h1 className="text-xl md:text-2xl font-bold text-rupeerise-blue">
            RupeeRise <span className="text-rupeerise-green">AI</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-rupeerise-blue transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rupeerise-blue transition-colors">Investments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rupeerise-blue transition-colors">Learn</a></li>
            </ul>
          </nav>
          <Button className="bg-rupeerise-blue hover:bg-rupeerise-blue/90 text-white">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
