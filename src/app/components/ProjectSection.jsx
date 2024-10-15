// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import "swiper/css/pagination";
// import SwiperCore, { Pagination } from "swiper";
// import { Navigation } from "swiper/modules";
// import Image from "next/image";
// import { IoClose } from "react-icons/io5";
// import ProjectTag from "./ProjectTag";
// import ProjectCard from "./ProjectCard";

// // import { XIcon } from '@heroicons/react/solid'; // For the close icon

// SwiperCore.use([Navigation, Pagination]);

// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio Website",
//     description: "Project 1 description",
//     cover: "/images/projects/project1.png",
//     images: ["/images/projects/project1.png"],
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Photography Portfolio Website",
//     description: "Project 2 description",
//     cover: "/images/projects/project2.png",
//     images: [
//       "/images/projects/project2.png",
//       "/images/projects/project2_1.png",
//       "/images/projects/project2_2.png",
//       "/images/projects/project2_3.png",
//     ],
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     cover: "/images/projects/project3.png",
//     images: [
//       "/images/projects/project3_1.png",
//       "/images/projects/project3_2.png",
//       "/images/projects/project3_3.png",
//       "/images/projects/project3_4.png",
//     ],
//     tag: ["All", "Web"],
//     gitUrl: "https://github.com/AnisaHashi/PGR208-2023H",
//     previewUrl: "/",
//   },
// ];

// const ProjectsSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProjectImages, setSelectedProjectImages] = useState([]);

//   const handleProjectClick = (projectId) => {
//     setSelectedProjectImages(
//       projectsData.find((p) => p.id === projectId).images
//     );
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
//         My Projects
//       </h2>

//       <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
//         {projectsData.map((project, index) => (
//           <ProjectCard
//             onClick={() => handleProjectClick(project.id)}
//             key={project.id}
//             title={project.title}
//             description={project.description}
//             imgUrl={project.cover}
//             gitUrl={project.gitUrl}
//             previewUrl={project.previewUrl}
//           />
//         ))}
//       </ul>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
//           <div className="relative w-full max-w-4xl h-full">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-slate-200 bg-red-500 rounded-full p-2"
//               onClick={closeModal}
//             >
//               {/* <XIcon className="h-6 w-6" /> */}
//               <IoClose size={20} />
//             </button>

//             {/* Swiper Slider */}
//             <Swiper
//               slidesPerView={1}
//               pagination={{ clickable: true, dynamicMainBullets: true }}
//               navigation
//               className="w-full h-4/5 mt-16"
//             >
//               {selectedProjectImages.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <img
//                     src={image}
//                     alt={`Slide ${index}`}
//                     className="w-full h-full object-contain	"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;

"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import { Navigation } from "swiper/modules";
import { IoClose } from "react-icons/io5";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion"; // Sørg for å importere her

SwiperCore.use([Navigation, Pagination]);

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "NextJS, React og Javascript",
    cover: "/images/projects/project1.png",
    images: ["/images/projects/project1.png"],
    tags: ["Alle", "Web"],
    gitUrl: "https://github.com/AnisaHashi/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Info Tavla KPMG",
    description: "React & Javascript",
    cover: "/images/projects/project2.png",
    images: [
      "/images/projects/project2.png",
      "/images/projects/project2_1.png",
      "/images/projects/project2_2.png",
      "/images/projects/project2_3.png",
    ],
    tags: ["Alle", "Web"],
    gitUrl: "https://github.com/AnisaHashi/Exam-kpmg-2024",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Netthandel Mobil",
    description: "Android & Kotlin",
    cover: "/images/projects/project3.png",
    images: [
      "/images/projects/project3_1.png",
      "/images/projects/project3_2.png",
      "/images/projects/project3_3.png",
      "/images/projects/project3_4.png",
    ],
    tags: ["Alle", "Mobile"],
    gitUrl: "https://github.com/AnisaHashi/Android-Netthandel",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [tag, setTag] = useState("Alle"); // For å spore valgt tag
  const ref = useRef(null);

  // Riktig plassering av useInView
  const isInView = useInView(ref, { once: true });

  const handleProjectClick = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (project) {
      setSelectedProjectImages(project.images);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tags.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mine Prosjekter
      </h2>

      {/* Tagger */}
      <div className="text-white flex flex-row justify-center items-center gap-4  mb-8">
        {["All", "Web", "Mobile"].map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName} // Sjekk om taggen er valgt
          />
        ))}
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            onClick={() => handleProjectClick(project.id)}
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.cover}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          >
            {/* Taggene legges til her */}
            <div className="flex flex-wrap mt-2">
              {project.tags.map((tagName) => (
                <ProjectTag
                  key={tagName}
                  name={tagName}
                  onClick={handleTagChange}
                  isSelected={tag === tagName}
                />
              ))}
            </div>
          </ProjectCard>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-full max-w-4xl h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-slate-200 bg-red-500 rounded-full p-2"
              onClick={closeModal}
            >
              <IoClose size={20} />
            </button>

            {/* Swiper Slider */}
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true, dynamicMainBullets: true }}
              navigation
              className="w-full h-4/5 mt-16"
            >
              {selectedProjectImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
