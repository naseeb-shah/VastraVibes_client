import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "./pexels-cottonbro-3738075.jpg",
    "./pexels-cottonbro-4620610.jpg",
    "./pexels-cottonbro-4622423.jpg",
    "./pexels-cottonbro-3738087.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={images[currentIndex]}
        alt="Sliding Images"
        className="w-96 h-60 object-cover rounded-lg transition-opacity duration-500"
        width={"400px"}
      />
    </div>
  );
};

export default ImageSlider;
