"use client";

import { useState } from "react";

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface UseFormOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useForm(options: UseFormOptions = {}) {
  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submitForm = async (url: string, data: any) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Une erreur est survenue');
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      
      if (options.onSuccess) {
        options.onSuccess(result);
      }

      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      
      if (options.onError) {
        options.onError(errorMessage);
      }
      
      throw error;
    }
  };

  const resetForm = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null });
  };

  return {
    ...state,
    submitForm,
    resetForm,
  };
}
