import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

    const linksTags = links.map((nav) => {
    return <a href={`#${nav}`} key={nav}>{nav}</a>;
  });

  return (
    <nav>
      {linksTags}
      </nav>
  );
}

export default NavBar;
