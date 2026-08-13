import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/store-data";
import { cn } from "@/lib/utils";

function SearchField({ id }: { id: string }) {
  return (
    <form action="/search" role="search" className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        name="q"
        type="search"
        placeholder="Search gloves, wraps, pads, brands…"
        className="h-11 w-full rounded-md border border-input bg-surface pl-4 pr-12 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1 top-1 grid h-9 w-10 place-items-center rounded-md bg-primary text-primary-foreground"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-store grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3 md:gap-6">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="/" className="shrink-0 leading-none">
            <span className="block font-display text-xl leading-none md:text-2xl">Ironclad</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.34em] text-primary">
              Fight Co.
            </span>
          </a>
        </div>

        <div className="hidden min-w-0 md:block">
          <SearchField id="site-search" />
        </div>
        <div className="min-w-0 md:hidden" />

        <nav aria-label="Account and cart" className="flex shrink-0 items-center gap-1">
          <a
            href="/account"
            aria-label="Account"
            className="grid h-10 w-10 place-items-center rounded-md hover:bg-surface-2"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="/wishlist"
            aria-label="Wishlist"
            className="hidden h-10 w-10 place-items-center rounded-md hover:bg-surface-2 sm:grid"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="/cart"
            aria-label="Cart, 0 items"
            className="relative grid h-10 w-10 place-items-center rounded-md hover:bg-surface-2"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </a>
        </nav>
      </div>

      <div className="container-store pb-3 md:hidden">
        <SearchField id="mobile-search" />
      </div>

      {/* Desktop category navigation with mega menu */}
      <nav aria-label="Product categories" className="hidden border-t border-border lg:block">
        <ul className="container-store flex items-stretch justify-between">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="group relative"
              onMouseEnter={() => setOpenGroup(item.name)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <a
                href={item.href}
                className={cn(
                  "flex h-11 items-center gap-1 whitespace-nowrap px-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-primary",
                  item.name === "Sale" && "text-primary",
                )}
              >
                {item.name}
                {item.children ? <ChevronDown className="h-3 w-3" aria-hidden="true" /> : null}
              </a>
              {item.children && openGroup === item.name ? (
                <div className="absolute left-0 top-full z-50 min-w-56 rounded-md border border-border bg-surface p-2 shadow-lift">
                  <ul>
                    {item.children.map((child) => (
                      <li key={child}>
                        <a
                          href={`${item.href}/${child.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                          className="block rounded-sm px-3 py-2 text-sm hover:bg-surface-2 hover:text-primary"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70"
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col border-r border-border bg-background">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <span className="font-display text-lg">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-md border border-border"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto p-2">
              {navigation.map((item) => (
                <li key={item.name} className="border-b border-border/60">
                  <a
                    href={item.href}
                    className={cn(
                      "block px-3 py-4 text-sm font-bold uppercase tracking-[0.12em]",
                      item.name === "Sale" && "text-primary",
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
