
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface InvestmentProduct {
  id: number;
  name: string;
  category: string;
  returns: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  minInvestment: string;
  description: string;
}

const InvestmentProducts = () => {
  const { toast } = useToast();
  
  const products: InvestmentProduct[] = [
    {
      id: 1,
      name: "Bluechip Equity Fund",
      category: "Mutual Fund",
      returns: "12-15% (3Y)",
      riskLevel: "Medium",
      minInvestment: "₹500",
      description: "A fund that invests in established companies with strong track records."
    },
    {
      id: 2,
      name: "Government Bonds",
      category: "Debt",
      returns: "7-8% (Annual)",
      riskLevel: "Low",
      minInvestment: "₹1,000",
      description: "Government securities with guaranteed returns and high safety."
    },
    {
      id: 3,
      name: "Small Cap Growth Fund",
      category: "Mutual Fund",
      returns: "18-20% (3Y)",
      riskLevel: "High",
      minInvestment: "₹1,000",
      description: "Invests in smaller companies with high growth potential and higher risk."
    }
  ];

  const handleLearnMore = (product: InvestmentProduct) => {
    toast({
      title: product.name,
      description: `${product.description} Minimum investment: ${product.minInvestment}`,
    });
  };

  const getRiskColor = (risk: 'Low' | 'Medium' | 'High') => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return '';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <CircleDollarSign className="mr-2 h-5 w-5 text-rupeerise-gold" />
          Recommended Investments
        </CardTitle>
        <CardDescription>
          Investment products curated for different risk profiles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-rupeerise-blue">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                </div>
                <Badge className={getRiskColor(product.riskLevel)}>
                  {product.riskLevel} Risk
                </Badge>
              </div>
              
              <div className="mt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Expected Returns:</span>
                  <span className="font-medium">{product.returns}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">Min Investment:</span>
                  <span className="font-medium">{product.minInvestment}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-rupeerise-blue border-rupeerise-blue/50 hover:bg-rupeerise-blue/10"
                  onClick={() => handleLearnMore(product)}
                >
                  <Info className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentProducts;
