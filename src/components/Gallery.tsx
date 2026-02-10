import { useState } from "react";
import Lightbox from "./Lightbox";

const photos = [
  "/gallery/photos/pic1.jpeg",
  "/gallery/photos/pic2.jpeg",
  "/gallery/photos/pic3.jpeg",
  "/gallery/photos/pic4.jpeg",
  "/gallery/photos/pic5.jpeg",
  "/gallery/photos/pic6.jpeg",
  "/gallery/photos/pic7.jpeg",
  "/gallery/photos/pic8.jpeg",
  "/gallery/photos/pic9.jpeg",
  "/gallery/photos/pic10.jpeg",
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-serif text-center mb-12">
        Photo Gallery
      </h2>

      {/* PHOTO GALLERY */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="mb-6 w-full rounded-xl cursor-pointer hover:opacity-90 transition"
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>

      {activeImage && (
        <Lightbox src={activeImage} onClose={() => setActiveImage(null)} />
      )}

      {/* VIDEO GALLERY */}
      <h2 className="text-4xl font-serif text-center mt-24 mb-12">
        Video Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <video
          src="/gallery/videos/factory1.mp4"
          controls
          className="rounded-xl shadow-lg w-full"
        />
        <video
          src="/gallery/videos/factory2.mp4"
          controls
          className="rounded-xl shadow-lg w-full"
        />
      </div>
    </section>
  );
};

export default Gallery;
