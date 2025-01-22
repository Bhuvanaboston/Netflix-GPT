import OpenAI from 'openai';

const openAIClient = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_GPT_API_KEY, // Use the constant directly
  dangerouslyAllowBrowser: true, // Only for development/testing
});

export default openAIClient;
