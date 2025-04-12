import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="w-56 border-t border-2 border-gray-300"></div>
      <h2 className="text-center font-semibold text-4xl whitespace-nowrap">
        {children}
      </h2>
      <div className="w-56 border-t border-2 border-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
