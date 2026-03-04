"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function PricingCalculator() {
  const [users, setUsers] = useState(3);
  const [contractTerm, setContractTerm] = useState("1 month");
  const [dataRooms, setDataRooms] = useState("No Data Rooms");
  const [currency, setCurrency] = useState("USD");

  const calculatePrice = () => {
    let basePrice = 0;
    
    if (users <= 1) {
      basePrice = 0; // Free
    } else if (users <= 3) {
      basePrice = 24; // Pro
    } else if (users <= 10) {
      basePrice = 59; // Business
    } else {
      basePrice = 99; // Data Rooms
    }

    // Apply contract term discount
    if (contractTerm === "1 year") {
      basePrice = Math.round(basePrice * 0.65); // 35% discount
    } else if (contractTerm === "6 months") {
      basePrice = Math.round(basePrice * 0.85); // 15% discount
    }

    // Convert to selected currency
    if (currency === "USD") {
      basePrice = Math.round(basePrice * 1.08); // EUR to USD
    } else if (currency === "CAD") {
      basePrice = Math.round(basePrice * 1.46); // EUR to CAD
    }

    return basePrice;
  };

  const totalPrice = calculatePrice();
  const isYearly = contractTerm === "1 year";

  return (
    <div className="bg-gray-50 rounded-lg p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">DoQshare pricing calculator</h2>
        <p className="text-muted-foreground">
          Calculate right price for your team and understand how pricing is formed.
        </p>
        
        {/* Currency Toggle */}
        <div className="flex justify-center mt-4">
          <div className="bg-muted rounded-lg p-1 flex">
            <Button 
              variant={currency === "USD" ? "default" : "ghost"} 
              size="sm" 
              className="rounded-md"
              onClick={() => setCurrency("USD")}
            >
              USD
            </Button>
            <Button 
              variant={currency === "CAD" ? "default" : "ghost"} 
              size="sm" 
              className="rounded-md"
              onClick={() => setCurrency("CAD")}
            >
              CAD
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Controls */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Selected: {users} users</span>
                  <span className="text-sm font-medium">{users}</span>
                </div>
                <Slider
                  value={[users]}
                  onValueChange={(value) => setUsers(value[0] || 1)}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>10</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contract Term</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {["1 month", "6 months", "1 year"].map((term) => (
                  <Button
                    key={term}
                    variant={contractTerm === term ? "default" : "outline"}
                    size="sm"
                    onClick={() => setContractTerm(term)}
                    className="text-xs"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["No Data Rooms", "1 Data Room", "Unlimited Data Rooms"].map((option) => (
                  <Button
                    key={option}
                    variant={dataRooms === option ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDataRooms(option)}
                    className="w-full justify-start text-xs"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Display */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                {currency === "USD" ? "$" : currency === "CAD" ? "C$" : "€"}{totalPrice}
              </CardTitle>
              <p className="text-muted-foreground">
                /per month
                {isYearly && <span className="block text-sm">billed yearly</span>}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button size="lg" className="w-full" asChild>
                <a href="https://dashboard.doqshare.com">Get Started</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
