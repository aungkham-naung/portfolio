import { useState, useEffect } from "react";

function DotNav({ sections }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return (
    <div className="hidden lg:flex fixed left-4 top-1/2 transform -translate-y-1/2  flex-col gap-4 z-50 ">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          className={`w-4 h-4 rounded-full  transition-transform 
            duration-200 
            hover:scale-150
            ${activeSection === id ? "bg-indigo-500" : "bg-white"}`}
          aria-label={`Scroll to ${id} section`}
        ></button>
      ))}
    </div>
  );
}

export default DotNav;
