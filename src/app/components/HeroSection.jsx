"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hei, jeg er{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Anisa",
                1000,
                "Webutvikler",
                1000,
                "Mobilutvikler",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Jeg er en fullstack utvikler med lidenskap for å lage interaktive og
            brukervennlige digitale opplevelser. Med erfaring innen både web- og
            mobilutvikling, fokuserer jeg på å kombinere funksjonalitet med
            estetikk for å levere løsninger som både ser bra ut og fungerer
            godt.
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Kontakt
            </a>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 hover:bg-slate-800 text-white mt-3">
              <a
                href="/CV.pdf"
                download
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Last ned CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px relative">
            <Image
              src="/images/hero-image.png"
              alt="helt bilde"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
