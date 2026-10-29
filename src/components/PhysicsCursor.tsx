import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const PhysicsCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 10 trailing balls with progressive damping and stiffness
  const trailPhysics = [
    { stiffness: 500, damping: 28, size: 16, opacity: 1 },
    { stiffness: 450, damping: 27, size: 14.5, opacity: 0.94 },
    { stiffness: 400, damping: 26, size: 13, opacity: 0.88 },
    { stiffness: 350, damping: 25, size: 11.5, opacity: 0.82 },
    { stiffness: 300, damping: 24, size: 10, opacity: 0.76 },
    { stiffness: 260, damping: 23, size: 8.5, opacity: 0.70 },
    { stiffness: 220, damping: 22, size: 7, opacity: 0.64 },
    { stiffness: 190, damping: 21, size: 5.5, opacity: 0.58 },
    { stiffness: 160, damping: 20, size: 4, opacity: 0.52 },
    { stiffness: 130, damping: 19, size: 3, opacity: 0.46 },
  ];

  const springs = trailPhysics.map(p => ({
    x: useSpring(mouseX, { stiffness: p.stiffness, damping: p.damping }),
    y: useSpring(mouseY, { stiffness: p.stiffness, damping: p.damping }),
    ...p
  }));

  useEffect(() => {
    // Disable custom physics cursor completely on touch devices and small mobile screens
    const checkTouchOrMobile = () => {
      const isTouchDevice = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.innerWidth < 768;
      
      if (isTouchDevice) {
        setIsTouch(true);
        document.documentElement.classList.remove('has-custom-cursor');
        return true;
      }
      return false;
    };

    if (checkTouchOrMobile()) return;

    const onTouch = () => {
      setIsTouch(true);
      document.documentElement.classList.remove('has-custom-cursor');
    };
    window.addEventListener('touchstart', onTouch, { once: true });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsTouch(true);
        document.documentElement.classList.remove('has-custom-cursor');
      }
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      document.documentElement.classList.add('has-custom-cursor');
    };

    const handleMouseUp = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev.slice(-3), newRipple]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"], input, textarea, .cursor-pointer, .station-btn');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchstart', onTouch);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* 10 Trailing Physics Balls */}
      <div className="fixed inset-0 pointer-events-none z-[9999998] mix-blend-difference overflow-visible">
        {springs.map((s, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              x: s.x,
              y: s.y,
              translateX: '-50%',
              translateY: '-50%',
              width: idx === 0 && isHovering ? 48 : s.size,
              height: idx === 0 && isHovering ? 48 : s.size,
              opacity: isHovering && idx > 0 ? 0 : s.opacity,
              backgroundColor: idx === 0 && isHovering ? 'transparent' : 'white',
              borderWidth: idx === 0 && isHovering ? '2px' : '0px',
              borderColor: 'white',
              boxShadow: idx === 0 ? '0 0 8px rgba(255, 255, 255, 0.8)' : undefined,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          />
        ))}
      </div>

      {/* Ripple Rings on Click */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="fixed rounded-full border border-white mix-blend-difference pointer-events-none z-[9999999]"
          initial={{ x: r.x, y: r.y, translateX: '-50%', translateY: '-50%', width: 14, height: 14, opacity: 1, borderWidth: 3 }}
          animate={{ width: 130, height: 130, opacity: 0, borderWidth: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onAnimationComplete={() => {
            setRipples(prev => prev.filter(item => item.id !== r.id));
          }}
        />
      ))}
    </>
  );
};
