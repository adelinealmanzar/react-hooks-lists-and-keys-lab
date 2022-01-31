import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map(link => {
    const hrefLink = `#${link}`
    return <a key={link} href={hrefLink}>{link}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
