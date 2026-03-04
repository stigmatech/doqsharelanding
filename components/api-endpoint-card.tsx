"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ApiEndpointCardProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  title: string;
  description: string;
  baseUrl?: string;
  queryParams?: Record<string, string>;
  requestBody?: Record<string, string>;
  responseExample?: string;
  lang?: string;
}

const methodColors = {
  GET: "bg-blue-50 text-blue-700 border-blue-200",
  POST: "bg-green-50 text-green-700 border-green-200",
  PUT: "bg-yellow-50 text-yellow-700 border-yellow-200",
  DELETE: "bg-red-50 text-red-700 border-red-200",
  PATCH: "bg-purple-50 text-purple-700 border-purple-200",
};

export function ApiEndpointCard({
  method,
  path,
  title,
  description,
  baseUrl = "https://api.doqshare.com/v1",
  queryParams,
  requestBody,
  responseExample,
  lang = "en",
}: ApiEndpointCardProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = `${baseUrl}${path}`;
  const copyText = `curl -X ${method} "${fullUrl}" \\\n  -H "Authorization: Bearer YOUR_API_KEY"`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className={methodColors[method]}>
                {method}
              </Badge>
              <CardTitle className="text-xl">{title}</CardTitle>
            </div>
            <CardDescription className="font-mono text-sm mt-2">{path}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCopy}
            aria-label={lang === "fr" ? "Copier" : "Copy"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Query Parameters */}
        {queryParams && Object.keys(queryParams).length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">
              {lang === "fr" ? "Paramètres de requête" : "Query Parameters"}
            </h4>
            <div className="bg-muted p-3 rounded-lg space-y-1">
              {Object.entries(queryParams).map(([key, value]) => (
                <div key={key} className="text-xs font-mono">
                  <span className="text-foreground font-semibold">{key}</span>
                  <span className="text-muted-foreground">: {value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Request Body */}
        {requestBody && Object.keys(requestBody).length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">
              {lang === "fr" ? "Corps de la requête" : "Request Body"}
            </h4>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <div className="text-foreground">{'{'}</div>
              {Object.entries(requestBody).map(([key, value], index, array) => (
                <div key={key} className="text-foreground ml-4">
                  <span className="text-blue-600 dark:text-blue-400">"{key}"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-green-600 dark:text-green-400">"{value}"</span>
                  {index < array.length - 1 && <span>,</span>}
                </div>
              ))}
              <div className="text-foreground">{'}'}</div>
            </div>
          </div>
        )}

        {/* Example Request */}
        <div>
          <h4 className="text-sm font-semibold mb-2">
            {lang === "fr" ? "Exemple de requête" : "Example Request"}
          </h4>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-foreground">curl -X {method} \</div>
            <div className="text-foreground ml-4">"{fullUrl}" \</div>
            <div className="text-foreground ml-4">-H "Authorization: Bearer YOUR_API_KEY"</div>
          </div>
        </div>

        {/* Response Example */}
        {responseExample && (
          <div>
            <h4 className="text-sm font-semibold mb-2">
              {lang === "fr" ? "Exemple de réponse" : "Example Response"}
            </h4>
            <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
              <pre className="whitespace-pre-wrap text-foreground">{responseExample}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

