import { Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "./navbarConfig";

import { brandConfig, searchConfig } from "@/data/Navbar/navbarData";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-(--color-white) py-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 tablet:px-6 desktop-sm:px-10">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border-light) bg-(--color-brand-light)">
            <span className="text-2xl font-bold text-(--color-brand-primary)">
              {brandConfig.logo}
            </span>
          </div>

          <h1 className="text-[22px] font-semibold text-(--color-text-main)">
            {brandConfig.title}
          </h1>
        </Link>

        {/* Search */}
        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-xl items-center gap-2.5 rounded-full bg-(--color-surface) px-4 py-2.5">
            <Search className="size-4 text-(--color-text-muted)" />

            <input
              type="text"
              placeholder={searchConfig.placeholder}
              className="w-full bg-transparent text-sm font-normal text-(--color-text-main) outline-none placeholder:text-(--color-text-muted)"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-7">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-1.5 text-[15px] font-medium transition-all duration-200

                ${
                  isActive
                    ? "text-(--color-brand-primary)"
                    : "text-(--color-text-main) hover:text-(--color-brand-primary)"
                }
                `
              }
            >
              <item.icon className="size-4.5" />

              {item.showLabel && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
