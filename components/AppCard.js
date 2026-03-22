import Link from "next/link";
import Image from "next/image";
import { Star, StarHalf, Download } from "lucide-react";
import { renderStars } from "@/lib/helpers";

export default function AppCard({ app }) {
  const { full, half, empty } = renderStars(app.rating);

  return (
    <Link href={`/${app.slug}`} className="block card-elevated p-5 group relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 right-3 flex gap-1.5 z-10">
        {app.isNew && <span className="badge badge-new">NEW</span>}
        {app.isHot && <span className="badge badge-hot">HOT</span>}
        {app.isTrending && <span className="badge badge-trending">TRENDING</span>}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center pt-2">
        {/* App Icon */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-bg to-bg-alt overflow-hidden mb-4 border border-card-border group-hover:border-primary/30 transition-colors flex items-center justify-center shadow-sm">
          <Image
            src={app.icon}
            alt={`${app.name} app icon`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        {/* App Name */}
        <h3 className="text-text-primary text-base font-bold mb-2 group-hover:text-primary transition-colors">
          {app.name}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-0.5 mb-3">
          {Array.from({ length: full }).map((_, i) => (
            <Star key={`f-${i}`} className="w-3.5 h-3.5 fill-accent text-accent" />
          ))}
          {half === 1 && <StarHalf className="w-3.5 h-3.5 fill-accent text-accent" />}
          {Array.from({ length: empty }).map((_, i) => (
            <Star key={`e-${i}`} className="w-3.5 h-3.5 text-card-border" />
          ))}
          <span className="text-text-muted text-xs ml-1">({app.rating})</span>
        </div>

        {/* Info */}
        <div className="space-y-1.5 mb-4 w-full">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted text-xs">Sign Up Bonus</span>
            <span className="text-primary font-bold text-sm">{app.bonus}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted text-xs">Min. Withdrawal</span>
            <span className="text-text-primary font-medium text-sm">{app.minWithdrawal}</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="btn-primary w-full text-sm">
          <Download className="w-4 h-4" />
          Download
        </div>
      </div>
    </Link>
  );
}
