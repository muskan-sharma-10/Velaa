import Image from "next/image";
import Link from "next/link";

interface NavDropdownCardProps {
  links: { label: string; href: string }[];
}

export default function NavDropdownCard({ links }: NavDropdownCardProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[350px] bg-white shadow-lg rounded-2xl p-4 flex items-center gap-6 transition-all duration-200">
      {/* Static Image */}
      <div className="w-[160px] h-[225px] flex-shrink-0 flex items-center justify-center">
        <Image
          src="/images/navbarcarddropdown.avif"
          alt="Category"
          width={160}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>

      {/* Links */}
      <div className="flex flex-col w-[160px] h-[225px]  gap-6 text-[15px] font-medium text-black">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href as any}
            className="hover:text-gray-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
