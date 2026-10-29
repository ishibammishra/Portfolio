import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal as TerminalIcon, 
  Cpu, 
  Check, 
  Copy, 
  Layers, 
  Workflow 
} from 'lucide-react';
import { playClickSound } from '../utils/sound';

interface SkillsSectionProps {
  soundEnabled: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ soundEnabled }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'sql' | 'ts'>('java');
  const [copied, setCopied] = useState(false);

  const skillGroups = [
    {
      title: "JAVA & BACKEND LOGIC",
      desc: "Strong focus on Object-Oriented Programming (OOP), clean class design, and data structures.",
      icon: Cpu,
      skills: [
        { name: "Java (Core & OOP)", level: "90%", note: "Classes, Objects, Inheritance, Polymorphism, Encapsulation" },
        { name: "Collections Framework", level: "85%", note: "ArrayList, HashMap, LinkedList, Iterators" },
        { name: "Exception Handling", level: "88%", note: "Try-catch blocks, custom exceptions, robust error catching" },
        { name: "Data Structures Basics", level: "80%", note: "Arrays, Stacks, Queues, Searching & Sorting algorithms" },
      ]
    },
    {
      title: "DATABASE & SQL (MYSQL)",
      desc: "Writing relational schemas with primary/foreign keys, joins, and data validation.",
      icon: Database,
      skills: [
        { name: "MySQL & Relational Design", level: "88%", note: "DDL, DML, Primary Keys, Foreign Key constraints" },
        { name: "Queries & Joins", level: "85%", note: "INNER JOIN, LEFT JOIN, Aggregations, GROUP BY, Subqueries" },
        { name: "Normalization (1NF-3NF)", level: "82%", note: "Organizing tables to eliminate redundant data" },
        { name: "JDBC Connectivity", level: "80%", note: "Connecting Java code to MySQL databases safely" },
      ]
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "Building clean, responsive, and easy-to-use interfaces across desktop and mobile screens.",
      icon: Code2,
      skills: [
        { name: "HTML5 & Semantic Markup", level: "95%", note: "Accessible forms, page structure, modern elements" },
        { name: "CSS3, Flexbox & Grid", level: "92%", note: "Responsive layouts, mobile-first design, animations" },
        { name: "JavaScript (ES6+)", level: "85%", note: "DOM manipulation, event handling, fetch API, promises" },
        { name: "React & Tailwind CSS", level: "82%", note: "Component structure, state management, modern styling" },
      ]
    },
    {
      title: "TOOLS & PRODUCTIVITY",
      desc: "Day-to-day tools for version control, coding environments, and documentation.",
      icon: Workflow,
      skills: [
        { name: "Git & GitHub", level: "85%", note: "Version control, repositories, commits, branch management" },
        { name: "VS Code & Eclipse IDE", level: "90%", note: "Java development in Eclipse, web dev in VS Code" },
        { name: "Microsoft Office Suite", level: "95%", note: "Excel sheets & formulas, Word documentation, PowerPoint" },
        { name: "Fast Learning & Teamwork", level: "95%", note: "Adaptable, quick learner, patient communicator" },
      ]
    }
  ];

  const codeSnippets = {
    java: `// StudentResult.java - Core Java Implementation
package com.shibammishra.portal;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class StudentResult {
    private final String rollNumber;
    private final String studentName;
    private final double[] marks; // Java, SQL, WebDev, OS

    public StudentResult(String rollNumber, String studentName, double[] marks) {
        if (marks.length != 4) {
            throw new IllegalArgumentException("Expected exactly 4 subject marks");
        }
        this.rollNumber = rollNumber;
        this.studentName = studentName;
        this.marks = marks.clone();
    }

    public double calculatePercentage() {
        double total = 0;
        for (double mark : marks) total += mark;
        return (total / 400.0) * 100.0;
    }

    public String computeDivision() {
        double pct = calculatePercentage();
        if (pct >= 60.0) return "FIRST DIVISION";
        if (pct >= 45.0) return "SECOND DIVISION";
        return "PASS";
    }

    public boolean saveRecord(Connection conn) throws SQLException {
        String sql = "INSERT INTO results (roll_no, name, percentage, division) VALUES (?, ?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, this.rollNumber);
            stmt.setString(2, this.studentName);
            stmt.setDouble(3, calculatePercentage());
            stmt.setString(4, computeDivision());
            return stmt.executeUpdate() > 0;
        }
    }
}`,
    sql: `-- schema.sql - Student Result Management System Database
CREATE DATABASE IF NOT EXISTS student_portal;
USE student_portal;

-- Students Table
CREATE TABLE IF NOT EXISTS students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    college_name VARCHAR(120) DEFAULT 'SAM College Bhopal',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Marks Table
CREATE TABLE IF NOT EXISTS marks_record (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    java_score DECIMAL(5,2) CHECK (java_score BETWEEN 0 AND 100),
    sql_score DECIMAL(5,2) CHECK (sql_score BETWEEN 0 AND 100),
    web_score DECIMAL(5,2) CHECK (web_score BETWEEN 0 AND 100),
    os_score DECIMAL(5,2) CHECK (os_score BETWEEN 0 AND 100),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE
);

-- Query to calculate percentage and rank
SELECT 
    s.roll_number,
    s.full_name,
    ROUND((m.java_score + m.sql_score + m.web_score + m.os_score) / 4.0, 2) AS aggregate_pct,
    CASE 
        WHEN ((m.java_score + m.sql_score + m.web_score + m.os_score) / 4.0) >= 60.0 THEN 'FIRST DIVISION'
        ELSE 'SECOND DIVISION'
    END AS status
FROM students s
INNER JOIN marks_record m ON s.student_id = m.student_id
ORDER BY aggregate_pct DESC;`,
    ts: `// PortfolioConfig.ts - Clean TypeScript Types
export interface StudentProfile {
  name: string;
  phone: string;
  email: string;
  degree: string;
  college: string;
  graduationYear: number;
  skills: string[];
}

export const shibamMishra: StudentProfile = {
  name: "Shibam Mishra",
  phone: "+91 9279523588",
  email: "shivammishra9279523588@gmail.com",
  degree: "Bachelor of Computer Applications (BCA)",
  college: "SAM College of Engineering & Technology, Bhopal",
  graduationYear: 2027,
  skills: ["Java OOP", "SQL Databases", "JavaScript", "React", "Tailwind CSS"]
};`
  };

  const handleCopyCode = () => {
    playClickSound('snap', soundEnabled);
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t-2 border-[#060D1A]">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#012CEB] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#060D1A]">
          <Code2 className="w-3.5 h-3.5" />
          TECHNICAL SKILLS
        </div>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#060D1A] leading-tight">
          WHAT I WORK WITH &<br />
          <span className="text-[#012CEB]">REAL SAMPLE CODE.</span>
        </h2>
        <p className="font-sans text-base text-[#060D1A]/75 max-w-2xl mt-2 leading-relaxed">
          An honest breakdown of the languages, tools, and databases I use for college assignments, exam projects, and self-built applications.
        </p>
      </div>

      {/* 4 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="bg-[#F6F2E9] border-2 border-[#060D1A] p-6 shadow-[6px_6px_0px_#060D1A] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#060D1A] text-white flex items-center justify-center border border-[#060D1A]">
                      <Icon className="w-4 h-4 text-[#012CEB]" />
                    </div>
                    <h3 className="font-mono text-xs font-bold uppercase text-[#060D1A] tracking-wider">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#060D1A]/50">0{idx + 1}</span>
                </div>

                <p className="font-sans text-xs text-[#060D1A]/70 mb-5 leading-relaxed">
                  {group.desc}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="bg-[#EAE3D2] p-2.5 border border-[#060D1A]/30">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-xs font-bold text-[#060D1A]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-[#012CEB]">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white border border-[#060D1A]/30 overflow-hidden mb-1">
                        <div
                          className="h-full bg-[#012CEB]"
                          style={{ width: skill.level }}
                        />
                      </div>
                      <div className="font-mono text-[10px] text-[#060D1A]/60">
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Code Viewer */}
      <div className="bg-[#060D1A] border-3 sm:border-4 border-[#060D1A] text-[#F6F2E9] shadow-[5px_5px_0px_#012CEB] sm:shadow-[10px_10px_0px_#012CEB]">
        {/* Terminal Header */}
        <div className="bg-[#0e172a] px-4 py-3 border-b-2 border-[#060D1A] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-3">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <TerminalIcon className="w-4 h-4 text-[#012CEB]" />
            <span className="font-mono text-xs font-bold text-gray-300">
              shibam@bca-sam:~/projects
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 bg-[#060D1A] p-1 border border-white/20">
            <button
              onClick={() => {
                setActiveTab('java');
                playClickSound('snap', soundEnabled);
              }}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                activeTab === 'java'
                  ? 'bg-[#012CEB] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              StudentResult.java
            </button>

            <button
              onClick={() => {
                setActiveTab('sql');
                playClickSound('snap', soundEnabled);
              }}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                activeTab === 'sql'
                  ? 'bg-[#012CEB] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              schema.sql
            </button>

            <button
              onClick={() => {
                setActiveTab('ts');
                playClickSound('snap', soundEnabled);
              }}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                activeTab === 'ts'
                  ? 'bg-[#012CEB] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PortfolioConfig.ts
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3 py-1 border border-white/20 bg-white/5 hover:bg-white/15 text-xs font-mono font-bold text-gray-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY CODE</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-gray-200 bg-[#060D1A] max-h-[400px] overflow-y-auto">
          <pre className="grid grid-cols-[auto_1fr] gap-x-4">
            <span className="select-none text-gray-600 text-right space-y-0.5">
              {codeSnippets[activeTab].split('\n').map((_, i) => (
                <span key={i} className="block leading-relaxed">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              ))}
            </span>
            <code className="text-gray-100 overflow-x-auto whitespace-pre">
              {codeSnippets[activeTab]}
            </code>
          </pre>
        </div>

        {/* Status Bar */}
        <div className="bg-[#0b1329] px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">● COMPILED SUCCESSFULLY</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-amber-200">☕ 0 Bugs (Almost)</span>
            <span>Shibam Mishra • SAM College Bhopal</span>
          </div>
        </div>
      </div>

    </section>
  );
};
