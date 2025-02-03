// // Section

// function Section({ id, style = "", children }) {
//   return (
//     <section id={id} className={`section ${style} w-full`}>
//       {children}
//     </section>
//   );
// }

// export default Section;

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Section({ id, style = "", children }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={controls}
      transition={{ duration: 1 }}
      className={`section ${style} w-full`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
