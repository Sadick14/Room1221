'use server';

/**
 * @fileOverview A multilingual chat support AI agent.
 *
 * - multiLingualChat - A function that handles the chat process and translates between languages.
 * - MultiLingualChatInput - The input type for the multiLingualChat function.
 * - MultiLingualChatOutput - The return type for the multiLingualChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SupportedLanguages = z.enum(['en', 'tw', 'ee', 'ga']);

const MultiLingualChatInputSchema = z.object({
  text: z.string().describe('The user message to be translated and processed.'),
  language: SupportedLanguages.describe('The language of the user message (en, tw, ee, ga).'),
});

export type MultiLingualChatInput = z.infer<typeof MultiLingualChatInputSchema>;

const MultiLingualChatOutputSchema = z.object({
  response: z.string().describe('The translated response from the chatbot.'),
});

export type MultiLingualChatOutput = z.infer<typeof MultiLingualChatOutputSchema>;

export async function multiLingualChat(input: MultiLingualChatInput): Promise<MultiLingualChatOutput> {
  return multiLingualChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multiLingualChatPrompt',
  input: {schema: MultiLingualChatInputSchema},
  output: {schema: MultiLingualChatOutputSchema},
  prompt: `You are a multilingual chatbot that can respond in English, Twi, Ewe, and Ga.

  The user will send a message in their preferred language, and you should respond in the same language.

  User Message: {{{text}}}
  Language: {{{language}}}
  Response: `,
});

const multiLingualChatFlow = ai.defineFlow(
  {
    name: 'multiLingualChatFlow',
    inputSchema: MultiLingualChatInputSchema,
    outputSchema: MultiLingualChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
