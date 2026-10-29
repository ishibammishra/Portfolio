import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  MessageSquare, 
  Clock, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { playClickSound } from '../utils/sound';

interface ContactSectionProps {
  soundEnabled: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ soundEnabled }) => {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [linkedinCopied, setLinkedinCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Interview / Job Opportunity for Shibam Mishra',
    message: ''
  });

  const phoneNumber = "+91 9279523588";
  const emailAddress = "shivammishra9279523588@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/shibam-mishra-08a73242b/";

  const copyToClipboard = (text: string, type: 'phone' | 'email' | 'linkedin') => {
    playClickSound('snap', soundEnabled);
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2200);
    } else if (type === 'email') {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } else {
      setLinkedinCopied(true);
      setTimeout(() => setLinkedinCopied(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound('modal', soundEnabled);

    // Trigger Canvas Confetti Explosion
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#012CEB', '#060D1A', '#F6F2E9', '#10B981']
    });

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t-2 border-[#060D1A]">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#012CEB] text-white font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_#060D1A]">
          <MessageSquare className="w-3.5 h-3.5" />
          GET IN TOUCH
        </div>
        <h2 className="font-bebas text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-[#060D1A] leading-tight break-words">
          CONNECT WITH SHIBAM.<br />
          <span className="text-[#012CEB]">READY FOR NEW OPPORTUNITIES.</span>
        </h2>
        <p className="font-sans text-base text-[#060D1A]/75 max-w-2xl mt-2 leading-relaxed">
          Looking for software roles, web development internships, or technical opportunities. Feel free to call directly or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Phone Card */}
          <div className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] p-4 sm:p-5 shadow-[4px_4px_0px_#060D1A] sm:shadow-[6px_6px_0px_#060D1A]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-[#060D1A]/60 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#012CEB]" />
                PHONE & WHATSAPP
              </span>
              <span className="font-mono text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-800 px-1.5 py-0.5 font-bold uppercase">
                ACTIVE
              </span>
            </div>
            
            <div className="font-mono text-lg sm:text-xl font-bold text-[#060D1A] mb-3">
              {phoneNumber}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
                className="flex-1 py-2 px-3 bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-[#F6F2E9] text-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all flex items-center justify-center gap-1.5"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                onClick={() => playClickSound('snap', soundEnabled)}
                className="py-2 px-4 bg-[#012CEB] text-white hover:bg-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all"
              >
                CALL NOW
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] p-4 sm:p-5 shadow-[4px_4px_0px_#060D1A] sm:shadow-[6px_6px_0px_#060D1A]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-[#060D1A]/60 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#012CEB]" />
                EMAIL ADDRESS
              </span>
              <span className="font-mono text-[9px] bg-blue-100 text-[#012CEB] border border-[#012CEB] px-1.5 py-0.5 font-bold uppercase">
                REPLIES FAST
              </span>
            </div>
            
            <div className="font-mono text-xs sm:text-sm font-bold text-[#060D1A] truncate mb-3 select-all">
              {emailAddress}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="flex-1 py-2 px-3 bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-[#F6F2E9] text-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all flex items-center justify-center gap-1.5"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}?subject=Job%20Opportunity%20-%20Shibam%20Mishra`}
                onClick={() => playClickSound('snap', soundEnabled)}
                className="py-2 px-4 bg-[#012CEB] text-white hover:bg-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all"
              >
                EMAIL ME
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] p-4 sm:p-5 shadow-[4px_4px_0px_#060D1A] sm:shadow-[6px_6px_0px_#060D1A]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-[#060D1A]/60 flex items-center gap-1.5">
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                LINKEDIN PROFILE
              </span>
              <span className="font-mono text-[9px] bg-blue-100 text-[#0077B5] border border-[#0077B5] px-1.5 py-0.5 font-bold uppercase">
                ACTIVE
              </span>
            </div>
            
            <div className="font-mono text-xs sm:text-sm font-bold text-[#060D1A] truncate mb-3">
              linkedin.com/in/shibam-mishra-08a73242b
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(linkedinUrl, 'linkedin')}
                className="flex-1 py-2 px-3 bg-[#EAE3D2] hover:bg-[#060D1A] hover:text-[#F6F2E9] text-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all flex items-center justify-center gap-1.5"
              >
                {linkedinCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIED LINK</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY LINK</span>
                  </>
                )}
              </button>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound('snap', soundEnabled)}
                className="py-2 px-4 bg-[#0077B5] text-white hover:bg-[#060D1A] border-2 border-[#060D1A] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#060D1A] transition-all flex items-center gap-1.5"
              >
                <span>CONNECT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location & Status Info */}
          <div className="bg-[#EAE3D2] border-2 border-[#060D1A] p-4 font-mono text-xs text-[#060D1A] space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#012CEB] shrink-0 mt-0.5" />
              <div>
                <strong>LOCATION:</strong> SAM College Campus, Bhopal (M.P.) / Hometown: Jamshedpur (Jharkhand).
              </div>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-[#060D1A]/20">
              <Clock className="w-4 h-4 text-[#012CEB] shrink-0 mt-0.5" />
              <div>
                <strong>AVAILABILITY:</strong> Open to relocate across India for full-time roles and internships.
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#F6F2E9] border-3 sm:border-4 border-[#060D1A] p-4 sm:p-8 shadow-[5px_5px_0px_#060D1A] sm:shadow-[8px_8px_0px_#060D1A] relative">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-[#060D1A]">
              <span className="font-mono text-xs font-bold uppercase text-[#012CEB]">
                SEND A DIRECT MESSAGE
              </span>
              <span className="font-mono text-[10px] text-[#060D1A]/60">
                SENT DIRECTLY TO SHIBAM
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto border-3 border-[#060D1A] shadow-[4px_4px_0px_#060D1A]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bebas text-4xl text-[#060D1A]">
                  MESSAGE SENT!
                </h3>
                <p className="font-sans text-sm text-[#060D1A]/80 max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.name || 'there'}</strong>. Shibam has received your message and will reply back as soon as possible.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Interview / Job Opportunity for Shibam Mishra', message: '' });
                    }}
                    className="px-5 py-2.5 bg-[#060D1A] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#060D1A] shadow-[2px_2px_0px_#012CEB]"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#060D1A] uppercase mb-1">
                      YOUR NAME / COMPANY:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#EAE3D2] border-2 border-[#060D1A] p-2.5 text-xs text-[#060D1A] placeholder-[#060D1A]/40 focus:outline-none focus:ring-2 focus:ring-[#012CEB] font-mono shadow-[2px_2px_0px_#060D1A]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#060D1A] uppercase mb-1">
                      YOUR EMAIL:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#EAE3D2] border-2 border-[#060D1A] p-2.5 text-xs text-[#060D1A] placeholder-[#060D1A]/40 focus:outline-none focus:ring-2 focus:ring-[#012CEB] font-mono shadow-[2px_2px_0px_#060D1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#060D1A] uppercase mb-1">
                    SUBJECT:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#EAE3D2] border-2 border-[#060D1A] p-2.5 text-xs text-[#060D1A] placeholder-[#060D1A]/40 focus:outline-none focus:ring-2 focus:ring-[#012CEB] font-mono shadow-[2px_2px_0px_#060D1A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#060D1A] uppercase mb-1">
                    YOUR MESSAGE:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write a message or project details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#EAE3D2] border-2 border-[#060D1A] p-2.5 text-xs text-[#060D1A] placeholder-[#060D1A]/40 focus:outline-none focus:ring-2 focus:ring-[#012CEB] font-mono shadow-[2px_2px_0px_#060D1A] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#012CEB] text-white hover:bg-[#060D1A] border-2 border-[#060D1A] font-mono text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#060D1A] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>SEND MESSAGE TO SHIBAM</span>
                  </button>
                </div>

                <div className="text-center font-mono text-[10px] text-[#060D1A]/60 pt-2">
                  (Direct notification sent to +91 9279523588)
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
