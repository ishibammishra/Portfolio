import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  MapPin, 
  GraduationCap, 
  Users, 
  Code2, 
  Briefcase,
  Calendar,
  Check,
  Send,
  Zap,
  Radio
} from 'lucide-react';
import { Station } from '../types/portfolio';
import { playClickSound } from '../utils/sound';

export interface ExtendedStation extends Station {
  location: string;
  period: string;
  category: string;
  accentColor: string;
  cuteTag: string;
  cuteIcon: string;
  shortName?: string;
  bullets: string[];
}

export const stations: ExtendedStation[] = [
  {
    id: 0,
    number: '01',
    name: 'JAMSHEDPUR (JAC)',
    shortName: 'JAC (JSR)',
    badge: 'STATION 01 • SCHOOLING FOUNDATION',
    subtitle: 'Jharkhand Academic Council (JAC Board, Jamshedpur)',
    title: 'SCHOOLING IN JAMSHEDPUR',
    description: 'Completed my secondary and higher secondary schooling under the Jharkhand Academic Council in Jamshedpur. Built solid analytical habits, discipline, and quantitative reasoning.',
    location: 'Jamshedpur, Jharkhand',
    period: '2020 — 2023',
    category: 'FOUNDATION',
    accentColor: '#012CEB',
    cuteTag: '🎒 School Days',
    cuteIcon: '📚',
    stat: '70.80% / 60.00%',
    statLabel: 'Class X / XII (JAC)',
    pct: 0,
    bullets: [
      'Scored 70.80% in Secondary School (Class X) with strong science and math marks.',
      'Completed Class XII (Higher Secondary) with 60.00% under Jharkhand Board.',
      'Built a disciplined self-study routine before moving into university tech.'
    ]
  },
  {
    id: 1,
    number: '02',
    name: 'DANCE INSTRUCTOR',
    shortName: 'DANCE',
    badge: 'STATION 02 • STAGE & MENTORSHIP',
    subtitle: 'Dance Coaching & Choreography (Jamshedpur)',
    title: 'TEACHING & CHOREOGRAPHY',
    description: 'Coached, directed, and choreographed 100+ students for live stage performances in Jamshedpur. Working with diverse age groups taught me empathy, public presentation, and team coordination.',
    location: 'Jamshedpur Studio Floor',
    period: '2021 — 2023',
    category: 'LEADERSHIP',
    accentColor: '#7C3AED',
    cuteTag: '🕺 Dance Floor',
    cuteIcon: '👟',
    stat: '100+',
    statLabel: 'Students Mentored',
    pct: 25,
    bullets: [
      'Trained 100+ performers across Hip-Hop, Freestyle, and Contemporary routines.',
      'Organized stage counts, timing transitions, and live group synchronization.',
      'Learned to guide beginners through mistakes with patience and positivity.'
    ]
  },
  {
    id: 2,
    number: '03',
    name: 'SAM COLLEGE (BCA)',
    shortName: 'SAM BCA',
    badge: 'STATION 03 • HIGHER EDUCATION',
    subtitle: 'SAM College of Engineering & Technology (Barkatullah University, Bhopal)',
    title: 'BACHELOR OF COMPUTER APPLICATIONS',
    description: 'Relocated from Jamshedpur to Bhopal for university studies. Currently pursuing BCA (2024–2027), building deep practical knowledge in Java, MySQL, and Web Architecture.',
    location: 'Bhopal, Madhya Pradesh',
    period: '2024 — 2027',
    category: 'DEGREE PROGRAM',
    accentColor: '#012CEB',
    cuteTag: '🎓 College Life',
    cuteIcon: '☕',
    stat: '2024–2027',
    statLabel: 'BCA Cohort',
    pct: 50,
    bullets: [
      'Affiliated with Barkatullah University, Bhopal (SAM College of Engg. & Tech).',
      'Core coursework: Java OOP, Data Structures, SQL/DBMS, OS, Computer Networks.',
      'Active lab participant, writing and debugging relational queries and Java classes.'
    ]
  },
  {
    id: 3,
    number: '04',
    name: 'CODE LAB ARSENAL',
    shortName: 'PROJECTS',
    badge: 'STATION 04 • PRACTICAL PROJECTS',
    subtitle: 'Hands-on Software & Web Engineering',
    title: 'BUILDING REAL SOFTWARE',
    description: 'Turned academic theory into working software systems: a standalone Student Result Management System in Java connected to MySQL, responsive commercial dance portals, and modern React apps.',
    location: 'Development Workstation',
    period: '2023 — Present',
    category: 'PRACTICAL BUILDS',
    accentColor: '#059669',
    cuteTag: '💻 Late Night Code',
    cuteIcon: '⚡',
    stat: '3 Builds',
    statLabel: 'Working Projects',
    pct: 75,
    bullets: [
      'Student Result Management: Java Core + JDBC + MySQL automated calculations.',
      'Dance Academy Platform: Responsive multi-page web portal with batch filtering.',
      'Personal Portfolio: Production React 18 + TypeScript + Framer Motion architecture.'
    ]
  },
  {
    id: 4,
    number: '05',
    name: 'IT DESTINATION',
    shortName: 'IT DEST.',
    badge: 'STATION 05 • THE DESTINATION',
    subtitle: 'Software Development & IT Roles',
    title: 'READY FOR DEPLOYMENT',
    description: 'Standing at the threshold of the tech industry, fully prepared to join a forward-thinking engineering team as a software developer, Java developer, or web engineer. Ready for immediate relocation and onboarding across India.',
    location: 'Open to Relocate (India)',
    period: '2027 ➔ Future',
    category: 'NEXT CHAPTER',
    accentColor: '#060D1A',
    cuteTag: '🚀 Ready to Fly',
    cuteIcon: '🎯',
    stat: 'Immediate',
    statLabel: 'Availability',
    pct: 100,
    bullets: [
      'Ready for entry-level Software Developer, Java Developer, or Frontend roles.',
      'Available for full-time employment, internships, and remote/onsite deployments.',
      'Disciplined, communicative, and committed to high code quality and continuous learning.'
    ]
  }
];

interface JourneySectionProps {
  soundEnabled?: boolean;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ soundEnabled = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0); // Starts at Station 01 and advances smoothly to 05
  const isScrollingRef = useRef(false);

  // Sticky pinned scroll tracking across 240vh height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Silky smooth spring for the track progress line (60fps continuous feedback)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 220, damping: 28 });
  const trackWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Update active station based on pinned scroll progress without audio spam or lag
  useEffect(() => {
    let lastIdx = 0;
    return scrollYProgress.on('change', (latest) => {
      let idx = 0;
      if (latest >= 0.82) idx = 4;
      else if (latest >= 0.60) idx = 3;
      else if (latest >= 0.38) idx = 2;
      else if (latest >= 0.16) idx = 1;
      else idx = 0;

      if (idx !== lastIdx) {
        lastIdx = idx;
        setActiveIdx(idx);
      }
    });
  }, [scrollYProgress]);

  // Keyboard navigation (Left / Right Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && activeIdx < stations.length - 1) {
        playClickSound(650 + (activeIdx + 1) * 40, 0.04, soundEnabled);
        setActiveIdx(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && activeIdx > 0) {
        playClickSound(650 + (activeIdx - 1) * 40, 0.04, soundEnabled);
        setActiveIdx(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, soundEnabled]);

  const activeStation = stations[activeIdx];
  const stationIcons = [GraduationCap, Users, GraduationCap, Code2, Briefcase];

  const handleSelectStation = (idx: number) => {
    playClickSound(600 + idx * 45, 0.04, soundEnabled);
    setActiveIdx(idx);
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      handleSelectStation(activeIdx - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < stations.length - 1) {
      handleSelectStation(activeIdx + 1);
    }
  };

  const triggerHireCelebration = () => {
    playClickSound('modal', soundEnabled);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#012CEB', '#10B981', '#F59E0B', '#060D1A']
    });
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="journey" 
      ref={containerRef} 
      className="relative h-[230vh] bg-[#EAE3D2] border-y-2 border-[#060D1A]"
    >
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-grid-paper opacity-30 pointer-events-none" />

      {/* Sticky Frame: Pinned firmly under navbar during scroll through stations 01 to 05 */}
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] max-h-[calc(100dvh-3.5rem)] flex flex-col justify-center py-1.5 sm:py-3 px-2 sm:px-6 max-w-6xl mx-auto overflow-hidden">
        
        {/* Top Header */}
        <div className="border-b-2 border-[#060D1A] pb-1.5 sm:pb-2.5 mb-1.5 sm:mb-2.5">
          <div className="flex items-center justify-between flex-wrap gap-1.5 sm:gap-2 mb-1">
            
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="px-1.5 sm:px-2 py-0.5 bg-[#060D1A] text-white font-mono text-[9px] xs:text-[10px] sm:text-[11px] font-bold tracking-wider rounded-sm">
                01 ➔ 05
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#060D1A]/80 uppercase tracking-widest font-black">
                CAREER ROUTE
              </span>

              {/* Cute Badge */}
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-amber-100 border border-[#060D1A] font-mono text-[8px] sm:text-[10px] font-bold text-[#060D1A] rotate-[-2deg] shadow-sm">
                <span>{activeStation.cuteIcon}</span>
                <span>{activeStation.cuteTag}</span>
              </span>
            </div>

            {/* Live Station & Scroll Hint */}
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs">
              <div className="bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 border-2 border-[#060D1A] font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#060D1A]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#012CEB] animate-ping" />
                <span>CURRENT: <strong className="text-[#012CEB] font-black">{activeStation.number} <span className="hidden sm:inline">{activeStation.name}</span><span className="sm:hidden">{activeStation.shortName || activeStation.name}</span></strong></span>
              </div>

              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-amber-200 border border-[#060D1A] text-[11px] font-bold text-[#060D1A]">
                <span>Scroll down to scrub</span>
                <span className="text-[#012CEB] font-black">({activeIdx + 1}/5)</span>
              </div>
            </div>

          </div>

          <div className="flex items-baseline justify-between">
            <h2 className="font-bebas text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-[#060D1A] leading-none">
              FROM JAMSHEDPUR TO THE TECH FRONTIER
            </h2>
            <div className="hidden md:block font-mono text-[10px] text-[#060D1A]/60 font-bold">
              * Page stays pinned while scrolling until 05 IT is completed
            </div>
          </div>
        </div>

        {/* 5 Interactive Station Tabs Bar (Phone & Ratio Friendly) */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-1.5 sm:mb-2.5">
          {stations.map((st, idx) => {
            const isActive = activeIdx === idx;
            const Icon = stationIcons[idx];
            return (
              <button
                key={st.id}
                onClick={() => handleSelectStation(idx)}
                className={`p-1 xs:p-1.5 sm:p-2 border-2 border-[#060D1A] text-left transition-all duration-150 relative ${
                  isActive
                    ? 'bg-[#012CEB] text-white shadow-[2px_2px_0px_#060D1A] sm:shadow-[3px_3px_0px_#060D1A] -translate-y-0.5'
                    : 'bg-[#F6F2E9] text-[#060D1A] hover:bg-white shadow-[1px_1px_0px_#060D1A] sm:shadow-[2px_2px_0px_#060D1A]'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`font-mono text-[9px] xs:text-[10px] sm:text-xs font-black ${isActive ? 'text-white' : 'text-[#012CEB]'}`}>
                    {st.number}
                  </span>
                  <Icon className="w-3.5 h-3.5 opacity-80 hidden md:block" />
                </div>

                <div className="font-bebas text-[11px] xs:text-xs sm:text-base leading-tight truncate">
                  <span className="sm:hidden">{st.shortName || st.name}</span>
                  <span className="hidden sm:inline">{st.name}</span>
                </div>

                <div className={`hidden md:block font-mono text-[8px] uppercase tracking-wider truncate ${isActive ? 'text-blue-100' : 'text-[#060D1A]/60'}`}>
                  {st.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Silky-Smooth Continuous Subway Track */}
        <div className="relative px-2 py-1 sm:py-1.5 mb-1.5 sm:mb-2.5">
          
          {/* Base Track with continuous real-time progress */}
          <div className="h-2 bg-white border-2 border-[#060D1A] rounded-full relative overflow-hidden">
            <motion.div
              className="h-full bg-[#012CEB]"
              style={{ width: trackWidth }}
            />
          </div>

          {/* 5 Milestone Circles */}
          <div className="flex justify-between items-center -mt-2.5 relative z-10">
            {stations.map((st, idx) => {
              const passed = idx <= activeIdx;
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectStation(idx)}
                  className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#060D1A] flex items-center justify-center font-mono text-[8px] xs:text-[9px] sm:text-[10px] font-black transition-all ${
                    isCurrent
                      ? 'bg-[#012CEB] text-white scale-110 shadow-[2px_2px_0px_#060D1A]'
                      : passed
                      ? 'bg-[#060D1A] text-white hover:scale-105'
                      : 'bg-white text-[#060D1A] hover:bg-[#EAE3D2]'
                  }`}
                >
                  {st.number}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hardware-Accelerated 60fps Station Card Display (Zero DOM unmounting lag, perfect fit) */}
        <div className="bg-white border-3 sm:border-4 border-[#060D1A] p-2.5 sm:p-4 lg:p-5 shadow-[4px_4px_0px_#060D1A] sm:shadow-[6px_6px_0px_#060D1A] relative overflow-hidden">
          
          <div className="relative min-h-[360px] xs:min-h-[340px] sm:min-h-[300px]">
            {stations.map((st, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <div 
                  key={st.id} 
                  className={`w-full transition-all duration-300 ease-out ${
                    isCurrent
                      ? 'opacity-100 translate-y-0 pointer-events-auto relative z-10'
                      : 'opacity-0 translate-y-2 pointer-events-none absolute inset-0 -z-10'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 items-stretch">
                    
                    {/* Left Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-1.5 sm:space-y-2 flex flex-col justify-between">
                      
                      {/* Header Badges */}
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                        <span className="px-1.5 sm:px-2 py-0.5 bg-[#012CEB] text-white font-mono text-[8px] xs:text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                          {st.badge}
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 bg-[#EAE3D2] border border-[#060D1A] font-mono text-[8px] xs:text-[9px] sm:text-[10px] text-[#060D1A] font-bold flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#012CEB]" />
                          {st.period}
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 bg-[#EAE3D2] border border-[#060D1A] font-mono text-[8px] xs:text-[9px] sm:text-[10px] text-[#060D1A] font-bold flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#012CEB]" />
                          {st.location}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bebas text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-[#060D1A] leading-none">
                        {st.title}
                      </h3>

                      <div className="font-mono text-[10px] xs:text-[11px] sm:text-xs font-bold text-[#012CEB]">
                        {st.subtitle}
                      </div>

                      <p className="font-sans text-[11px] xs:text-xs sm:text-sm text-[#060D1A]/85 leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {st.description}
                      </p>

                      {/* Achievements list */}
                      <div className="space-y-1 pt-1 border-t border-dashed border-[#060D1A]/20">
                        {st.bullets.map((point, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-1.5 text-[10px] xs:text-[11px] sm:text-xs font-sans text-[#060D1A]">
                            <span className="w-3.5 h-3.5 bg-[#012CEB] text-white rounded flex items-center justify-center shrink-0 mt-0.5 text-[8px] font-bold">
                              ✓
                            </span>
                            <span className="line-clamp-2 sm:line-clamp-none">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Station 05 Interactive Radar & Launch Button or General Status */}
                      {st.id === 4 ? (
                        <div className="pt-1 flex flex-wrap items-center justify-between gap-1.5 bg-emerald-50 border border-emerald-300 p-1.5 sm:p-2">
                          <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                            </span>
                            <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-emerald-900">
                              STATUS: READY FOR SOFTWARE ONBOARDING
                            </span>
                          </div>

                          <button
                            onClick={triggerHireCelebration}
                            className="px-2 sm:px-3 py-1 bg-[#012CEB] text-white hover:bg-[#060D1A] font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#060D1A] flex items-center gap-1 shadow-sm transition-colors"
                          >
                            <Send className="w-3 h-3" />
                            <span>HIRE / CONNECT WITH SHIBAM</span>
                          </button>
                        </div>
                      ) : (
                        <div className="pt-1 flex items-center gap-1.5 font-mono text-[9px] xs:text-[10px] sm:text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-300 p-1 sm:p-1.5 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>Verified Academic & Experience Track Record</span>
                        </div>
                      )}

                    </div>

                    {/* Right Stat Card (4 cols) with Responsive Mobile Horizontal Layout */}
                    <div className="lg:col-span-4 bg-[#EAE3D2] border-2 sm:border-3 border-[#060D1A] p-2 sm:p-3 flex flex-row lg:flex-col justify-between items-center text-left lg:text-center shadow-[2px_2px_0px_#060D1A] gap-2">
                      
                      {/* Station Mini-Graphic */}
                      <div className="hidden lg:flex w-full justify-between items-center font-mono text-[10px] uppercase font-bold text-[#060D1A]/60 pb-1 border-b border-[#060D1A]/20">
                        <span>KEY HIGHLIGHT</span>
                        <span className="bg-amber-100 border border-[#060D1A] px-1.5 py-0.2 rounded text-[9px]">
                          {st.cuteTag}
                        </span>
                      </div>

                      {/* Emoji badge */}
                      <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white border-2 border-[#060D1A] rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-sm shrink-0">
                        {st.cuteIcon}
                      </div>

                      {/* Right/Bottom: Stat number */}
                      <div className="text-right lg:text-center">
                        <div className="font-bebas text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-[#012CEB] leading-none">
                          {st.stat}
                        </div>
                        <div className="font-mono text-[9px] sm:text-xs font-bold text-[#060D1A]">
                          {st.statLabel}
                        </div>
                      </div>

                      <div className="hidden lg:flex w-full pt-1 border-t border-[#060D1A]/20 justify-between items-center font-mono text-[9px] text-[#060D1A]">
                        <span className="font-bold">STATION {st.number}</span>
                        <span className="font-bold text-[#012CEB]">{st.name}</span>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Controls Bar */}
          <div className="flex items-center justify-between pt-2 border-t-2 border-[#060D1A] mt-2">
            
            <button
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className={`px-2.5 sm:px-3 py-1 border-2 border-[#060D1A] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
                activeIdx === 0
                  ? 'opacity-30 cursor-not-allowed bg-gray-200 text-gray-400'
                  : 'bg-[#F6F2E9] text-[#060D1A] hover:bg-[#060D1A] hover:text-white shadow-[2px_2px_0px_#060D1A]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREV</span>
            </button>

            <div className="font-mono text-[10px] sm:text-[11px] text-[#060D1A]/70 font-bold text-center px-1">
              {activeIdx < 4 ? '↓ Scroll down to advance stations 01 ➔ 05' : '✓ 05 IT Reached! Keep scrolling for Projects'}
            </div>

            <button
              onClick={handleNext}
              disabled={activeIdx === stations.length - 1}
              className={`px-2.5 sm:px-3 py-1 border-2 border-[#060D1A] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all ${
                activeIdx === stations.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-gray-200 text-gray-400'
                  : 'bg-[#012CEB] text-white hover:bg-[#060D1A] shadow-[2px_2px_0px_#060D1A]'
              }`}
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
