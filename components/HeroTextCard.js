"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HeroTextCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative rounded-lg shadow-sm bg-gradient-to-br from-teal-600 to-teal-500">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[1200px]" : "max-h-[115px]"
        }`}
      >
        <div className="p-4 space-y-2.5">
          <p className="text-xs text-justify text-white leading-relaxed">
            Welcome to <strong className="font-bold">AllYonoMax</strong>, India's most trusted directory for <strong className="font-bold">all Yono games</strong> and <strong className="font-bold">all Yono apps</strong>. Whether you are searching for <strong className="font-bold">new Yono games</strong> with high sign-up bonuses, or need a safe <strong className="font-bold">Yono games APK download</strong> link, you have come to the right place. We verify every <strong className="font-bold">Yono games app</strong>, update the <strong className="font-bold">yono games bonus</strong> amounts daily, and provide direct official links.
          </p>
          <ul className="text-xs text-white leading-relaxed space-y-1.5 ml-1 pt-1 pb-1">
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">Complete Yono Games List</strong>: Access the top 60+ <strong className="font-bold">Yono apps</strong>.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">New Yono Apps Bonus</strong>: Get ₹51 to ₹550 instantly when you <strong className="font-bold">download</strong>.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">Yono Games Online</strong>: Play <strong className="font-bold">top Yono games</strong> with secure UPI withdrawals.</span>
            </li>
          </ul>
          <p className="text-xs text-justify text-white leading-relaxed">
            Our platform covers the <strong className="font-bold">best Yono games</strong> across categories like Rummy, Slots, and Arcade. Browse the <strong className="font-bold">all Yono games list</strong> below, find your favorite, and click <strong className="font-bold">Yono game download</strong> to start winning real cash with the <strong className="font-bold">latest Yono games 2026</strong>. Apps include: Club INR, Goa Spin, Jaiho Rummy, MWM Bet, Yono 777, Yono Rummy, Yono Slots, Yono Arcade, and more.
          </p>
        </div>
      </div>

      {/* Gradient overlay when collapsed */}
      {!isExpanded && (
        <div className="absolute bottom-8 left-0 right-0 h-12 bg-gradient-to-t from-teal-600 to-transparent pointer-events-none rounded-b-lg" />
      )}

      {/* Toggle button */}
      <div className="flex justify-center pb-3 pt-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-xs font-medium transition-all"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={14} />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              Read More
            </>
          )}
        </button>
      </div>
    </div>
  );
}