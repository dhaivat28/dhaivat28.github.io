import React, { type PropsWithChildren } from "react";

export const SectionFadeWrapper: React.FC<
  PropsWithChildren<{
    sectionId?: string;
  }>
> = ({ children, sectionId }) => {
  return (
    <section id={sectionId} className="relative py-12 bg-[#fbf9f6]">
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 w-full h-16 
                      bg-gradient-to-b from-white to-[#fbf9f6] 
                      pointer-events-none z-10"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 
                      bg-gradient-to-t from-white to-[#fbf9f6] 
                      pointer-events-none z-10"
      />
      {children}
    </section>
  );
};
