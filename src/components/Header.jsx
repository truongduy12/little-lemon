import { useState } from "react";
import Nav from "./Nav";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header>
      <img src="/logo.svg" alt="Little Lemon" />
      <Nav menuOpened={menuOpened} />
      <button
        title="Hamburger menu"
        className="hamburger"
        onClick={() => setMenuOpened(!menuOpened)}
        aria-label="On Click"
      >
        <img src="/hamburger.svg" alt="Hamburger menu" />
      </button>
    </header>
  );
}
export default Header;
