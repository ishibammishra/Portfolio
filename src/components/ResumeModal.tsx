import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2, Award, BookOpen, Briefcase } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { playClickSound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, soundEnabled }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound('snap', soundEnabled);
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-[#060D1A]/85 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] max-w-3xl w-full p-4 sm:p-10 shadow-[5px_5px_0px_#012CEB] sm:shadow-[14px_14px_0px_#012CEB] max-h-[92vh] overflow-y-auto relative text-[#060D1A]"
        >
          {/* Top Actions */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#060D1A]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#012CEB] rounded-full" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#060D1A]">
                RESUME // SHIBAM MISHRA
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-[#F6F2E9] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase transition-all shadow-[2px_2px_0px_#060D1A]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / PDF</span>
              </button>

              <button
                onClick={() => {
                  playClickSound('snap', soundEnabled);
                  onClose();
                }}
                className="w-8 h-8 bg-[#060D1A] text-white flex items-center justify-center border-2 border-[#060D1A] hover:bg-red-600 transition-colors shadow-[2px_2px_0px_#060D1A]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Content Container (Printable) */}
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <h1 className="font-bebas text-5xl sm:text-6xl text-[#060D1A] leading-none mb-1">
                SHIBAM MISHRA
              </h1>
              <p className="font-mono text-xs font-bold text-[#012CEB] uppercase tracking-wider mb-3">
                BACHELOR OF COMPUTER APPLICATIONS (BCA) • SOFTWARE DEVELOPER
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs bg-[#EAE3D2] p-3 border border-[#060D1A]">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#012CEB]" />
                  <span>+91 9279523588</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#012CEB]" />
                  <span className="truncate">shivammishra9279523588@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                  <a href="https://www.linkedin.com/in/shibam-mishra-08a73242b/" target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
                    in/shibam-mishra
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#012CEB]" />
                  <span>Bhopal / Jamshedpur</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#012CEB] mb-2 flex items-center gap-1.5 border-b border-[#060D1A]/30 pb-1">
                <BookOpen className="w-3.5 h-3.5" />
                PROFESSIONAL STATEMENT
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#060D1A]/90 leading-relaxed">
                Motivated 3rd-year Bachelor of Computer Applications (BCA) candidate at SAM College (Barkatullah University, Bhopal) with practical programming skills in Java Object-Oriented Programming, SQL Relational Databases, and Responsive Web Technologies. Combines technical rigor with high-stakes discipline honed as a dance instructor directing 100+ performers. Eager to contribute disciplined, scalable, and well-tested code in a collaborative software engineering role.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#012CEB] mb-2 flex items-center gap-1.5 border-b border-[#060D1A]/30 pb-1">
                <Award className="w-3.5 h-3.5" />
                ACADEMIC CREDENTIALS
              </h2>
              
              <div className="space-y-3 font-sans text-xs">
                <div className="bg-white/80 p-3 border border-[#060D1A]">
                  <div className="flex justify-between items-start font-mono text-xs">
                    <strong>BACHELOR OF COMPUTER APPLICATIONS (BCA)</strong>
                    <span className="text-[#012CEB] font-bold">2024 – 2027</span>
                  </div>
                  <div className="text-[#060D1A]/70 text-[11px] mb-1">
                    SAM College of Engineering & Technology (Barkatullah University, Bhopal)
                  </div>
                  <div className="text-[11px] text-[#060D1A]/85">
                    Coursework: Java Core & OOP, Database Management Systems, Data Structures, Web Development, Computer Networks.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="bg-white/80 p-2.5 border border-[#060D1A]">
                    <div className="font-mono text-[11px] font-bold text-[#060D1A]">
                      CLASS XII (HIGHER SECONDARY)
                    </div>
                    <div className="text-[10px] text-[#060D1A]/70">Jharkhand Academic Council (JAC) • Jamshedpur</div>
                    <div className="font-mono text-xs font-bold text-[#012CEB] mt-1">SCORE: 60.00%</div>
                  </div>

                  <div className="bg-white/80 p-2.5 border border-[#060D1A]">
                    <div className="font-mono text-[11px] font-bold text-[#060D1A]">
                      CLASS X (SECONDARY SCHOOL)
                    </div>
                    <div className="text-[10px] text-[#060D1A]/70">Jharkhand Academic Council (JAC) • Jamshedpur</div>
                    <div className="font-mono text-xs font-bold text-[#012CEB] mt-1">SCORE: 70.80%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#012CEB] mb-2 flex items-center gap-1.5 border-b border-[#060D1A]/30 pb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                TECHNICAL ARSENAL
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                <div className="bg-[#EAE3D2] p-2.5 border border-[#060D1A]">
                  <strong className="text-[#060D1A] block mb-1">PROGRAMMING & BACKEND:</strong>
                  <span className="text-[#060D1A]/80 text-[11px]">Java (Core, OOP, Collections, Multi-threading, Exception Handling), JDBC.</span>
                </div>

                <div className="bg-[#EAE3D2] p-2.5 border border-[#060D1A]">
                  <strong className="text-[#060D1A] block mb-1">DATABASE ARCHITECTURE:</strong>
                  <span className="text-[#060D1A]/80 text-[11px]">MySQL, Relational Schema Design, Foreign Keys, Complex Joins, Normalization.</span>
                </div>

                <div className="bg-[#EAE3D2] p-2.5 border border-[#060D1A]">
                  <strong className="text-[#060D1A] block mb-1">WEB FRONTEND:</strong>
                  <span className="text-[#060D1A]/80 text-[11px]">HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Responsive Design.</span>
                </div>

                <div className="bg-[#EAE3D2] p-2.5 border border-[#060D1A]">
                  <strong className="text-[#060D1A] block mb-1">TOOLS & OFFICE SUITE:</strong>
                  <span className="text-[#060D1A]/80 text-[11px]">Git, GitHub, VS Code, Eclipse IDE, Microsoft Excel, Word, PowerPoint.</span>
                </div>
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#012CEB] mb-2 flex items-center gap-1.5 border-b border-[#060D1A]/30 pb-1">
                <Briefcase className="w-3.5 h-3.5" />
                KEY SOFTWARE PROJECTS
              </h2>

              <div className="space-y-2.5 font-sans text-xs">
                <div className="bg-white/80 p-3 border border-[#060D1A]">
                  <div className="flex justify-between items-start font-mono text-xs">
                    <strong>STUDENT RESULT ARCHIVE & MANAGEMENT SYSTEM</strong>
                    <span className="text-[#012CEB] font-bold">JAVA + MYSQL</span>
                  </div>
                  <p className="text-[#060D1A]/80 text-[11px] mt-1">
                    Engineered a standalone academic calculation system in Java with JDBC connectivity to MySQL. Automated multi-subject percentage calculation, grade categorizations, and student transcript records for 200+ mock profiles with complete validation.
                  </p>
                </div>

                <div className="bg-white/80 p-3 border border-[#060D1A]">
                  <div className="flex justify-between items-start font-mono text-xs">
                    <strong>BRUTALIST PERSONAL DEV ODYSSEY & PORTFOLIO</strong>
                    <span className="text-[#012CEB] font-bold">REACT + TS + FRAMER MOTION</span>
                  </div>
                  <p className="text-[#060D1A]/80 text-[11px] mt-1">
                    Architected a 60fps kinetic web application featuring custom physics trailing cursors, scroll-driven scrubbing across 5 career stations, Web Audio synthesis, and responsive mobile-first typography.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership & Co-Curricular */}
            <div>
              <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[#012CEB] mb-2 flex items-center gap-1.5 border-b border-[#060D1A]/30 pb-1">
                <Award className="w-3.5 h-3.5" />
                LEADERSHIP & MENTORSHIP
              </h2>
              <div className="bg-[#EAE3D2] p-3 border border-[#060D1A] text-xs">
                <div className="flex justify-between items-center font-mono font-bold mb-1">
                  <span>HEAD DANCE INSTRUCTOR & CHOREOGRAPHER</span>
                  <span className="text-[#012CEB]">JAMSHEDPUR</span>
                </div>
                <p className="text-[#060D1A]/85 text-[11px]">
                  Trained and mentored over 100+ students across various age groups. Organized stage rehearsals, public performances, and teamwork coordination under strict live deadlines.
                </p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t-2 border-[#060D1A] flex justify-between items-center font-mono text-xs">
            <span className="text-[#060D1A]/60">VERIFIED OFFICIAL RESUME // 2024–2027</span>
            <button
              onClick={() => {
                playClickSound('snap', soundEnabled);
                onClose();
              }}
              className="px-4 py-2 bg-[#060D1A] text-white uppercase font-bold hover:bg-[#012CEB] transition-colors"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
