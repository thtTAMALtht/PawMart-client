import { MdArrowUpward } from "react-icons/md";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="hidden md:block cursor-pointer text-white"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#F76100",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            color: "white",
            fontSize: "24px",
            zIndex: 1000,
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          }}
          aria-label="Scroll to top"
        >
          <MdArrowUpward />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
