"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Share, BarChart3, ArrowRight } from "lucide-react";

interface HowItWorksStepsProps {
  dictionary: {
    how_it_works_steps: {
      title: string;
      description: string;
      step1: { title: string; description: string; content: string };
      step2: { title: string; description: string; content: string };
      step3: { title: string; description: string; content: string };
    };
  };
}

export default function HowItWorksSteps({ dictionary }: HowItWorksStepsProps) {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{dictionary.how_it_works_steps.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {dictionary.how_it_works_steps.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <CardTitle className="text-2xl mb-3">{dictionary.how_it_works_steps.step1.title}</CardTitle>
                <CardDescription className="text-base">
                  {dictionary.how_it_works_steps.step1.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {dictionary.how_it_works_steps.step1.content}
                </p>
              </CardContent>
            </Card>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <CardTitle className="text-2xl mb-3">{dictionary.how_it_works_steps.step2.title}</CardTitle>
                <CardDescription className="text-base">
                  {dictionary.how_it_works_steps.step2.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {dictionary.how_it_works_steps.step2.content}
                </p>
              </CardContent>
            </Card>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <CardTitle className="text-2xl mb-3">{dictionary.how_it_works_steps.step3.title}</CardTitle>
                <CardDescription className="text-base">
                  {dictionary.how_it_works_steps.step3.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {dictionary.how_it_works_steps.step3.content}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-8">
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
          </div>
          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
            <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
