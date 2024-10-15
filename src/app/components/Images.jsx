// components/ImageCard.js
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import { HiOutlineMail } from "react-icons/hi";
SwiperCore.use([Pagination]);

export const Images = ({ slides }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Image Card */}
      <div onClick={openModal} className="cursor-pointer">
        <img
          src={slides[0]}
          alt="Main Image"
          className="w-full h-96 rounded-lg"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="flex flex-col w-full max-w-4xl h-full p-4  rounded-lg">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                className="text-white bg-yellow-400 rounded-full p-3 shadow-lg hover:bg-yellow-700 transition-all duration-200"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                {/* <XIcon className="h-6 w-6" /> */}
                <HiOutlineMail
                  alt="Email Icon" // Note: alt is not used for icon components
                  className="text-white" // Use text color from Tailwind CSS
                  size={40}
                  height={40} // Adjust the size as needed
                />
              </button>
            </div>

            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              className="w-full h-full"
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};
