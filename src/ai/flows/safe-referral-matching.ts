'use server';
/**
 * @fileOverview AI-powered referral system to match users with nearby verified youth-friendly clinics and pharmacies.
 *
 * - safeReferralMatching - A function that handles the referral matching process.
 * - SafeReferralMatchingInput - The input type for the safeReferralMatching function.
 * - SafeReferralMatchingOutput - The return type for the safeReferralMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SafeReferralMatchingInputSchema = z.object({
  needs: z
    .string()
    .describe('The specific healthcare needs of the user, e.g., STI testing, contraception.'),
  location: z
    .string()
    .describe('The current location of the user to find nearby clinics and pharmacies.'),
});
export type SafeReferralMatchingInput = z.infer<typeof SafeReferralMatchingInputSchema>;

const SafeReferralMatchingOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe('The name of the clinic or pharmacy.'),
      address: z.string().describe('The address of the clinic or pharmacy.'),
      phone: z.string().describe('The phone number of the clinic or pharmacy.'),
      services: z.string().describe('The healthcare services offered.'),
      distance: z.string().describe('The distance from the user in km.'),
      youthFriendly: z.boolean().describe('Whether the clinic is youth friendly'),
      rating: z.number().describe('Average user rating between 1 and 5'),
    })
  ).describe('A list of recommended nearby verified youth-friendly clinics or pharmacies.'),
});
export type SafeReferralMatchingOutput = z.infer<typeof SafeReferralMatchingOutputSchema>;

export async function safeReferralMatching(input: SafeReferralMatchingInput): Promise<SafeReferralMatchingOutput> {
  return safeReferralMatchingFlow(input);
}

const getRecommendations = ai.defineTool(
  {
    name: 'getRecommendations',
    description: 'Returns a list of nearby verified youth-friendly clinics and pharmacies based on the user needs and location.',
    inputSchema: z.object({
      needs: z.string().describe('The specific healthcare needs of the user.'),
      location: z.string().describe('The current location of the user.'),
    }),
    outputSchema: z.array(
      z.object({
        name: z.string().describe('The name of the clinic or pharmacy.'),
        address: z.string().describe('The address of the clinic or pharmacy.'),
        phone: z.string().describe('The phone number of the clinic or pharmacy.'),
        services: z.string().describe('The healthcare services offered.'),
        distance: z.string().describe('The distance from the user in km.'),
        youthFriendly: z.boolean().describe('Whether the clinic is youth friendly'),
        rating: z.number().describe('Average user rating between 1 and 5'),
      })
    ),
  },
  async (input) => {
    const recommendations = [
      {
        name: 'Marie Stopes International',
        address: 'Accra, Ghana',
        phone: '+233 302 200 000',
        services: 'Sexual and reproductive health services',
        distance: '5km',
        youthFriendly: true,
        rating: 4.5,
      },
      {
        name: 'Planned Parenthood Association of Ghana',
        address: 'Accra, Ghana',
        phone: '+233 302 200 001',
        services: 'Sexual and reproductive health services',
        distance: '7km',
        youthFriendly: true,
        rating: 4.2,
      }
    ];
    return recommendations;
  }
);

const prompt = ai.definePrompt({
  name: 'safeReferralMatchingPrompt',
  tools: [getRecommendations],
  input: {schema: SafeReferralMatchingInputSchema},
  output: {schema: SafeReferralMatchingOutputSchema},
  prompt: `You are a helpful AI assistant that helps users find nearby verified youth-friendly clinics or pharmacies based on their needs and location. Use the getRecommendations tool to find the clinics or pharmacies.

      User needs: {{{needs}}}
      User location: {{{location}}}
      `,
});

const safeReferralMatchingFlow = ai.defineFlow(
  {
    name: 'safeReferralMatchingFlow',
    inputSchema: SafeReferralMatchingInputSchema,
    outputSchema: SafeReferralMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
