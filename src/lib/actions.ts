'use server';

import { multiLingualChat } from '@/ai/flows/multi-lingual-chat-support';
import { safeReferralMatching } from '@/ai/flows/safe-referral-matching';
import { z } from 'zod';
import type { Language } from './definitions';

const ChatSchema = z.object({
  message: z.string(),
  language: z.enum(['en', 'tw', 'ee', 'ga']),
});

export async function handleChat(formData: FormData) {
  try {
    const validatedData = ChatSchema.parse({
      message: formData.get('message'),
      language: formData.get('language'),
    });

    const result = await multiLingualChat({
      text: validatedData.message,
      language: validatedData.language as Language,
    });
    return { success: true, response: result.response };
  } catch (error) {
    console.error(error);
    return { success: false, response: 'An error occurred. Please try again.' };
  }
}

const ReferralSchema = z.object({
  needs: z.string().min(1, 'Needs are required'),
  location: z.string().min(1, 'Location is required'),
});

export async function findReferrals(
  prevState: any,
  formData: FormData
) {
  try {
    const validatedData = ReferralSchema.parse({
      needs: formData.get('needs'),
      location: formData.get('location'),
    });

    const result = await safeReferralMatching(validatedData);
    return { success: true, recommendations: result.recommendations, message: '' };
  } catch (error) {
    console.error(error);
    return { success: false, recommendations: [], message: 'An error occurred. Please check your input and try again.' };
  }
}
