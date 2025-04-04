
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book } from "lucide-react";

interface FinancialTerm {
  term: string;
  definition: string;
}

interface FinancialTip {
  title: string;
  content: string;
}

const FinancialEducation = () => {
  const beginnerTerms: FinancialTerm[] = [
    {
      term: "Mutual Fund",
      definition: "An investment vehicle that pools money from multiple investors to buy stocks, bonds, or other assets."
    },
    {
      term: "SIP (Systematic Investment Plan)",
      definition: "A method to invest a fixed amount regularly in mutual funds, typically monthly."
    },
    {
      term: "ELSS (Equity Linked Savings Scheme)",
      definition: "A type of mutual fund that invests primarily in equity and provides tax benefits under Section 80C."
    },
    {
      term: "PPF (Public Provident Fund)",
      definition: "A government-backed long-term savings scheme with tax benefits and guaranteed returns."
    }
  ];

  const intermediateTerms: FinancialTerm[] = [
    {
      term: "Asset Allocation",
      definition: "The strategy of dividing investments among different asset categories like stocks, bonds, and cash."
    },
    {
      term: "Dividend",
      definition: "A portion of a company's earnings distributed to shareholders, usually in cash."
    },
    {
      term: "Market Capitalization",
      definition: "The total value of a company's shares, calculated by multiplying the stock price by the number of outstanding shares."
    },
    {
      term: "P/E Ratio",
      definition: "Price-to-Earnings ratio compares a company's share price to its earnings per share."
    }
  ];

  const investmentTips: FinancialTip[] = [
    {
      title: "Start Early",
      content: "The earlier you start investing, the more time your money has to grow through compounding."
    },
    {
      title: "Diversify Your Portfolio",
      content: "Don't put all your eggs in one basket. Spread investments across different asset classes to reduce risk."
    },
    {
      title: "Invest Regularly",
      content: "Consistent investments through SIPs can help navigate market volatility and build wealth over time."
    },
    {
      title: "Keep Emergency Fund",
      content: "Before investing, build an emergency fund covering 3-6 months of expenses in a liquid account."
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Book className="mr-2 h-5 w-5 text-rupeerise-blue" />
          Financial Education
        </CardTitle>
        <CardDescription>
          Learn the basics of investing and personal finance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="terms">Financial Terms</TabsTrigger>
            <TabsTrigger value="tips">Investment Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="terms">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Beginner Terms</h3>
                <div className="space-y-3">
                  {beginnerTerms.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md">
                      <h4 className="font-medium text-rupeerise-blue">{item.term}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Intermediate Terms</h3>
                <div className="space-y-3">
                  {intermediateTerms.map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md">
                      <h4 className="font-medium text-rupeerise-blue">{item.term}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tips">
            <div className="space-y-3">
              {investmentTips.map((tip, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-md">
                  <h4 className="font-medium text-rupeerise-green">{tip.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{tip.content}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinancialEducation;
