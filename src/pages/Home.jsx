import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    {
      image: "/images/latte.jpg",
      name: "Signature Latte",
      description: "Espresso, steamed milk and silky foam.",
      price: "450",
    },
    {
      image: "/images/mocha.jpg",
      name: "Dark Mocha",
      description: "Rich chocolate blended with bold espresso.",
      price: "500",
    },
    {
      image: "/images/latte.jpg",
      name: "Velvet Cold Brew",
      description: "Slow brewed coffee served smooth and cold.",
      price: "400",
    },
    {
      image: "/images/mocha.jpg",
      name: "Midnight Espresso",
      description: "A short, intense shot for long nights.",
      price: "300",
    },
  ];

  return (
    <div className="bg-[#211b17]">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-89px)] overflow-hidden bg-[#211b17]">

        {/* Background Image */}
        <img
          src="/images/hero.jpg"
          alt="Afterglow coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Controlled Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#211b17]/95 via-[#211b17]/55 to-transparent" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[calc(100vh-89px)] max-w-7xl flex-col justify-between px-6 py-10 md:py-14">

          {/* Top Label */}
          <div className="flex items-center justify-between">

            <p className="text-xs tracking-[0.35em] text-[#d6a66a] md:text-sm">
              COFFEE AFTER DARK
            </p>

            <p className="hidden text-xs tracking-[0.25em] text-[#b8aa9a] md:block">
              EST. 2026
            </p>

          </div>

          {/* Main Content */}
          <div className="max-w-4xl pb-16 pt-20 md:pb-20">

            <h1 className="text-[clamp(4.5rem,13vw,10rem)] font-bold leading-[0.78] tracking-[-0.05em] text-[#f5efe6]">

              AFTER
              <br />

              <span className="text-[#d6a66a]">
                GLOW
              </span>

            </h1>

            <div className="mt-10 max-w-xl">

              <p className="text-lg leading-8 text-[#f5efe6] md:text-xl">
                Coffee for the hours that matter.
              </p>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#b8aa9a] md:text-base">
                A late-night coffee house for deep conversations,
                creative minds and nights that refuse to end.
              </p>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Button to="/about">
                DISCOVER AFTERGLOW
              </Button>

              <Link
                to="/contact"
                className="inline-block border border-[#d6a66a] px-6 py-3 text-sm font-semibold tracking-[0.15em] text-[#f5efe6] transition hover:bg-[#d6a66a] hover:text-[#211b17]"
              >
                VISIT US
              </Link>

            </div>

          </div>

          {/* Bottom Information */}
          <div className="flex items-end justify-between border-t border-[#f5efe6]/20 pt-5">

            <div>
              <p className="text-xs tracking-[0.2em] text-[#b8aa9a]">
                EVERY NIGHT
              </p>

              <p className="mt-1 text-sm text-[#f5efe6]">
                06 PM — 02 AM
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">

              <span className="h-px w-10 bg-[#d6a66a]" />

              <span className="text-xs tracking-[0.2em] text-[#b8aa9a]">
                SCROLL TO DISCOVER
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl bg-[#211b17] px-6 py-24 text-center">

        <p className="text-sm tracking-[0.3em] text-[#d6a66a]">
          WELCOME AFTER DARK
        </p>

        <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
          Coffee for the hours that matter.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#b8aa9a]">
          AFTERGLOW was created for people who aren't ready
          to call it a night. Come for the coffee. Stay for the moment.
        </p>

      </section>

      {/* TONIGHT'S FAVORITES */}
      <section className="bg-[#2b231d] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.3em] text-[#d6a66a]">
            TONIGHT'S FAVORITES
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Made for the night.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product.name}
                {...product}
              />
            ))}

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 bg-[#211b17] px-6 py-24 md:grid-cols-2">

        <img
          src="/images/interior.jpg"
          alt="Afterglow interior"
          className="h-[500px] w-full object-cover"
        />

        <div>

          <p className="text-sm tracking-[0.3em] text-[#d6a66a]">
            THE EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Stay a little longer.
          </h2>

          <p className="mt-6 leading-8 text-[#b8aa9a]">
            Low lights. Good music. Great coffee.
            AFTERGLOW is designed for late-night ideas,
            meaningful conversations and moments that
            shouldn't be rushed.
          </p>

          <div className="mt-8">
            <Button to="/contact">
              GET IN TOUCH
            </Button>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;