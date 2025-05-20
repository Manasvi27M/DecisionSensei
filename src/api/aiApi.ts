const AI_ENDPOINT = "https://gp00uvuvrdn3jyf0.us-east-1.aws.endpoints.huggingface.cloud";

// Replace this with your actual API key or set up environment variables
// In production, you should never expose your API keys in client-side code
const API_KEY = import.meta.env.VITE_HF_API_KEY || "dummy_key";

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const response = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {}
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // The structure of the response depends on the specific API
    // This is a common structure, but might need adjustment based on your API's response format
    return data.generated_text || JSON.stringify(data);
  } catch (error) {
    console.error("Error calling AI API:", error);
    throw error;
  }
};

// Mock function for development without hitting the actual API
export const mockSendMessageToAI = async (message: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple response generation based on input
  if (message.toLowerCase().includes("help")) {
    return "I'm here to help you make decisions! What are you trying to decide?";
  } else if (message.toLowerCase().includes("decision")) {
    return "To help you make a decision, I need to understand the options you're considering. Could you tell me what choices you're trying to decide between?";
  } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
    return "Hello! I'm Decision Sensei, your AI-powered decision assistant. I can help you navigate tough choices. What decision are you facing today?";
  } else {
    return "I understand you're looking for guidance. To provide the best advice, could you give me more details about your situation?";
  }
};