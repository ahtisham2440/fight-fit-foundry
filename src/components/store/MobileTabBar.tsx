import { Search, LayoutGrid, User, ShoppingBag } from "lucide-react";

const tabs = [
  { icon: Search, label: "Search", href: "/search" },
  { icon: LayoutGrid, label: "Categories", href: "#shop-by-category" },
  { icon: User, label: "Account", href: "/account" },
  { icon: ShoppingBag, label: "Cart", href: "/cart" },
];

export function MobileTabBar() {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex h-16 flex-col items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
