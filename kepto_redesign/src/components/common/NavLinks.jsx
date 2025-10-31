import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { text: "About Us", path: "/" },
    { text: "Services", path: "/" },
    { text: "Policies", path: "/" },
    { text: "Contact Us", path: "/contact" },
    { text: "Terms & Conditions", path: "/" },
  ];

  return (
    <ul className="hidden lg:flex xl:ml-10 space-x-12">
      {links.map(({ text, path }) => (
        <li key={text}>
          <Link
            to={path}
            className="text-white font-medium hover:text-lime-300 transition duration-300"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
