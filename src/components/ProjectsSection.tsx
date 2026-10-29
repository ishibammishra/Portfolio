import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Code2, 
  Database, 
  X, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { playClickSound } from '../utils/sound';

interface ProjectsSectionProps {
  soundEnabled: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ soundEnabled }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "student-result-system",
      title: "STUDENT RESULT MANAGEMENT SYSTEM",
      subtitle: "Java Core, JDBC & MySQL Relational Database",
      category: "JAVA & SQL BACKEND",
      period: "2024",
      description: "An academic desktop software application developed in Java with a MySQL database backend using JDBC. Designed to replace manual tallying of semester marks, automatically calculate aggregate percentages, assign divisions (First / Second / Pass), and store student transcripts reliably.",
      impact: "Successfully tested with 200+ student records with accurate calculations and zero data loss.",
      technologies: ["Java Core", "JDBC", "MySQL", "OOP Concepts", "Exception Handling"],
      highlights: [
        "Structured with clean Object-Oriented design separating data logic from calculation methods.",
        "Uses PreparedStatement to safely insert and query marks without SQL injection risks.",
        "Automatic division classification based on university percentage thresholds.",
        "Handles error states gracefully when database connectivity is interrupted."
      ],
      codeSnippet: `// Query to fetch student results with division
SELECT s.roll_number, s.full_name, r.percentage, r.division 
FROM students s 
JOIN results r ON s.student_id = r.student_id 
WHERE r.percentage >= 60.0;`
    },
    {
      id: "shibam-portfolio-react",
      title: "PERSONAL PORTFOLIO WEBSITE",
      subtitle: "React 18, TypeScript & Tailwind CSS",
      category: "WEB DEVELOPMENT",
      period: "2025",
      description: "The website you are looking at right now. Built to tell my story authentically — from mentoring 100+ dancers on stage in Jamshedpur to studying Computer Applications in Bhopal. Features a smooth physics-based cursor, scroll-linked career stations, and a brutalist design.",
      impact: "Zero-dependency pure TypeScript architecture with 60fps animations.",
      technologies: ["TypeScript", "React 18", "Tailwind CSS", "Framer Motion", "Web Audio API"],
      highlights: [
        "Custom 10-ball spring physics trailing cursor with hover morphing.",
        "Interactive career scrubber moving from Station 01 Jamshedpur to 05 IT Destination.",
        "Audio feedback using native Web Audio API synthesis without external audio files.",
        "Completely responsive across mobile, tablet, and desktop screens."
      ],
      codeSnippet: `// Smooth spring physics for timeline scroll
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 220,
  damping: 28
});`
    },
    {
      id: "dance-academy-platform",
      title: "DANCE ACADEMY WEB PAGE",
      subtitle: "Responsive HTML5, CSS3 & JavaScript",
      category: "COMMERCIAL LANDING PAGE",
      period: "2023",
      description: "A responsive website built for a local dance studio in Jamshedpur. Helps students and parents check batch timings (Hip-Hop, Contemporary, Freestyle), see photo/video highlights, and submit inquiry forms for weekend workshops.",
      impact: "Helped over 100 students and parents find class timings and register online.",
      technologies: ["HTML5", "Modern CSS3", "JavaScript ES6", "Mobile-First Design", "Form Validation"],
      highlights: [
        "Interactive schedule filter by dance style, age group, and batch timing.",
        "Lightweight build that loads quickly even on slow mobile data connections.",
        "Form validation ensuring contact details are entered before submission.",
        "Clean mobile-friendly layout tested across multiple Android and iOS devices."
      ],
      codeSnippet: `// Filter classes by dance style
function filterBatches(selectedStyle) {
  return classList.filter(item => item.style === selectedStyle);
}`
    }
  ];

  const handleOpenModal = (project: Project) => {
    playClickSound('modal', soundEnabled);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    playClickSound('snap', soundEnabled);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t-2 border-[#060D1A]">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#012CEB] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#060D1A]">
          <FolderGit2 className="w-3.5 h-3.5" />
          FEATURED PROJECTS
        </div>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#060D1A] leading-tight">
          PROJECTS I HAVE BUILT &<br />
          <span className="text-[#012CEB]">WHAT THEY DO.</span>
        </h2>
        <p className="font-sans text-base text-[#060D1A]/75 max-w-2xl mt-2 leading-relaxed">
          Practical projects solving real problems. Click any card below to see details about the code, tools used, and what I learned.
        </p>
      </div>

      {/* Projects 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#F6F2E9] border-4 border-[#060D1A] p-6 shadow-[6px_6px_0px_#060D1A] flex flex-col justify-between hover:shadow-[10px_10px_0px_#012CEB] hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-[#060D1A]">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-[#012CEB]">
                    PROJECT 0{idx + 1}
                  </span>
                  <span className="font-mono text-[9px] bg-amber-100 text-[#060D1A] border border-[#060D1A] px-1.5 py-0.5 font-bold">
                    {idx === 0 ? '🎓 Java & SQL' : idx === 1 ? '⚡ React + TS' : '🕺 Dance Portal'}
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#060D1A] text-white px-2 py-0.5 uppercase tracking-wider font-bold">
                  {project.period}
                </span>
              </div>

              <div className="font-mono text-[10px] text-[#060D1A]/60 uppercase tracking-wider font-bold mb-1">
                {project.category}
              </div>

              <h3 className="font-bebas text-2xl sm:text-3xl text-[#060D1A] group-hover:text-[#012CEB] transition-colors leading-none mb-3">
                {project.title}
              </h3>

              <p className="font-sans text-xs text-[#060D1A]/80 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Pill Grid */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] font-bold bg-[#EAE3D2] border border-[#060D1A] px-2 py-0.5 text-[#060D1A]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="font-mono text-[9px] font-bold bg-white border border-[#060D1A] px-1.5 py-0.5 text-[#060D1A]/70">
                    +{project.technologies.length - 4} MORE
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Action Ribbon */}
            <div className="pt-3 border-t-2 border-[#060D1A] flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#060D1A] group-hover:text-[#012CEB] flex items-center gap-1">
                VIEW DETAILS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#012CEB]" />
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#060D1A]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] max-w-2xl w-full p-4 sm:p-8 shadow-[5px_5px_0px_#012CEB] sm:shadow-[12px_12px_0px_#012CEB] max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-9 h-9 bg-[#060D1A] text-white flex items-center justify-center border-2 border-[#060D1A] hover:bg-[#012CEB] transition-colors shadow-[2px_2px_0px_#060D1A]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-4 pr-10">
                <div className="font-mono text-xs font-bold text-[#012CEB] uppercase mb-1">
                  PROJECT OVERVIEW // {selectedProject.category}
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#060D1A] leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="font-mono text-xs text-[#060D1A]/60 mt-1">
                  {selectedProject.subtitle}
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-[#060D1A] leading-relaxed mb-6 bg-white/70 p-4 border border-[#060D1A]">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase text-[#060D1A] tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#012CEB]" />
                  KEY FEATURES & WHAT I IMPLEMENTED
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EAE3D2] p-2.5 border border-[#060D1A] text-xs font-sans text-[#060D1A] flex items-start gap-2"
                    >
                      <span className="w-4 h-4 bg-[#012CEB] text-white rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Stack */}
              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold uppercase text-[#060D1A] tracking-wider mb-2">
                  TOOLS & TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#060D1A] text-[#F6F2E9] font-mono text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              {selectedProject.codeSnippet && (
                <div className="mb-6 bg-[#060D1A] p-4 text-[#F6F2E9] border-2 border-[#060D1A] font-mono text-xs">
                  <div className="text-gray-400 text-[10px] uppercase mb-2 border-b border-gray-700 pb-1">
                    CODE SAMPLE
                  </div>
                  <pre className="overflow-x-auto text-emerald-400">
                    <code>{selectedProject.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t-2 border-[#060D1A] flex items-center justify-between">
                <div className="font-mono text-xs text-[#060D1A]/70">
                  IMPACT: <strong className="text-[#060D1A]">{selectedProject.impact}</strong>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2 bg-[#012CEB] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#060D1A] shadow-[2px_2px_0px_#060D1A] hover:bg-[#060D1A] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
