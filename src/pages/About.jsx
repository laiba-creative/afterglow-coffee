import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

function About() {
  return (
    <div className="bg-[#211b17]">

      <Navbar />

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl gap-10 bg-[#211b17] px-6 py-20 md:grid-cols-2">

        <img
          src="/images/interior.jpg"
          alt="Afterglow cafe"
          className="h-[500px] w-full object-cover"
        />

        <div className="flex flex-col justify-center">

          <p className="text-sm tracking-[0.3em] text-[#d6a66a]">
            THE BEGINNING
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Built for the night owls.
          </h2>

          <p className="mt-6 leading-8 text-[#b8aa9a]">
            AFTERGLOW started with a simple idea:
            create a place where the night doesn't mean
            everything has to stop.
          </p>

          <p className="mt-4 leading-8 text-[#b8aa9a]">
            A place for designers finishing a project,
            friends having one last conversation and
            dreamers figuring out what comes next.
          </p>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#2b231d] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.3em] text-[#d6a66a]">
            OUR PHILOSOPHY
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="border-t border-[#51463c] pt-6">

              <h3 className="text-2xl font-semibold">
                01 — STAY LATE
              </h3>

              <p className="mt-4 text-[#b8aa9a]">
                Some of the best ideas happen after midnight.
              </p>

            </div>

            <div className="border-t border-[#51463c] pt-6">

              <h3 className="text-2xl font-semibold">
                02 — CREATE
              </h3>

              <p className="mt-4 text-[#b8aa9a]">
                Make something meaningful while your coffee is warm.
              </p>

            </div>

            <div className="border-t border-[#51463c] pt-6">

              <h3 className="text-2xl font-semibold">
                03 — CONNECT
              </h3>

              <p className="mt-4 text-[#b8aa9a]">
                Good coffee brings people and ideas together.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#211b17] px-6 py-28 text-center">

        <h2 className="text-4xl font-semibold md:text-6xl">
          The night is still young.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-[#b8aa9a]">
          Come experience AFTERGLOW.
        </p>

        <div className="mt-8">
          <Button to="/contact">
            VISIT US
          </Button>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default About;