import { useState } from "react";

/**
 * ChatWidget — on-site chat placeholder for DND Stays.
 *
 * This is a UI shell only. The conversation stays on the website by design.
 * When the client confirms the backend, wire it in one of these ways:
 *
 *  - Crisp / Tawk.to: delete this component and paste their <script> snippet
 *    into index.html. Their bubble replaces this one. Team replies from a
 *    mobile app; the visitor never leaves the site.
 *
 *  - WhatsApp-backed (Chatwoot / Respond.io on the WhatsApp Cloud API):
 *    keep this UI, and on send, POST the message to your backend endpoint,
 *    then subscribe (WebSocket / polling) for the team's replies. The team
 *    answers from WhatsApp; messages round-trip into this widget.
 *
 * Until then this just collects a message and shows a holding state.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "team",
      text: "Hi 👋 You're chatting with the DND Stays team. Ask us anything about a stay and we'll reply right here.",
    },
  ]);
  const [draft, setDraft] = useState("");

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "you", text }]);
    setDraft("");
    // TODO: forward `text` to backend (Crisp / Tawk / WhatsApp bridge).
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "team",
          text: "Thanks for your message. A team member will reply here shortly.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(360px,calc(100vw-2.5rem))] bg-surface border border-line shadow-ambient flex flex-col animate-slide-up">
          <div className="bg-surface-low border-b border-line text-on-dark px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-body-md">DND Stays</div>
              <div className="font-mono text-label-sm uppercase text-on-dark/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" /> Usually replies in minutes
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-on-dark/60 hover:text-on-dark text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto px-4 py-4 space-y-3 bg-surface-low">
            {messages.map((m, i) => (
              <div
                key={i}
                className={"flex " + (m.from === "you" ? "justify-end" : "justify-start")}
              >
                <div
                  className={
                    "max-w-[80%] px-3.5 py-2.5 text-body-md leading-relaxed " +
                    (m.from === "you"
                      ? "bg-accent text-on-surface"
                      : "bg-surface-low border border-line text-on-dark")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-line p-3 flex gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 px-3 py-2.5 text-body-md bg-surface-low border border-line text-on-dark placeholder:text-on-dark/40 focus:border-accent outline-none"
            />
            <button
              onClick={send}
              className="bg-accent text-on-surface px-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 bg-accent text-on-surface w-14 h-14 flex items-center justify-center shadow-ambient hover:bg-accent-bright transition-colors"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8 8.38 8.38 0 0 1 8.5-8.5 8.5 8.5 0 0 1 8.5 8.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
