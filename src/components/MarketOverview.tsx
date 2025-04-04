
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";

const MarketOverview = () => {
  // Simulated market data
  const marketIndices = [
    { 
      name: "NIFTY 50", 
      value: "22,402.50", 
      change: "+0.52%", 
      isPositive: true 
    },
    { 
      name: "SENSEX", 
      value: "73,648.62", 
      change: "+0.48%", 
      isPositive: true 
    },
    { 
      name: "BANK NIFTY", 
      value: "47,850.15", 
      change: "-0.23%", 
      isPositive: false 
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-rupeerise-green" />
          Market Overview
        </CardTitle>
        <CardDescription>
          Current market performance at a glance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {marketIndices.map((index, i) => (
            <div 
              key={i} 
              className="flex flex-col p-4 rounded-lg border border-gray-200 hover:border-rupeerise-blue/50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-500">{index.name}</span>
              <span className="text-xl font-bold mt-1">{index.value}</span>
              <div className={`flex items-center mt-2 ${index.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {index.isPositive ? 
                  <ArrowUp className="h-4 w-4 mr-1" /> : 
                  <ArrowDown className="h-4 w-4 mr-1" />
                }
                <span className="text-sm font-medium">{index.change}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          * Market data is simulated and for demonstration purposes only
        </p>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
