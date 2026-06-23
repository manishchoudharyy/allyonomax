"use client";

import { Send } from "lucide-react";

export default function FloatingTelegram() {
  return (
    <a
      href="https://telegram.dog/+AOimKWsTbRE2Mzk1"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-telegram"
      aria-label="Join Telegram"
    >
      <Send className="w-5 h-5" />
    </a>
  );
}
