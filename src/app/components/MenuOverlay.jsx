// components/MenuOverlay.js
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <div /*className="fixed inset-0 bg-[#121212] bg-opacity-90 z-20 flex flex-col py-4 items-center justify-center"*/
    >
      <ul className="flex flex-col justify-center items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              onClick={onLinkClick} // Videresender onClick til NavLink
              className="bg-yellow-500"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
