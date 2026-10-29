import React from 'react';
import { playClickSound } from '../utils/sound';

interface ScrollingLogoTickerProps {
  soundEnabled?: boolean;
}

export const ScrollingLogoTicker: React.FC<ScrollingLogoTickerProps> = ({ soundEnabled = true }) => {
  const logos = [
    { name: 'JAVA OOP', category: 'CORE BACKEND', icon: '☕', tag: 'JDK 17+' },
    { name: 'MYSQL DATABASE', category: 'RELATIONAL SQL', icon: '🐬', tag: 'QUERIES & SCHEMAS' },
    { name: 'REACT.JS', category: 'FRONTEND UI', icon: '⚛️', tag: 'VITE & HOOKS' },
    { name: 'TYPESCRIPT', category: 'TYPE-SAFE CODE', icon: '🔷', tag: 'INTERFACES & TYPES' },
    { name: 'JAVASCRIPT (ES6+)', category: 'CLIENT LOGIC', icon: '⚡', tag: 'ASYNC & DOM' },
    { name: 'TAILWIND CSS', category: 'MODERN STYLING', icon: '🎨', tag: 'RESPONSIVE UI' },
    { name: 'HTML5 & CSS3', category: 'SEMANTIC WEB', icon: '🌐', tag: 'MODERN STANDARDS' },
    { name: 'GIT & GITHUB', category: 'VERSION CONTROL', icon: '🐙', tag: 'COMMITS & REPOS' },
    { name: 'SAM COLLEGE BHOPAL', category: 'BCA 2024–2027', icon: '🎓', tag: '2024–2027 COHORT' },
    { name: 'BARKATULLAH UNIV.', category: 'AFFILIATION', icon: '🏛️', tag: 'STATE UNIVERSITY' },
    { name: 'JAC JAMSHEDPUR', category: 'CLASS X & XII', icon: '🎒', tag: 'BOARD CREDENTIALS' },
    { name: '100+ DANCE STUDENTS', category: 'STAGE MENTORSHIP', icon: '🕺', tag: 'LEADERSHIP & FOCUS' },
    { name: 'VS CODE & ECLIPSE', category: 'DEV WORKSPACE', icon: '💻', tag: 'IDE & TOOLING' },
  ];

  // Exact 2x duplication for 100% seamless translateX(0) to translateX(-50%) CSS marquee
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section 
      aria-label="Technical skills and credentials marquee"
      className="border-y-4 border-[#060D1A] bg-[#060D1A] text-white py-3.5 overflow-hidden select-none relative group shadow-[0_6px_25px_rgba(1,44,235,0.18)]"
    >
      {/* Subtle blueprint grid line overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />

      {/* Top micro ticker status bar */}
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-gray-400 border-b border-white/10 pb-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-bold tracking-wider">TECHNICAL ARSENAL & CREDENTIALS</span>
          <span className="hidden md:inline text-gray-500">//</span>
          <span className="hidden md:inline text-gray-400">SHIBAM MISHRA TECH STACK</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded text-[9px]">
            ● LIVE TICKER
          </span>
          <span className="text-[#012CEB] font-bold text-[9px]">
            HOVER TO PAUSE
          </span>
        </div>
      </div>

      {/* Pure CSS Hardware-Accelerated Infinite Scrolling Track */}
      <div
        className="animate-marquee-infinite cursor-pointer py-1"
        onClick={() => playClickSound('snap', soundEnabled)}
      >
        {duplicatedLogos.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-2 sm:mx-3 px-4 py-2 bg-white/5 hover:bg-white/15 border-2 border-white/20 hover:border-[#012CEB] transition-all rounded shadow-sm group/item shrink-0"
          >
            {/* Cute Emoji Icon */}
            <span className="text-xl sm:text-2xl filter drop-shadow-sm group-hover/item:scale-125 transition-transform duration-200">
              {item.icon}
            </span>

            {/* Label & Details */}
            <div>
              <div className="font-bebas text-lg sm:text-xl tracking-wider text-white group-hover/item:text-[#012CEB] transition-colors leading-none flex items-center gap-2">
                <span>{item.name}</span>
                <span className="font-mono text-[9px] px-1.5 py-0.5 bg-white/10 text-emerald-300 font-bold rounded">
                  {item.tag}
                </span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold mt-0.5">
                {item.category}
              </div>
            </div>

            {/* Brutalist Divider */}
            <span className="text-[#012CEB] font-mono font-black text-xs ml-2 opacity-70">
              //
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
