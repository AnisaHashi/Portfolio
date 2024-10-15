"use client";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { HiOutlineMail } from "react-icons/hi"; // Importerer mail-ikonet
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-24 relative h-screen"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 flex justify-center">
          La oss komme i kontakt.
        </h5>
        <p className="flex justify-center text-[#ADB7BE] mb-4 max-w-md ">
          Jeg er for tiden på jakt etter nye muligheter, innboksen min er alltid
          åpen. Enten du har et spørsmål eller bare vil si hei, skal jeg gjøre
          mitt beste for å svare deg!
        </p>
        <div className="flex justify-center items-center socials flex flex-row gap-2">
          <Link href="https://github.com/AnisaHashi" aria-label="GitHub-profil">
            <Image
              src={GithubIcon}
              alt="GitHub-profil ikon"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anisa-hashi-34abaa29a/"
            aria-label="LinkedIn-profil"
          >
            <Image
              src={LinkedinIcon}
              alt="LinkedIn-profil ikon"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="mailto:anisahashi001@gmail.com"
            aria-label="Send e-post til Anisa Hashi"
          >
            <HiOutlineMail
              className="text-white" // Bruk farge fra Tailwind CSS
              size={40}
              height={40} // Juster størrelsen etter behov
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
