import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Play animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setHasPlayed(true);
    }, 3500); // 3.5 seconds total

    return () => clearTimeout(timer);
  }, []);

  if (hasPlayed && !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut"
            }}
          >
            <motion.div
              className="text-6xl md:text-8xl font-heading text-primary mb-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              L'Atelier du Volcan
            </motion.div>
            <motion.div
              className="text-xl md:text-2xl text-secondary font-body italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Deux artisans, une même passion : le bois
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
