type GalleryTileProps = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
};

export default function GalleryTile({ src, alt, caption, tall }: GalleryTileProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl bg-brand-100 shadow-lg shadow-brand-900/10 ${
        tall ? "aspect-[3/4]" : "aspect-square"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold text-white">
        {caption}
      </figcaption>
    </figure>
  );
}
