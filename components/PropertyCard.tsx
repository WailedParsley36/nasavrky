import React, { useState } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaLeaf,
  FaHome,
  FaRuler,
} from "react-icons/fa";

const PropertyCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/parcely/parcela-1/image.jpg",
    "/images/property2.jpg",
    "/images/property3.jpg",
    "/images/property4.jpg",
    "/images/property5.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Nejpopulárnější</h2>
          <button className="text-gray-500 hover:text-gray-700">Sdílet</button>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">
            Pozemek - Stavební parcela 2502/6
          </h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaMapMarkerAlt className="mr-2" />
            <span>Větrná 415-400, 538 25 Nasavrky</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaLeaf className="mr-2 text-gray-600" />
              <span>1</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaHome className="mr-2 text-gray-600" />
              <span>2</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span>5</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaRuler className="mr-2 text-gray-600" />
              <span>1110 m²</span>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative rounded-xl overflow-hidden h-80 mb-4">
            <Image
              src={images[currentSlide]}
              alt={`Property image ${currentSlide + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <FaChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-gray-700 mb-4">
            <p>
              Nabízíme k prodeji krásný pozemek v malebném městečku Nasavrky,
              situovaný v klidné lokalitě v blízkosti rybníka. Tento pozemek je
              ideální pro výstavbu rodinného domu, rekreačního objektu nebo jako
              investiční příležitost...
              <button className="text-amber-500 font-semibold">
                zobrazit více
              </button>
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-gray-600">Kupní cena:</span>
              <div className="text-3xl font-bold">
                1750 Kč <span className="text-xl font-normal">/ m²</span>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg">
              Detail nabídky
            </button>
          </div>
        </div>
      </div>

      {/* Similar properties section */}
      <div className="flex overflow-x-auto gap-4 p-4">
        <PropertyThumbnail
          price="1750 Kč"
          size="940 m²"
          location="Větrná 415-400, 538 25 Nasavrky"
          parcel="2502/5"
          image="/images/property-thumb1.jpg"
        />
        <PropertyThumbnail
          price="1250 Kč"
          size="850 m²"
          location="Větrná 415-400, 538 25 Nasavrky"
          parcel="2502/5"
          image="/images/property-thumb2.jpg"
        />
        <PropertyThumbnail
          price="1100 Kč"
          size="1002 m²"
          location="Větrná 415-400, 538 25 Nasavrky"
          parcel="2502/5"
          image="/images/property-thumb3.jpg"
        />
      </div>
    </div>
  );
};

const PropertyThumbnail = ({ price, size, location, parcel, image }) => {
  return (
    <div className="min-w-[300px] bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-40">
        <Image
          src={image}
          alt="Property thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="text-2xl font-bold mb-1">
          {price} <span className="text-xl font-normal">/ m²</span>
        </div>
        <div className="text-gray-600 text-sm mb-3">{location}</div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FaRuler className="mr-2 text-gray-500" />
            <span>{size}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <span>{parcel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
