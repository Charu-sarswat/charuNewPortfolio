import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Charu Sarswat", 
    "I'm a Web Developer", 
    "I'm a UI/UX Designer", 
    "I'm a Problem Solver"
  ];
  const [currentText, setCurrentText] = useState("");
  const [fullText, setFullText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle typing effect
      if (!isDeleting && currentText === fullText) {
        // Pause at the end of typing
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        // Move to next text after deletion
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        setFullText(texts[(index + 1) % texts.length]);
        setTypingSpeed(150);
      } else {
        // Typing or deleting
        setCurrentText(prev => {
          if (isDeleting) {
            setTypingSpeed(50); // Faster when deleting
            return prev.substring(0, prev.length - 1);
          } else {
            setTypingSpeed(150); // Normal speed when typing
            return fullText.substring(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, fullText, index, isDeleting, texts, typingSpeed]);

  return (
    <div className="flex items-center">
      <div className="gradient-text text-xl md:text-6xl font-bold">{currentText}</div>
      <span className="ml-1 h-10 md:h-16 w-1 bg-[#ea9f12] animate-pulse"></span>
    </div>
  );
};

export default TextChange;