import Link from "next/link";
import Image from "next/image";
import { Download, Gift, Wallet } from "lucide-react";

export default function AppCard({ app, index }) {
  return (
    <div className="relative">
      {/* Index Number */}
      {typeof index === "number" && (
        <div className="app-index">{index+1}</div>
      )}
 
      <Link href={`/${app.slug}`} className="block app-list-card group px-2 py-3">
        {/* App Icon */}
        <div className="app-icon-wrapper">
          <Image
            src={app.icon}
            alt={`${app.name} app icon`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        {/* App Info */}
        <div className="app-info">
          <h3 className="app-name">{app.name}</h3>
          <div className="app-bonus">
            <Gift className="w-3.5 h-3.5" />
            <span>Bonus Upto {app.bonus}</span>
          </div>
          <div className="app-withdraw">
            <Wallet className="w-3.5 h-3.5" />
            <span>Min. Withdraw {app.minWithdrawal}</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="btn-download">
          <Download className="w-4 h-4" />
          <span className="inline">Download</span>
        </div>
      </Link>
    </div>
  );
}
