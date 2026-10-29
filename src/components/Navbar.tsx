import React from 'react';
import { Volume2, VolumeX, Download, ArrowRight, Phone, Mail, Send } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { playClickSound } from '../utils/sound';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  setSoundEnabled,
  onOpenResume,
  activeSection
}) => {
  const scrollTo = (id: string) => {
    playClickSound('nav', soundEnabled);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'ABOUT', short: 'ABOUT' },
    { id: 'story', label: 'MY STORY', short: 'STORY' },
    { id: 'skills', label: 'SKILLS', short: 'SKILLS' },
    { id: 'journey', label: 'JOURNEY (01-05)', short: '01➔05' },
    { id: 'projects', label: 'PROJECTS', short: 'WORK' },
    { id: 'contact', label: 'CONTACT', short: 'CONTACT' },
  ];

  return (
    <>
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#F6F2E9]/95 backdrop-blur-md border-b-2 border-[#060D1A] transition-all">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 h-14 flex items-center justify-between">
          
          {/* Logo badge */}
          <div 
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-1.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 bg-[#060D1A] text-[#F6F2E9] font-mono font-black text-xs sm:text-sm flex items-center justify-center border border-[#060D1A] group-hover:bg-[#012CEB] transition-colors shadow-[2px_2px_0px_#060D1A]">
              SM
            </div>
            <div>
              <div className="font-bebas tracking-wider text-sm sm:text-lg leading-none text-[#060D1A] flex items-center gap-1 sm:gap-1.5">
                SHIBAM MISHRA
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[#060D1A]/60 hidden xs:block">
                BCA Student • Web & Software Dev
              </div>
            </div>
          </div>

          {/* Quick status (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-[#EAE3D2] px-3 py-1 border border-[#060D1A] text-[11px] font-mono text-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#012CEB]" />
            <span>Jamshedpur ➔ Bhopal (SAM College BCA)</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickSound('snap', !soundEnabled);
              }}
              title={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
              className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center border-2 border-[#060D1A] bg-[#F6F2E9] hover:bg-[#EAE3D2] transition-colors shadow-[2px_2px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#012CEB]" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#060D1A]/40" />
              )}
            </button>

            {/* LinkedIn Profile Button */}
            <a
              href="https://www.linkedin.com/in/shibam-mishra-08a73242b/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound('snap', soundEnabled)}
              title="Connect on LinkedIn"
              className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center border-2 border-[#060D1A] bg-[#0077B5] text-white hover:bg-[#060D1A] transition-colors shadow-[2px_2px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Resume Button (Desktop) */}
            <button
              onClick={() => {
                playClickSound('modal', soundEnabled);
                onOpenResume();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#060D1A] bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-[#F6F2E9] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[2px_2px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              RESUME
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-1 px-2 sm:px-3.5 py-1 sm:py-1.5 border-2 border-[#060D1A] bg-[#012CEB] text-white hover:bg-[#060D1A] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[2px_2px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>CONTACT</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Pill (Phone & Ratio Friendly) */}
      <nav className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] sm:max-w-max px-1">
        <div className="flex items-center gap-1 p-1 sm:p-1.5 bg-[#060D1A]/95 backdrop-blur-md text-[#F6F2E9] border-2 border-[#060D1A] rounded-full shadow-[3px_3px_0px_#012CEB] sm:shadow-[4px_4px_0px_#012CEB] overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#012CEB] text-white shadow-sm scale-105'
                    : 'text-[#F6F2E9]/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
