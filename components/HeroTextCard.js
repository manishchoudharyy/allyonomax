"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HeroTextCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative rounded-lg shadow-sm bg-gradient-to-br from-teal-600 to-teal-500">
      <div
        className={`overflow-hidden transition-all duration-300 `}
      >
        <div className="p-2">
          <p className="text-[9px] text-justify text-white leading-snug">
            Welcome to <strong className="font-bold">AllYonoMax</strong>, India's most trusted directory for <strong className="font-bold">all Yono games</strong> and <strong className="font-bold">all Yono apps</strong>. Whether you are searching for <strong className="font-bold">new Yono games</strong> with high sign-up bonuses, or need a safe <strong className="font-bold">Yono games APK download</strong> link, you have come to the right place. We verify every <strong className="font-bold">Yono games app</strong>, update the <strong className="font-bold">yono games bonus</strong> amounts daily, and provide direct official links.
          </p>
          <ul className="text-[9px] text-white leading-snug ml-1">
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
          <p className="text-[9px] text-justify text-white leading-snug">
            Our platform covers the <strong className="font-bold">best Yono games</strong> across categories like Rummy, Slots, and Arcade. Browse the <strong className="font-bold">all Yono games list</strong> below, find your favorite, and click <strong className="font-bold">Yono game download</strong> to start winning real cash with the <strong className="font-bold">latest Yono games 2026</strong>. Apps include: Diwa Game, Goa Spin, Diwa 777, Jaiho Rummy, Yono 777, Yono Rummy, Yono Slots, Yono Arcade, and more.
          </p>
        </div>
      </div>

      
    </div>
  );
}