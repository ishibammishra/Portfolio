import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { PhysicsCursor } from './components/PhysicsCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { ScrollingLogoTicker } from './components/ScrollingLogoTicker';
import { ArrowUp, Heart } from 'lucide-react';
import { LinkedinIcon } from './components/LinkedinIcon';
import { playClickSound } from './utils/sound';

export function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for bottom navigation capsule dock
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound('snap', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F2E9] text-[#060D1A] selection:bg-[#012CEB] selection:text-white font-sans antialiased relative">
      {/* 10-Ball Spring Physics Trailing Cursor */}
      <PhysicsCursor />

      {/* Electric Blue (#012CEB) Blueprint Preloader */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Top Navbar & Floating Dock */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Stream */}
      <main className="relative z-10">
        <HeroSection
          soundEnabled={soundEnabled}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Infinite Scrolling Tech & Credential Logo Marquee */}
        <ScrollingLogoTicker soundEnabled={soundEnabled} />

        <StorySection soundEnabled={soundEnabled} />

        <SkillsSection soundEnabled={soundEnabled} />

        {/* 01 to 05 Scroll-Scrubbed Experience */}
        <JourneySection soundEnabled={soundEnabled} />

        <ProjectsSection soundEnabled={soundEnabled} />

        <ContactSection soundEnabled={soundEnabled} />
      </main>

      {/* Brutalist Footer */}
      <footer className="border-t-4 border-[#060D1A] bg-[#060D1A] text-[#F6F2E9] py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#012CEB] text-white font-mono font-black text-base flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_#F6F2E9]">
              SM
            </div>
            <div>
              <div className="font-bebas text-2xl tracking-wider text-white">
                SHIBAM MISHRA // PORTFOLIO
              </div>
              <div className="font-mono text-xs text-gray-400">
                BCA SAM COLLEGE BHOPAL • JSR NATIVE • 2024–2027 COHORT
              </div>
            </div>
          </div>

          <div className="text-center md:text-right font-mono text-xs text-gray-400 space-y-1">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-1">
              <a
                href="https://www.linkedin.com/in/shibam-mishra-08a73242b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0077B5] text-white hover:bg-white hover:text-[#060D1A] font-bold text-[11px] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN PROFILE</span>
              </a>
            </div>
            <div>
              ENGINEERED WITH <span className="text-[#012CEB] font-bold">TYPESCRIPT</span>, <span className="text-white font-bold">REACT</span> & <span className="text-emerald-400 font-bold">FRAMER MOTION</span>
            </div>
            <div className="text-[11px] text-gray-500">
              ZERO ROBOTIC FLUFF • 100% AUTHENTIC HUMAN CODE & STORY
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#F6F2E9] text-[#060D1A] hover:bg-[#012CEB] hover:text-white border-2 border-white font-mono text-xs font-black uppercase transition-all shadow-[3px_3px_0px_#012CEB] active:translate-x-0.5 active:translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
            <span>BACK TO TOP</span>
          </button>
        </div>
      </footer>

      {/* Official Structured CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}
