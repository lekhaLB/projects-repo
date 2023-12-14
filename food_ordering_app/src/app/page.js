import Hero from "./components/layout/Hero";

import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>

      <Hero></Hero>
      <HomeMenu></HomeMenu>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'}>
        </SectionHeaders>
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Our story begins with a passion for authenticity and a desire to
            create something extraordinary. Born out of a love for Japanese
            ramen and inspired by the diverse culinary landscape of India,
            our place is a testament to the harmonious coexistence of cultures.
          </p>
          <p>
            We believe in the artistry of ramen-making.
            Our chefs meticulously craft each bowl, ensuring that every
            element - from the perfectly textured noodles to the robust
            broth - is a testament to our commitment to quality.
            It's a labor of love that you can taste in every slurp.
          </p>
          <p>
            Local ingredients sourced from nearby markets
            add a unique touch to our ramen bowls, creating a
            fusion that celebrates the diversity of flavors found
            across India.
          </p>
        </div>
      </section>
      <section className="text-center my-8 mt-16">
        <SectionHeaders subHeader={'Don\'t Hesitate'} mainHeader={'Contact Us'}>
        </SectionHeaders>
        <div className="mt-8">
          <a className="text-4xl" href="tel:+919999999999">
            +91 99999 99999
          </a>
        </div>
      </section>



    </>
  )
}