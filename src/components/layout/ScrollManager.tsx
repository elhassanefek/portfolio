import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the `#hash` target after navigation (including links like
 * "/#projects" from another page), or to the top when there is no hash.
 */
export const ScrollManager: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Wait a frame so the target section has rendered after a route change.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ behavior, block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
