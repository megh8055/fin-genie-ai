
import React from 'react';
import Header from "@/components/Header";
import ChatInterface from "@/components/ChatInterface";
import MarketOverview from "@/components/MarketOverview";
import InvestmentProducts from "@/components/InvestmentProducts";
import FinancialEducation from "@/components/FinancialEducation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rupeerise-blue to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your AI Financial Assistant for Smart Investing
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Ask questions, get personalized advice, and make informed investment decisions with RupeeRise AI
              </p>
            </div>
          </div>
        </section>
        
        {/* Chat Interface */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ChatInterface />
            </div>
          </div>
        </section>
        
        {/* Market Overview */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <MarketOverview />
          </div>
        </section>
        
        {/* Investment Products */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <InvestmentProducts />
          </div>
        </section>
        
        {/* Financial Education */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <FinancialEducation />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-rupeerise-gold/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-rupeerise-blue mb-4">
                Start Your Investment Journey Today
              </h2>
              <p className="text-gray-600 mb-6">
                Join thousands of Indians who are making smarter financial decisions with RupeeRise AI
              </p>
              <button className="bg-rupeerise-green hover:bg-rupeerise-green/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Create Your Free Account
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
