"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Ferdigheter",
    id: "skills",
    content: (
      <table className="table w-full">
        <thead>
          <tr>
            <th>Frontend</th>
            <th>Backend</th>
            <th>Mobil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript</td>
            <td>Java</td>
            <td>Swift</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Kotlin</td>
            <td>Flutter</td>
          </tr>
          <tr>
            <td>HTML/CSS</td>
            <td>.NET</td>
            <td>React Native</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "Utdanning",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Kodeakademi</li>
        <li>Høyskolen Kristiania</li>
      </ul>
    ),
  },
  {
    title: "Kurs",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          React - The complete Guid (Next.js, Redux) i 2023
        </li>
        <li>Android Jetpack i 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      if (tab === id) {
        setIsTabOpen(!isTabOpen);
      } else {
        setTab(id);
        setIsTabOpen(true);
      }
    });
  };

  return (
    <section id="about" className="text-white my-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="Om bilde"
        />
        <div className="mt-24 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 flex justify-center">
            Om Meg
          </h2>
          <p className="text-base lg:text-lg">
            Full-stack utvikler med fokus på interaktiv design,
            informasjonssikkerhet, brukervennlighet og optimal brukeropplevelse.
            Dyktig i Java, JavaScript, Kotlin og Python, med erfaring fra
            rammeverk som NextJS, React og Tailwind. Kompetent innen utvikling
            av databasedrevne, robuste applikasjoner, plattformuavhengige
            løsninger og smidige metoder. Brenner for å skape brukersentrerte,
            sømløse digitale opplevelser.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Ferdigheter
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Utdanning
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Kurs
            </TabButton>
          </div>
          <div className="mt-8">
            {isTabOpen && TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
