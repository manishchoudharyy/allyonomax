import { MessageCircle, Zap } from "lucide-react";

export default function TelegramBanner() {
  return (
    <div className="rounded-2xl py-3.5 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white shadow-lg">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 fill-white" />
        <span className="font-bold text-sm sm:text-base">
          Daily Bonus Codes &amp; Exclusive Updates!
        </span>
      </div>
      <a
        href="https://telegram.dog/+AOimKWsTbRE2Mzk1"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-1.5 bg-white text-primary font-bold text-sm rounded-xl hover:bg-bg transition-colors shadow-sm"
      >
        Join Telegram →
      </a>
    </div>
  );
}
