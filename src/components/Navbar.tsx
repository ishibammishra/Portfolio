import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Download, 
  ArrowRight, 
  Phone, 
  Mail, 
  Send,
  Menu,
  X,
  Compass,
  Code2,
  FolderGit2,
  MapPin,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    playClickSound('nav', soundEnabled);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Calculate top position with 60px header clearance
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'ABOUT', short: 'ABOUT', num: '01' },
    { id: 'story', label: 'MY STORY', short: 'STORY', num: '02' },
    { id: 'skills', label: 'SKILLS', short: 'SKILLS', num: '03' },
    { id: 'journey', label: '01➔05 JOURNEY', short: '01➔05', num: '04' },
    { id: 'projects', label: 'PROJECTS', short: 'WORK', num: '05' },
    { id: 'contact', label: 'CONTACT', short: 'CONTACT', num: '06' },
  ];

  return (
    <>
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F6F2E9]/95 backdrop-blur-md border-b-2 border-[#060D1A] transition-all">
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

          {/* Desktop Nav Links (Visible on large screens) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#EAE3D2] px-1.5 py-1 border border-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-all ${
                    isActive
                      ? 'bg-[#012CEB] text-white shadow-sm'
                      : 'text-[#060D1A]/75 hover:text-[#060D1A] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action buttons & Mobile Menu Trigger */}
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
              className="hidden min-[400px]:flex items-center gap-1 px-2 sm:px-3.5 py-1 sm:py-1.5 border-2 border-[#060D1A] bg-[#012CEB] text-white hover:bg-[#060D1A] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-[2px_2px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>CONTACT</span>
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                playClickSound('snap', soundEnabled);
              }}
              aria-label="Toggle navigation menu"
              className="lg:hidden flex items-center gap-1 px-2 xs:px-2.5 py-1 sm:py-1.5 border-2 border-[#060D1A] bg-[#060D1A] text-[#F6F2E9] hover:bg-[#012CEB] text-[10px] xs:text-xs font-mono font-bold uppercase transition-all shadow-[2px_2px_0px_#012CEB] active:translate-x-0.5 active:translate-y-0.5 shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-3.5 h-3.5 text-amber-300" /> : <Menu className="w-3.5 h-3.5" />}
              <span>{isMobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-14 bottom-0 z-40 bg-[#F6F2E9]/98 backdrop-blur-xl border-b-4 border-[#060D1A] flex flex-col justify-between p-4 sm:p-6 overflow-y-auto"
          >
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-grid-paper opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-lg mx-auto w-full">
              {/* Header Status in Drawer */}
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#060D1A] pb-2 text-xs font-mono">
                <span className="font-bold text-[#012CEB]">NAVIGATION MENU</span>
                <span className="text-[#060D1A]/60">BCA 2024–2027 COHORT</span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full p-3 border-2 border-[#060D1A] flex items-center justify-between font-mono font-bold transition-all ${
                        isActive
                          ? 'bg-[#012CEB] text-white shadow-[4px_4px_0px_#060D1A] translate-x-1'
                          : 'bg-white text-[#060D1A] hover:bg-[#EAE3D2] shadow-[3px_3px_0px_#060D1A]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-1.5 py-0.5 border border-current ${isActive ? 'bg-white text-[#012CEB]' : 'bg-[#EAE3D2] text-[#060D1A]'}`}>
                          {item.num}
                        </span>
                        <span className="font-bebas text-2xl tracking-wider leading-none">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="pt-2 border-t-2 border-dashed border-[#060D1A] space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="p-2.5 bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-white border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#060D1A]"
                  >
                    <Download className="w-3.5 h-3.5 text-[#012CEB]" />
                    <span>RESUME PDF</span>
                  </button>

                  <a
                    href="tel:+919279523588"
                    onClick={() => playClickSound('snap', soundEnabled)}
                    className="p-2.5 bg-emerald-100 hover:bg-emerald-600 hover:text-white border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#060D1A] text-emerald-900"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>CALL SHIBAM</span>
                  </a>
                </div>

                <div className="p-3 bg-[#060D1A] text-[#F6F2E9] border-2 border-[#060D1A] text-xs font-mono space-y-1">
                  <div className="flex justify-between items-center text-gray-400 text-[10px]">
                    <span>DIRECT INQUIRIES</span>
                    <span className="text-emerald-400 font-bold">● ACTIVE</span>
                  </div>
                  <div className="font-bold text-white text-sm">+91 9279523588</div>
                  <div className="text-gray-300 text-[11px] truncate">shivammishra9279523588@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Close footer prompt */}
            <div className="relative z-10 pt-4 text-center">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-xs text-[#060D1A]/70 hover:text-[#012CEB] font-bold uppercase tracking-widest underline decoration-2 underline-offset-4"
              >
                [ Click to Close Menu ]
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Navigation Pill (Hidden when mobile drawer is open) */}
      {!isMobileMenuOpen && (
        <nav className="fixed bottom-2.5 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] sm:max-w-max px-1">
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
      )}
    </>
  );
};
