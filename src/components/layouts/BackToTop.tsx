import { useEffect, useState } from "react";

export default function BackToTop() {

  const [visible, setVisible] = useState(false);

  // détecter le scroll
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  // remonter en haut
  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <button
      onClick={scrollToTop}

      className={`
        btn btn-danger btn-lg
        back-to-top

        ${visible ? "show-btn" : "hide-btn"}
      `}
    >

      <i className="fa fa-arrow-up"></i>

    </button>

  );
}