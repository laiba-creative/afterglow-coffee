import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="inline-block bg-[#b8794b] px-6 py-3 text-sm font-semibold tracking-[0.15em] text-[#211b17] transition hover:bg-[#d6a66a]"
    >
      {children}
    </Link>
  );
}

export default Button;