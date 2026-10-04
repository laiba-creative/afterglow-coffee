import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[#403a34] bg-[#211b17] px-6 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="Afterglow"
            className="h-20 w-auto"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-10 text-sm tracking-[0.2em] md:flex">
          <Link
            to="/"
            className="transition hover:text-[#b8794b]"
          >
            HOME
          </Link>

          <Link
            to="/about"
            className="transition hover:text-[#b8794b]"
          >
            ABOUT
          </Link>

          <Link
            to="/contact"
            className="transition hover:text-[#b8794b]"
          >
            CONTACT
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-[#f5efe6] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-5 border-t border-[#403a34] pt-5 text-sm tracking-[0.2em] md:hidden">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="transition hover:text-[#b8794b]"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="transition hover:text-[#b8794b]"
          >
            ABOUT
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="transition hover:text-[#b8794b]"
          >
            CONTACT
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;