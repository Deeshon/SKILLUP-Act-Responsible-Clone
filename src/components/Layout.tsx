import React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="sm:flex  min-h-screen w-full cursor-default dark:bg-back">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
