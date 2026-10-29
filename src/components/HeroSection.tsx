import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Code2, 
  CheckCircle2, 
  MapPin, 
  GraduationCap
} from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { playClickSound } from '../utils/sound';

interface HeroSectionProps {
  soundEnabled: boolean;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ soundEnabled, onOpenResume }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollTo = (id: string) => {
    playClickSound('nav', soundEnabled);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background watermark */}
      <div className="absolute right-0 top-10 pointer-events-none opacity-5 select-none font-bebas text-[200px] leading-none text-[#060D1A] z-0">
        MISHRA
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status badge & Tech Stickers Row */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EAE3D2] border-2 border-[#060D1A] shadow-[3px_3px_0px_#060D1A]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#060D1A]">
                BCA 2024–2027 • OPEN FOR ROLES
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 border border-[#060D1A] font-mono text-[11px] font-bold text-[#060D1A] rotate-[-2deg] shadow-[2px_2px_0px_#060D1A]">
              <span>💻</span>
              <span>Full-Stack & Web Dev</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 border border-[#060D1A] font-mono text-[11px] font-bold text-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
              <span>☕</span>
              <span>Chai & Code</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-pink-100 border border-[#060D1A] font-mono text-[11px] font-bold text-[#060D1A] rotate-[2deg] shadow-[2px_2px_0px_#060D1A]">
              <span>🕺</span>
              <span>Ex-Dance Coach</span>
            </div>
          </div>

          {/* Headline - Web & Software First */}
          <div className="relative">
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#060D1A] leading-[0.92]">
              SOFTWARE DEVELOPER
              <br />
              <span className="text-[#012CEB] underline decoration-4 underline-offset-8">
                & WEB ENGINEER.
              </span>
            </h1>
            
            {/* Friendly handwritten note */}
            <motion.div 
              initial={{ rotate: -8, opacity: 0 }}
              animate={{ rotate: -4, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-3 right-0 sm:right-16 bg-amber-200 border border-[#060D1A] px-2.5 py-1 text-xs font-handwriting text-[#060D1A] shadow-[2px_2px_0px_#060D1A] hidden sm:block"
            >
              (You can call me Shivam!)
            </motion.div>
          </div>

          {/* Strong Web & Software Bio */}
          <p className="font-sans text-base sm:text-lg text-[#060D1A]/85 max-w-xl leading-relaxed">
            Hi, I’m <strong className="font-bold text-[#060D1A]">Shibam Mishra</strong>. I am a BCA student (2024–2027) at SAM College (Barkatullah University, Bhopal) specializing in building fast, responsive web applications, Java backend systems, and relational databases. Having mentored 100+ dance performers earlier in Jamshedpur, I bring high discipline, calm problem-solving, and team sync to modern software development.
          </p>

          <p className="font-mono text-xs sm:text-sm text-[#060D1A]/70 max-w-lg border-l-2 border-[#012CEB] pl-3 py-1">
            Core Arsenal: <strong className="text-[#060D1A]">React, TypeScript & Tailwind</strong>, <strong className="text-[#060D1A]">Java (OOP & Collections)</strong>, and <strong className="text-[#060D1A]">MySQL Database</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-[#012CEB] text-white border-2 border-[#060D1A] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#060D1A] hover:bg-[#060D1A] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2 group"
            >
              <span>VIEW WEB & CODE PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                playClickSound('modal', soundEnabled);
                onOpenResume();
              }}
              className="px-5 py-3 bg-[#F6F2E9] hover:bg-[#EAE3D2] text-[#060D1A] border-2 border-[#060D1A] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#012CEB]" />
              <span>VIEW RESUME</span>
            </button>

            <a
              href="https://www.linkedin.com/in/shibam-mishra-08a73242b/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound('snap', soundEnabled)}
              className="px-4 py-3 bg-[#0077B5] hover:bg-[#060D1A] text-white border-2 border-[#060D1A] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* 3 Metric Pills - Software Focus */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t-2 border-[#060D1A]/10">
            <div className="bg-[#EAE3D2]/70 p-2 sm:p-2.5 border border-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
              <div className="font-bebas text-xl sm:text-2xl text-[#012CEB]">3+ APPS</div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#060D1A]/70 truncate">Projects Coded</div>
            </div>
            <div className="bg-[#EAE3D2]/70 p-2 sm:p-2.5 border border-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
              <div className="font-bebas text-xl sm:text-2xl text-[#060D1A]">SAM COLL.</div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#060D1A]/70 truncate">BCA 2024–2027</div>
            </div>
            <div className="bg-[#EAE3D2]/70 p-2 sm:p-2.5 border border-[#060D1A] shadow-[2px_2px_0px_#060D1A]">
              <div className="font-bebas text-xl sm:text-2xl text-emerald-700">JAVA + SQL</div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#060D1A]/70 truncate">Backend Focus</div>
            </div>
          </div>
        </div>

        {/* Right Column: Student Card with 3D Tilt (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="w-full max-w-md bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] shadow-[5px_5px_0px_#060D1A] sm:shadow-[10px_10px_0px_#060D1A] p-4 sm:p-6 relative select-none cursor-pointer"
            onClick={() => playClickSound('snap', soundEnabled)}
          >
            {/* Student ID badge & Cute Tape */}
            <div className="absolute -top-3.5 -left-3 bg-amber-100 border border-[#060D1A] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider font-bold text-[#060D1A] rotate-[-4deg] shadow-sm">
              📌 Shibam's Desk
            </div>

            <div className="absolute -top-3 -right-3 bg-[#012CEB] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border-2 border-[#060D1A] rotate-3 shadow-[2px_2px_0px_#060D1A]">
              BCA STUDENT ID
            </div>

            {/* Header */}
            <div className="border-b-2 border-dashed border-[#060D1A] pb-3 sm:pb-4 mb-3 sm:mb-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#060D1A]/60">
                <span>ACADEMIC PROFILE</span>
                <span>2024 — 2027</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-[#060D1A]/60">HOMETOWN</div>
                  <div className="font-bebas text-2xl sm:text-4xl text-[#060D1A]">JSR</div>
                  <div className="font-mono text-[9px] sm:text-[10px] font-bold text-[#060D1A]">JAMSHEDPUR</div>
                </div>

                <div className="flex flex-col items-center px-1 sm:px-4">
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#012CEB] font-bold">➔ HIGHER ED ➔</span>
                  <div className="w-12 sm:w-28 border-b-2 border-dotted border-[#012CEB] my-1" />
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#060D1A]/60">BCA DEGREE</span>
                </div>

                <div className="text-right">
                  <div className="font-mono text-[9px] sm:text-[10px] text-[#060D1A]/60">COLLEGE</div>
                  <div className="font-bebas text-2xl sm:text-4xl text-[#012CEB]">BPL</div>
                  <div className="font-mono text-[9px] sm:text-[10px] font-bold text-[#060D1A]">SAM COLL. BHOPAL</div>
                </div>
              </div>
            </div>

            {/* Information Grid */}
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2 bg-[#EAE3D2] p-2.5 border border-[#060D1A]">
                <div>
                  <div className="text-[10px] text-[#060D1A]/60 uppercase">NAME</div>
                  <div className="font-bold text-[#060D1A]">SHIBAM MISHRA</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#060D1A]/60 uppercase">AFFILIATION</div>
                  <div className="font-bold text-[#012CEB]">BARKATULLAH UNIV.</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 border border-[#060D1A] bg-white">
                  <div className="text-[9px] text-[#060D1A]/60 uppercase font-bold">SCHOOLING (JAC)</div>
                  <div className="font-bold text-[#060D1A] text-xs">Class X: 70.80%</div>
                  <div className="font-bold text-[#060D1A] text-xs">Class XII: 60.00%</div>
                </div>
                <div className="p-2 border border-[#060D1A] bg-white">
                  <div className="text-[9px] text-[#060D1A]/60 uppercase font-bold">TECHNICAL FOCUS</div>
                  <div className="font-bold text-[#012CEB] text-xs">Java OOP + SQL</div>
                  <div className="text-[10px] text-[#060D1A]">Web Applications</div>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center justify-between p-2.5 bg-emerald-50 border-2 border-emerald-700 text-emerald-900">
                <div className="flex items-center gap-1.5 font-bold text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Verified BCA Candidate</span>
                </div>
                <span className="font-mono text-[9px] bg-emerald-700 text-white px-1.5 py-0.5 font-bold uppercase">
                  OPEN TO WORK
                </span>
              </div>
            </div>

            {/* Barcode & Clean Footer */}
            <div className="mt-5 pt-3 border-t-2 border-dashed border-[#060D1A]">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#060D1A]/60 mb-1">
                <span>CONTACT: +91 9279523588</span>
                <span>BHOPAL / JSR</span>
              </div>

              {/* Clean Barcode */}
              <div className="relative bg-white p-2 border border-[#060D1A] flex justify-center items-center">
                <div className="h-10 w-full flex items-center justify-between overflow-hidden opacity-80">
                  {Array.from({ length: 44 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-full bg-[#060D1A]"
                      style={{
                        width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1) * 2}px`,
                        marginRight: `${(i % 4) + 1}px`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated Red Scan Line */}
                <motion.div
                  animate={{ y: [-15, 30, -15] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="absolute left-0 right-0 h-0.5 bg-red-600 shadow-[0_0_8px_red] pointer-events-none"
                />
              </div>

              <div className="text-center font-mono text-[9px] text-[#060D1A]/60 mt-1">
                SHIBAM MISHRA • SAM COLLEGE OF ENGINEERING & TECH (2024-2027)
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
