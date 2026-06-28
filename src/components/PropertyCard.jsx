import { Link } from "react-router-dom";

export default function PropertyCard({ property, index, base = "/stays" }) {
  return (
    <Link
      to={`${base}/${property.id}`}
      className="group block bg-surface border border-line hover:border-accent transition-colors"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-low">
        <img
          src={property.images[0]}
          alt={property.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-label-sm uppercase text-on-dark/40">{property.type}</span>
          {typeof index === "number" && (
            <span className="font-mono text-label-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
          )}
        </div>
        <h3 className="text-headline-sm font-semibold mb-1 text-on-dark group-hover:text-accent transition-colors">
          {property.name}
        </h3>
        <p className="text-body-md text-on-dark/55 mb-4">{property.area}</p>
        <div className="flex items-center justify-between pt-4 border-t border-line">
          <span className="text-body-md text-on-dark/65">
            {property.guests} guests · {property.bedrooms} bed
          </span>
          <span className="text-body-md font-semibold text-on-dark">
            ${property.pricePerNight}<span className="text-on-dark/45 font-normal"> /night</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
