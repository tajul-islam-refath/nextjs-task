"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, classname, children }) {
  const pathName = usePathname();
  const active = href === `${pathName}`;
  console.log(classname);
  return (
    <Link className={`${classname} ${active ? "active" : ""}`} href={href}>
      {children}
    </Link>
  );
}
