"use client";
import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Images } from "./components/Images";

export default function Home() {
  // const slides = [
  //   "https://picsum.photos/800/800?random=1",
  //   "https://picsum.photos/800/1500?random=2",
  //   "https://picsum.photos/800/1500?random=3",
  //   "https://picsum.photos/800/900?random=4",
  //   "https://picsum.photos/800/900?random=5",
  // ];
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 gap-y-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Contact />
      </div>
    </main>
  );
}
