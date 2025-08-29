import React from "react";

interface SectionProps extends React.PropsWithChildren {
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section id={id} className={`w-full py-16 md:py-24 ${className || ""}`}>
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6">{children}</div>
  </section>
);