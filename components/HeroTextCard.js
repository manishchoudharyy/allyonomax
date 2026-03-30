"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HeroTextCard() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div  className="relative rounded-lg shadow-sm bg-gradient-to-br from-teal-600 to-teal-500">
                        
                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? 'max-h-[1000px]' : 'max-h-[110px]'
                    }`}
                >
                    <div className="p-4">
                        <p className="text-xs text-justify text-white ">
                            All Yono Max is a popular platform where players can explore a wide collection of real money gaming apps in one place. From rummy tables to slot spins and bingo games, users can enjoy multiple categories like Rummy, Slots, Bingo, Arcade, and Spin games with daily rewards and exciting. This collection includes many trending apps such as Yono Bonus, Bingo 101, Rumble Rummy, Joy Rummy, DIWA 777, INR Rummy, Boss Rummy, Ever 777, Yono 777, Rummy 888, Rummy 77, Rummy Ludo, 777 Game, OK Rummy, Good Slots, Hindi 777, Club INR, Game Rummy, Yes Spin, Love Rummy, Share Slots, Maha Games, Hi-Rummy, Jaiho Win, IND Club, Jaiho Slots, TOP Rummy, Ind Rummy, Slots Spin, MQM Bet, Saga Slots, Yn777, ABC Rummy, JaiHo Arcade, JaiHo 777, Neta VIP, Rummy 91, JaiHo Rummy, JaiHo Spin, MWM Bet, EN365, 101Z App, Rummy 365, Spin101, Ind Bingo, My777, Bet213, GoGo Rummy, 789 Jackpot, MDM Bet, Spin Gold, Spin Lucky, Spin 777, IND Slots, Spin Crush, MkM Bet, Slots Winner, Spin Winner, MBM Bet, 567 Slots, Yono VIP, Yono Slots, Yono Arcade, Yono Rummy, Yono Game, Yono Games, Rummy App, Yono App, All Yono App, All Yono Games.!
                        </p>
                    </div>
                </div>

                {/* Gradient Overlay when collapsed */}
                {!isExpanded && (
                    <div className="absolute bottom-8 left-0 right-0 h-12 bg-gradient-to-t from-teal-600 to-transparent pointer-events-none rounded-b-lg" />
                )}

                {/* Toggle Button */}
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