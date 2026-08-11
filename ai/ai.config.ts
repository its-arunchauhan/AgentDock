import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is required");
  }

  const modelId = process.env.OPENROUTER_DEFAULT_MODEL;
  if (!modelId) {
    throw new Error("OPENROUTER_DEFAULT_MODEL is required");
  }

  const provider = createOpenRouter({ apiKey });
  return provider(modelId);
}
