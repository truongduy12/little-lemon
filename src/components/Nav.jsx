import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Reservation",
    href: "/reservation",
  },
  {
    label: "Order Online",
    href: "/order",
  },
  {
    label: "Login",
    href: "/login",
  },
];

function Nav({ menuOpened }) {
  return (
    <nav className={`navigation ${menuOpened && "menu-opened"}`}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.href} key={index}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
