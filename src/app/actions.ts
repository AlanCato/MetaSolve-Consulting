'use server';

import { assessUnbanAppeal, type AssessUnbanAppealInput } from '@/ai/flows/assess-unban-appeal';

export async function runAssessUnbanAppeal(input: AssessUnbanAppealInput) {
  try {
    const result = await assessUnbanAppeal(input);
    return result;
  } catch (error) {
    console.error('Error in assessUnbanAppeal flow:', error);
    throw new Error('Failed to assess the appeal. Please try again later.');
  }
}
