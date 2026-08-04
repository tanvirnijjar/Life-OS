import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import AuroraBackground from "./components/AuroraBackground";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <AuroraBackground />

        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;