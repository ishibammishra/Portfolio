import React from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Users, 
  GraduationCap, 
  Award, 
  Compass, 
  Clock,
  Layers,
  Heart
} from 'lucide-react';
import { playClickSound } from '../utils/sound';

interface StorySectionProps {
  soundEnabled: boolean;
}

export const StorySection: React.FC<StorySectionProps> = ({ soundEnabled }) => {
  const lessons = [
    {
      title: "RHYTHM & PATIENCE",
      dance: "You can't rush an 8-count beat without losing the whole group.",
      tech: "You can't rush writing code. Clean structure and patience save hours of debugging later.",
      icon: Clock,
      tag: "PATIENCE"
    },
    {
      title: "STAYING CALM UNDER PRESSURE",
      dance: "Live on stage in front of hundreds, things will go wrong.",
      tech: "When an unexpected bug or error pops up, you don't panic. You trace it step by step.",
      icon: Heart,
      tag: "COMPOSURE"
    },
    {
      title: "BREAKING DOWN BIG PROBLEMS",
      dance: "A 4-minute choreography is just 30 small steps practiced one by one.",
      tech: "Complex applications are just small functions and classes working together.",
      icon: Layers,
      tag: "MODULAR"
    },
    {
      title: "COMMUNICATION & TEAMWORK",
      dance: "Teaching beginners requires clear words and endless encouragement.",
      tech: "Writing clear comments, discussing ideas openly, and collaborating with team members.",
      icon: Users,
      tag: "TEAMWORK"
    }
  ];

  const education = [
    {
      year: "2024 — 2027",
      degree: "BACHELOR OF COMPUTER APPLICATIONS (BCA)",
      institution: "SAM College of Engineering & Technology",
      affiliate: "Barkatullah University, Bhopal (M.P.)",
      status: "CURRENT • BCA 2024–2027 COHORT",
      badge: "COLLEGE",
      highlights: "Studying Core Java, Object-Oriented Programming (OOP), Database Management Systems (SQL), Operating Systems, and Web Technologies."
    },
    {
      year: "2021 — 2023",
      degree: "HIGHER SECONDARY (CLASS XII)",
      institution: "Jharkhand Academic Council (JAC)",
      affiliate: "Jamshedpur Board",
      status: "60.00% (FIRST ATTEMPT)",
      badge: "SCHOOLING",
      highlights: "Physics, Chemistry, Mathematics, and Computer Science fundamentals from Jamshedpur."
    },
    {
      year: "2020 — 2021",
      degree: "SECONDARY SCHOOL (CLASS X)",
      institution: "Jharkhand Academic Council (JAC)",
      affiliate: "Jamshedpur Board",
      status: "70.80% (PASSED WITH DISTINCTION)",
      badge: "SCHOOLING",
      highlights: "Built a solid academic foundation in mathematics, analytical problem solving, and science in Jamshedpur."
    }
  ];

  return (
    <section id="story" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t-2 border-[#060D1A]">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#012CEB] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#060D1A]">
          <Compass className="w-3.5 h-3.5" />
          MY STORY // DISCIPLINE & CODE
        </div>
        <h2 className="font-bebas text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-[#060D1A] leading-tight break-words">
          BUILDING DISCIPLINE<br />
          <span className="text-[#012CEB]">INTO EVERY LINE OF CODE.</span>
        </h2>
        <p className="font-sans text-base text-[#060D1A]/75 max-w-2xl mt-2 leading-relaxed">
          Before committing full-time to software engineering and database systems, mentoring 100+ students on stage in Jamshedpur shaped my core work ethic. It taught me the patience, structured practice, and teamwork that I now pour into writing clean, maintainable software.
        </p>
      </div>

      {/* Main Grid: Polaroid + 4 Lessons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* Left: Dance Teacher Polaroid (5 cols) */}
        <div className="lg:col-span-5">
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-4 sm:p-6 border-3 sm:border-4 border-[#060D1A] shadow-[4px_4px_0px_#060D1A] sm:shadow-[8px_8px_0px_#060D1A] rotate-0 sm:rotate-[-2deg] relative"
            onClick={() => playClickSound('snap', soundEnabled)}
          >
            {/* Top Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-amber-100 border border-[#060D1A]/30 rotate-1 shadow-sm flex items-center justify-center font-mono text-[9px] uppercase tracking-wider text-[#060D1A]/70 font-bold">
              JAMSHEDPUR MEMORIES
            </div>

            {/* Photo Graphic */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#060D1A] via-[#012CEB] to-[#060D1A] border-2 border-[#060D1A] relative flex flex-col justify-end p-5 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <Music className="w-4 h-4 text-amber-300" />
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">
                    DANCE TEACHER & CHOREOGRAPHER
                  </span>
                </div>
                <div className="font-bebas text-3xl sm:text-4xl leading-none">
                  100+ STUDENTS TRAINED ON STAGE
                </div>
              </div>
            </div>

            {/* Handwritten Note */}
            <div className="pt-4 pb-1">
              <p className="font-handwriting text-base sm:text-lg text-[#060D1A] leading-relaxed">
                "When a student gets nervous on stage, you don't scold them. You slow down the count, break the steps into pieces, and practice with them. That is the exact way I solve tricky programming problems."
              </p>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[#060D1A]/60 pt-2 border-t border-dashed border-[#060D1A]/30">
                <span>STAGE INSTRUCTOR • JAMSHEDPUR</span>
                <span className="font-bold text-[#060D1A]">SHIBAM MISHRA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: 4 Lessons (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider font-bold text-[#012CEB] mb-2">
            LESSONS FROM THE STAGE APPLIED TO SOFTWARE:
          </div>

          {lessons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#EAE3D2] border-2 border-[#060D1A] p-4 shadow-[4px_4px_0px_#060D1A]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#060D1A]">
                    <span className="w-5 h-5 rounded bg-[#060D1A] text-white flex items-center justify-center text-[10px]">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#012CEB]" />
                    <span>{item.title}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#012CEB] text-white font-mono text-[9px] font-bold uppercase">
                    {item.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-[#F6F2E9] p-2.5 border border-[#060D1A]/20">
                    <span className="font-mono text-[9px] font-bold text-[#060D1A]/50 block uppercase">
                      ON THE DANCE FLOOR
                    </span>
                    <span className="font-sans text-[#060D1A]">
                      {item.dance}
                    </span>
                  </div>
                  <div className="bg-[#F6F2E9] p-2.5 border border-[#012CEB]/30">
                    <span className="font-mono text-[9px] font-bold text-[#012CEB] block uppercase">
                      IN MY CODE
                    </span>
                    <span className="font-sans text-[#060D1A] font-medium">
                      {item.tech}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Education Timeline */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6 text-[#012CEB]" />
          <h3 className="font-bebas text-3xl sm:text-4xl text-[#060D1A]">
            EDUCATION & SCHOOLING BACKGROUND
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#F6F2E9] border-2 border-[#060D1A] p-5 shadow-[5px_5px_0px_#060D1A] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] font-bold text-[#012CEB] mb-2">
                  <span>{edu.year}</span>
                  <span className="px-2 py-0.5 bg-[#060D1A] text-white text-[9px] uppercase tracking-wider font-bold">
                    {edu.badge}
                  </span>
                </div>

                <h4 className="font-bebas text-2xl text-[#060D1A] leading-tight mb-1">
                  {edu.degree}
                </h4>

                <div className="font-sans text-xs font-bold text-[#060D1A] mb-1">
                  {edu.institution}
                </div>

                <div className="font-mono text-[11px] text-[#060D1A]/60 mb-3">
                  {edu.affiliate}
                </div>

                <p className="font-sans text-xs text-[#060D1A]/80 leading-relaxed border-t border-dashed border-[#060D1A]/30 pt-3">
                  {edu.highlights}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#060D1A] flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#060D1A]/60 font-bold">PERCENTAGE / STATUS:</span>
                <span className="font-bold text-[#012CEB] bg-[#EAE3D2] px-2 py-0.5 border border-[#060D1A]">
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
