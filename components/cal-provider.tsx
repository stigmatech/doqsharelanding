"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * CalProvider initializes Cal.com globally for the application
 * This ensures Cal.com is loaded once and available throughout the app
 */
export function CalProvider() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "doqshare" });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Failed to load Cal.com", error);
      }
    })();
  }, []);

  return null;
}

