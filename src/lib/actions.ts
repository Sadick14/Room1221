'use server';

import { multiLingualChat } from '@/ai/flows/multi-lingual-chat-support';
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
