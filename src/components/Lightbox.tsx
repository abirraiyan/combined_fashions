import { X } from "lucide-react";

type LightboxProps = {
  src: string;
  onClose: () => void;
};

const Lightbox = ({ src, onClose }: LightboxProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gold"
      >
        <X size={32} />
      </button>

      <img
        src={src}
        alt="Preview"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
