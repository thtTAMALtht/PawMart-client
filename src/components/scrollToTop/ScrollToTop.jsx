import { MdArrowUpward } from "react-icons/md";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="hidden md:block fixed bottom-10 right-10 bg-[#4388C9] hover:bg-[#F76100] text-white p-2 rounded-full shadow-lg text-2xl cursor-pointer transition-all duration-700"
          aria-label="Scroll to top"
        >
          <MdArrowUpward />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
