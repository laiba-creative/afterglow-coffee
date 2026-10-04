import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#211b17]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#211b17] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.3em] text-[#d6a66a]">CONTACT</p>

          <h1 className="mt-5 text-6xl font-bold md:text-8xl">
            LET'S STAY
            <br />A LITTLE LONGER.
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto grid max-w-7xl gap-16 bg-[#211b17] px-6 pb-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Come find us.</h2>

          <div className="mt-8 space-y-7 text-[#b8aa9a]">
            <div>
              <p className="text-xs tracking-widest text-[#d6a66a]">LOCATION</p>
              <p className="mt-2">Downtown Creative District</p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-[#d6a66a]">EMAIL</p>
              <p className="mt-2">hello@afterglow.coffee</p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-[#d6a66a]">HOURS</p>
              <p className="mt-2">Every Day — 6 PM to 2 AM</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2b231d] p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Send us a message.</h2>

          {submitted ? (
            <div className="mt-8 border border-[#b8794b] p-6">
              <p className="text-lg font-semibold">Message received.</p>

              <p className="mt-2 text-sm text-[#b8aa9a]">
                Thanks for reaching out to AFTERGLOW.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm">Name</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#51463c] bg-[#211b17] px-4 py-3 outline-none focus:border-[#b8794b]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Email</label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#51463c] bg-[#211b17] px-4 py-3 outline-none focus:border-[#b8794b]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Message</label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none border border-[#51463c] bg-[#211b17] px-4 py-3 outline-none focus:border-[#b8794b]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#b8794b] px-6 py-3 text-sm font-semibold tracking-widest text-[#211b17] transition hover:bg-[#d6a66a]"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;