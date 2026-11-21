import Image from "next/image";
import Link from "next/link";

export default function SpaLogo({ className, sizes, preload = false }) {
  return (
    <Link href="/" className={className} aria-label="Royal Prime Spa home">
      <Image
        src="/images/logo/1.png"
        alt="Royal Prime Spa"
        width={2431}
        height={500}
        sizes={sizes}
        preload={preload}
      />
    </Link>
  );
}
