// apps/web/src/lib/api.ts
import { supabase } from '@/integrations/supabase/client';

// Helper function to get auth token
async function getAuthToken(): Promise<string | null> {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token || null;
}

// Helper function to make authenticated API calls
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const token = await getAuthToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `HTTP ${response.status}`);
  }

  return response.json();
}

// API functions for each endpoint
export const api = {
  // Render API - main functionality
  async render(payload: { feature: string; payload: any; request_id?: string }) {
    return apiCall('/api/render', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // Referral system
  async claimReferral(referralCode: string) {
    return apiCall('/api/referral', {
      method: 'POST',
      body: JSON.stringify({ referral_code: referralCode }),
    });
  },

  // Feedback submission
  async submitFeedback(feedback: {
    type: string;
    message: string;
    rating?: number;
    metadata?: any;
  }) {
    return apiCall('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(feedback),
    });
  },

  // Analytics events
  async trackEvents(events: Array<{
    name: string;
    data?: any;
    timestamp?: string;
    session_id?: string;
  }>) {
    return apiCall('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({ events }),
    });
  },

  // Convenience method for single event tracking
  async trackEvent(name: string, data?: any) {
    return this.trackEvents([{
      name,
      data,
      timestamp: new Date().toISOString(),
      session_id: sessionStorage.getItem('session_id') || undefined,
    }]);
  },
};

// Export individual functions for convenience
export const { render, claimReferral, submitFeedback, trackEvents, trackEvent } = api;