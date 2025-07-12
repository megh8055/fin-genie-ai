'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Add Skills You Can Teach",
      description: "Share your expertise with others by listing the skills you're confident teaching.",
      icon: "ri-graduation-cap-line",
      color: "text-blue-600 bg-blue-50",
      details: "Include everything from technical skills like programming to creative abilities like painting or music."
    },
    {
      id: 2,
      title: "List Skills You Want to Learn",
      description: "Tell us what new abilities you'd like to develop through skill exchanges.",
      icon: "ri-book-open-line",
      color: "text-green-600 bg-green-50", 
      details: "Be specific about what interests you - this helps us find the perfect learning partners."
    },
    {
      id: 3,
      title: "Set Experience Level Per Skill",
      description: "Help others understand your proficiency level for better matching.",
      icon: "ri-bar-chart-line",
      color: "text-purple-600 bg-purple-50",
      details: "Choose from Beginner, Intermediate, Advanced, or Expert for each skill you add."
    },
    {
      id: 4,
      title: "Choose Your Availability",
      description: "Set when you're free for skill exchanges to coordinate with others.",
      icon: "ri-calendar-check-line",
      color: "text-orange-600 bg-orange-50",
      details: "Select preferred days, times, and session lengths that work with your schedule."
    },
    {
      id: 5,
      title: "Set Profile Privacy",
      description: "Control who can see your profile and contact you for exchanges.",
      icon: "ri-shield-check-line",
      color: "text-pink-600 bg-pink-50",
      details: "Choose between public profile, visible to registered users, or private with manual approval."
    },
    {
      id: 6,
      title: "Start Swapping Skills",
      description: "Connect with like-minded learners and begin your skill exchange journey!",
      icon: "ri-rocket-line",
      color: "text-indigo-600 bg-indigo-50",
      details: "Browse available skills, send requests, and start learning from amazing people in our community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600 font-pacifico">logo</div>
            <Link 
              href="/swaps"
              className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer flex items-center space-x-1"
            >
              <span>Skip Setup</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
            <i className="ri-heart-3-line text-3xl text-white"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Learning Journey!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's get you set up in just a few minutes. Follow these simple steps to start connecting with amazing people and exchanging skills.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-time-line"></i>
              </div>
              <span>5 minutes setup</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-shield-check-line"></i>
              </div>
              <span>100% secure</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-user-heart-line"></i>
              </div>
              <span>Join 50K+ learners</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Getting Started Guide</span>
            <span className="text-sm text-gray-500">{steps.length} steps</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                index === currentStep 
                  ? 'border-blue-300 shadow-lg scale-105' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${step.color} flex-shrink-0`}>
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                  
                  {index === currentStep && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2">
                        <span>Start This Step</span>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-arrow-right-line"></i>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why You'll Love Skill Swapping</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-50 rounded-2xl">
                <i className="ri-community-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Amazing Community</h4>
              <p className="text-gray-600">Connect with passionate learners and teachers from around the world.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-green-50 rounded-2xl">
                <i className="ri-exchange-dollar-line text-2xl text-green-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Learning</h4>
              <p className="text-gray-600">Exchange skills without spending money - teach what you know, learn what you want.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-purple-50 rounded-2xl">
                <i className="ri-speed-up-line text-2xl text-purple-600"></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h4>
              <p className="text-gray-600">Learn at your own pace with flexible scheduling that fits your lifestyle.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already growing their skills through our amazing community. 
            Your next skill exchange is just a few clicks away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-user-add-line"></i>
              </div>
              <span>Complete Profile Setup</span>
            </button>
            <Link
              href="/swaps"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <span>Browse Skills First</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl flex-shrink-0">
              <i className="ri-lightbulb-line text-xl text-yellow-600"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pro Tips for Success</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Be specific about your skill levels - it helps find the right matches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Add a friendly profile photo to build trust with potential partners</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Set realistic availability to ensure smooth scheduling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Don't hesitate to reach out - our community is welcoming and supportive!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}