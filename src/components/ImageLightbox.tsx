import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className }: ImageLightboxProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(className)}
    />
  );
};

export default ImageLightbox;
