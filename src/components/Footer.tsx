
import React from 'react';
import { CircleDollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rupeerise-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <CircleDollarSign className="h-6 w-6 text-rupeerise-gold" />
              <h3 className="text-xl font-bold">RupeeRise AI</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering Indians with AI-driven financial wisdom, making investment decisions simpler and more informed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Investment Products</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Financial Education</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Market News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Learn</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Investment Basics</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Stocks & Bonds</a></li>
              <li><a href="#" className="hover:text-rupeerise-gold transition-colors">Tax Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@rupeerise.com</li>
              <li>Phone: +91-9876543210</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-rupeerise-gold transition-colors">Twitter</a>
                  <a href="#" className="hover:text-rupeerise-gold transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-rupeerise-gold transition-colors">Instagram</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row md:justify-between">
          <p>© 2025 RupeeRise AI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-rupeerise-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rupeerise-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-rupeerise-gold transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
