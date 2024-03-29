"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const linkList = [
  { href: "/dress", name: "Dress" },
  { href: "/shirt", name: "Shirt" },
  { href: "/pants", name: "Pants" },
  { href: "/suit", name: "Suit" },
  { href: "/coat", name: "coat" },
];

const DropdownPhone = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-[70vh] w-[300px] flex justify-center mt-20">
          <DropdownMenuLabel>Our Collections</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {linkList.map((link) => (
            <DropdownMenuItem>
              <Link
                href={link.href}
                key={link.href}
                className="font-bold text-primary text-2xl"
              >
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownPhone;
