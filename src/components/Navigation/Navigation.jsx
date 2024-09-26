import React from "react";
// import '../../index.css';

import { navigationMenu } from "./NavigationMenu";

const Navigation = () => {
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            src="https://i.pinimg.com/564x/1a/29/48/1a2948de262e9fe7023ff74a05ee3d54.jpg"
            height={50}
            width={50}
            alt="Logo"
          />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer flex space-x-3 items-center"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
