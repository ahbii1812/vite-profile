import { useMemo, useState } from "react";

type ChatRole = "user" | "model";

type ChatMessage = {
  role: ChatRole;
  text: string;
};

const DEFAULT_MODEL = "gemini-2.5-flash";

const buildContents = (messages: ChatMessage[]) =>
  messages.map((message) => ({
    role: message.role,
    parts: [{ text: message.text }],
  }));

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  const model =
    (import.meta.env.VITE_GEMINI_MODEL as string | undefined) ?? DEFAULT_MODEL;

  const endpoint = useMemo(
    () =>
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    [model],
  );

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    if (!apiKey) {
      setError("Missing VITE_GEMINI_API_KEY in .env");
      return;
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", text: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: buildContents(nextMessages),
        }),
      });

      if (!response.ok) {
        let details = "";
        try {
          const data = await response.json();
          details = data?.error?.message ? `: ${data.error.message}` : "";
        } catch {
          details = "";
        }
        throw new Error(`Gemini API error ${response.status}${details}`);
      }

      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No response from model.";

      setMessages((current) => [...current, { role: "model", text }]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown error calling Gemini API";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`mb-3 w-[340px] max-w-[85vw] rounded-2xl border border-slate-800/70 bg-slate-950/95 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.8)] backdrop-blur transition-all duration-200 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800/70 px-4 py-3">
          <div className="text-sm font-semibold text-slate-100">
            Gemini Chat
          </div>
          <button
            className="rounded-lg px-2 py-1 text-xs text-slate-400 transition hover:text-slate-100"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>

        <div className="flex h-72 flex-col gap-3 overflow-y-auto px-4 py-3 text-left text-sm">
          {messages.length > 0 &&
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-blue-500/20 text-blue-100"
                    : "mr-auto bg-slate-800/70 text-slate-100"
                }`}
              >
                {message.text}
              </div>
            ))}
          {isLoading ? (
            <div className="mr-auto inline-flex items-center gap-2 rounded-2xl bg-slate-800/70 px-3 py-2 text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Thinking...
            </div>
          ) : null}
        </div>

        {error ? (
          <div className="px-4 pb-2 text-xs text-rose-300">{error}</div>
        ) : null}

        <div className="flex items-center gap-2 border-t border-slate-800/70 px-4 py-3">
          <input
            className="flex-1 rounded-xl border border-slate-800/70 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500/60 focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage();
              }
            }}
            disabled={isLoading}
          />
          <button
            className="rounded-xl bg-blue-500/80 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={() => void sendMessage()}
            disabled={isLoading}
            type="button"
          >
            Send
          </button>
        </div>
      </div>

      <button
        className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        {isOpen ? "Hide Chat" : "Chat with Gemini"}
      </button>
    </div>
  );
};

export default ChatWidget;
