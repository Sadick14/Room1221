import { type SafeReferralMatchingOutput } from '@/ai/flows/safe-referral-matching';

export type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
};

export type Recommendation = SafeReferralMatchingOutput['recommendations'][0];

export type Language = 'en' | 'tw' | 'ee' | 'ga';
