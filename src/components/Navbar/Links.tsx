"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";

const Links = () => {
  const pathname = usePathname();

  const linkList = [
    { href: "/dress", name: "Dress", active: pathname == "/dress" },
    { href: "/shirt", name: "Shirt", active: pathname == "/shirt" },
    { href: "/pants", name: "Pants", active: pathname == "/pants" },
    { href: "/suit", name: "Suit", active: pathname == "/suit" },
    { href: "/coat", name: "coat", active: pathname == "/coat" },
  ];
  return (
    <div className="bg-secondary/60 w-full z-30">
      <Container>
        <nav className="flex py-3 gap-5 justify-center">
          {linkList.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.href}
                className={cn(
                  "text-secondary-foreground/75 hover:text-secondary-foreground/90 transition-colors",
                  link.active ? "text-secondary-foreground font-bold" : ""
                )}
              >
                {" "}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Links;
