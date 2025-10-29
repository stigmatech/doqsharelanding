import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Upload, Share, BarChart3, ArrowRight } from "lucide-react";

export default function HowItWorksSteps() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with DoqShare in three simple steps. From upload to insights, 
            we make document sharing secure and trackable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">1. Upload Your Documents</CardTitle>
                <CardDescription>
                  Drag and drop your files or upload from your computer, Google Drive, or Dropbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Support for PDFs, Word docs, PowerPoint presentations, and more. 
                  Files are automatically optimized for sharing.
                </p>
              </CardContent>
            </Card>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">2. Share Securely</CardTitle>
                <CardDescription>
                  Create secure links with custom permissions, passwords, and expiration dates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Control who can access your documents, when they expire, 
                  and what actions viewers can take.
                </p>
              </CardContent>
            </Card>
            
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <ArrowRight className="h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <Card className="text-center h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">3. Track & Analyze</CardTitle>
                <CardDescription>
                  Get detailed insights on who viewed your documents and for how long
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  See page-by-page analytics, download tracking, and engagement metrics 
                  to optimize your document strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-8">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <ArrowRight className="h-4 w-4 text-gray-600 rotate-90" />
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <ArrowRight className="h-4 w-4 text-gray-600 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
