import React from "react";

const NavLinks = () => {
  const links = ["About Us", "Services", "Policies", "Contact Us", "Terms & Conditions"];

  return (
    <ul className="hidden lg:flex xl:ml-10 space-x-12">
      {links.map((text) => (
        <li key={text}>
          <a
            href={`#${text}`}
            className="text-white font-medium hover:text-gray-300 transition duration-300"
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
