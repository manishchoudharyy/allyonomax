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
            Welcome to <strong className="font-bold">AllYonoMax</strong>, India's most trusted and verified directory for <strong className="font-bold">all Yono games</strong> and <strong className="font-bold">all Yono apps</strong>. Whether you are actively searching for <strong className="font-bold">new Yono games</strong> with the highest sign-up bonuses, or need a 100% safe <strong className="font-bold">Yono games APK download</strong> link, you have come to the right place. We personally verify every <strong className="font-bold">Yono games app</strong>, update the <strong className="font-bold">yono games bonus</strong> amounts in real-time, and only provide direct official server links to ensure your device's safety.
          </p>
          <ul className="text-[9px] text-white leading-snug ml-1">
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">Complete Yono Games List</strong>: Safely access the top 60+ verified <strong className="font-bold">Yono apps</strong>.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">New Yono Apps Bonus</strong>: Get ₹51 to ₹550 instantly when you <strong className="font-bold">download</strong> and register.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-teal-300 font-bold">✓</span>
              <span><strong className="font-bold">Yono Games Online</strong>: Play <strong className="font-bold">top Yono games</strong> and enjoy instant 5-minute UPI withdrawals.</span>
            </li>
          </ul>
          <p className="text-[9px] text-justify text-white leading-snug">
            Our platform meticulously covers the <strong className="font-bold">best Yono games</strong> across all major categories like Rummy, Slots, and Arcade. Browse the complete <strong className="font-bold">all Yono games list</strong> below, find your favorite, and click the <strong className="font-bold">Yono game download</strong> button to start winning real cash with the <strong className="font-bold">latest Yono games 2026</strong>. Popular apps include: 567 Slots, Diwa 777, Goa Spin, Jaiho Rummy, Yono 777, Yono Rummy, Yono Slots, and Yono Arcade.
          </p>
        </div>
      </div>

      
    </div>
  );
}