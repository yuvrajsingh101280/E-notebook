import React from "react";
import TopNavBar from "../topNavBar/TopNavBar";
import SideBar from "../sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Mobile Navbar Which is hidden in the desktop */}

      <div className="lg:hidden">
        <TopNavBar />
      </div>

      <div className="max-h-screen flex">
        {/* sidebar that will be hidden on mobile */}

        <nav class="w-72 flex-none ... hidden md:block">
          <SideBar />
        </nav>

        {/* Main content */}
        <main className="flex-1  min-w-0 overflow-auto ...">
          <div className="flex justify-center">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
