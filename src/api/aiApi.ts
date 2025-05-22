const AI_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY ?? "dummy_key";
const APP_ORIGIN = typeof window !== "undefined" ? window.location.origin : "http://localhost";

const SYSTEM_PROMPT = `
You are **Decision Sensei**, an empathetic AI guide.  
Always:
• acknowledge the user's emotions and context  
• apply common-sense reasoning and basic psychology  
• ask clarifying questions whenever the situation or goals are unclear  
• provide balanced, actionable recommendations that respect the user’s feelings
`;

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const response = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT.trim() },
          { role: "user", content: message }
        ]
      }),
    });

    if (!response.ok) {
      // OpenRouter returns JSON error bodies – surface them for easier debugging
      const err = await response.text().catch(() => "");
      throw new Error(`OpenRouter ${response.status}: ${err || response.statusText}`);
    }

    const { choices } = await response.json();
    return choices?.[0]?.message?.content?.trim() ?? "";
  } catch (err) {
    console.error("OpenRouter fetch failed:", err);
    throw err;
  }
};
