import { useEffect, useRef } from "react";
import lucaMorganti from "../assets/images/luca-morganti.png";
import "./Avatar.css";

function Avatar() {
  const avatarRef = useRef(null);
  const placeholderRef = useRef(null);
  const offsetTopRef = useRef(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    offsetTopRef.current =
      placeholderRef.current?.getBoundingClientRect().top + window.scrollY || 0;

    function onScrollOrResize() {
      updateAvatarStyles();
      isFirstRender.current = false;
    }

    // Esegui la prima volta
    onScrollOrResize();

    // Al mount
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // Allo smontaggio
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  });

  return (
    <div className="relative">
      <div ref={placeholderRef} className="flex justify-left mb-4">
        <div className="placeholder max-w-[33%] md:max-w-[20%]"></div>
      </div>
      <div
        ref={avatarRef}
        className="flex justify-left z-100 origin-top-left w-[100%]"
        style={{
          transform: "var(--avatar-image-transform)",
          position: "var(--avatar-image-position)",
          top: "var(--avatar-image-top)",
          left: "var(--avatar-image-left)",
          width: "var(--avatar-image-width)",
        }}
      >
        <img
          src={lucaMorganti}
          alt="Luca Morganti"
          className="max-w-[33%] md:max-w-[20%]"
        />
      </div>
    </div>
  );

  function updateAvatarStyles() {
    const placeholder = placeholderRef.current.getBoundingClientRect();
    const minScale = 48 / Math.floor(placeholder.height);

    const n = offsetTopRef.current;
    const distance = n - window.scrollY;
    const minY = document.getElementById('cvButton').offsetTop;

    let scaleValue = clamp(
      1 - ((n - distance) * (1 - minScale)) / n,
      minScale,
      1
    );

    document.documentElement.style.setProperty(
      "--avatar-image-transform",
      `scale(${scaleValue})`
    );

    document.documentElement.style.setProperty(
      "--avatar-image-position",
      scaleValue === minScale ? "fixed" : "absolute"
    );

    document.documentElement.style.setProperty(
      "--avatar-image-top",
      scaleValue === minScale ? `${minY}px` : `${minY}px`
    );

    document.documentElement.style.setProperty(
      "--avatar-image-left",
      scaleValue === minScale ? `${placeholder.left}px` : 0
    );

    document.documentElement.style.setProperty(
        "--avatar-image-width",
        scaleValue === minScale ? `${placeholder.width}px` : `100%`
      );  
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
}

export default Avatar;
