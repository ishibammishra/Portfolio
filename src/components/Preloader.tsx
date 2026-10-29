import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../utils/sound';

interface PreloaderProps {
  onFinish?: () => void;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const dismiss = () => {
    if (!isVisible) return;
    setIsVisible(false);
    playClickSound('modal');
    setTimeout(() => {
      onFinish?.();
      onComplete?.();
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(dismiss, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 25);

    const handleKey = () => dismiss();
    window.addEventListener('keydown', handleKey);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={dismiss}
          className="fixed inset-0 z-50 bg-[#012CEB] text-white flex flex-col items-center justify-center p-4 sm:p-6 select-none cursor-pointer overflow-hidden"
        >
          {/* Subtle blueprint grid */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-lg w-full text-center space-y-4 sm:space-y-6 px-2">
            
            {/* Tag */}
            <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 bg-white/10 text-[9px] xs:text-[10px] sm:text-xs font-mono tracking-wider uppercase max-w-[92vw] truncate">
              Shibam Mishra • BCA '27 • Portfolio
            </div>

            {/* Main Name */}
            <h1 className="font-bebas text-3xl xs:text-4xl sm:text-7xl lg:text-8xl tracking-wide sm:tracking-wider leading-none break-words px-1">
              SHIBAM MISHRA
            </h1>

            {/* Simple human subtitle */}
            <p className="font-handwriting text-xs xs:text-sm sm:text-xl md:text-2xl text-blue-100 max-w-md mx-auto leading-relaxed px-2">
              "BCA 2024–2027 • Software Developer & Web Engineer"
            </p>

            {/* Progress Bar */}
            <div className="space-y-2 pt-4">
              <div className="flex justify-between font-mono text-xs text-blue-200">
                <span>Loading portfolio...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/30">
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Jump in prompt */}
            <div className="pt-2 font-handwriting text-xl sm:text-2xl text-blue-100 animate-pulse">
              [ Click anywhere to enter ]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
