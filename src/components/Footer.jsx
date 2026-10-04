import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#403a34] bg-[#211b17] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        <div>
          <h2 className="text-xl font-bold tracking-[0.25em]">
            AFTERGLOW
          </h2>

          <p className="mt-3 text-sm text-[#b8aa9a]">
            Coffee for the hours that matter.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm tracking-[0.2em]">
            EXPLORE
          </h3>

          <div className="flex flex-col gap-3 text-sm text-[#b8aa9a]">
            <Link
              to="/"
              className="hover:text-[#f5efe6]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-[#f5efe6]"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#f5efe6]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm tracking-[0.2em]">
            HOURS
          </h3>

          <p className="text-sm leading-7 text-[#b8aa9a]">
            Monday — Sunday
            <br />
            6 PM — 2 AM
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#403a34] pt-6 text-xs text-[#b8aa9a]">
        © 2026 AFTERGLOW. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;