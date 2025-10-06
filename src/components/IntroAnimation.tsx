import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    // Start opening doors after text animation
    const doorsTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 2800);

    // Hide completely after doors open
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setHasPlayed(true);
    }, 3800);

    return () => {
      clearTimeout(doorsTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hasPlayed && !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Left Door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-primary flex items-center justify-end pr-8"
            initial={{ x: 0 }}
            animate={{ x: doorsOpen ? "-100%" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl md:text-6xl font-heading text-primary-foreground">
                L'Atelier
              </div>
            </motion.div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-primary flex items-center justify-start pl-8"
            initial={{ x: 0 }}
            animate={{ x: doorsOpen ? "100%" : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl md:text-6xl font-heading text-primary-foreground">
                du Volcan
              </div>
            </motion.div>
          </motion.div>

          {/* Center Line */}
          <motion.div
            className="absolute top-0 left-1/2 w-0.5 h-full bg-primary-foreground/20"
            initial={{ opacity: 1 }}
            animate={{ opacity: doorsOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Subtitle - appears in center then fades */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: doorsOpen ? 0 : 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="text-lg md:text-xl text-primary-foreground font-body italic text-center px-4">
              Deux artisans, une même passion : le bois
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
