import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Автопарк", href: "#fleet" },
  { label: "Аренда", href: "#rental" },
  { label: "Водителям", href: "#drivers" },
  { label: "Услуги", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  scrollTo: (href: string) => void;
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScrollTo = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-taxi-darker/95 backdrop-blur-xl border-b border-taxi-border shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-neon-yellow rounded-lg flex items-center justify-center animate-glow-pulse">
            <Icon name="Car" size={20} className="text-taxi-dark" />
          </div>
          <span className="font-oswald font-bold text-2xl text-white tracking-widest">
            PRO<span className="neon-text">TAXI</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className="px-3 py-2 text-sm font-golos text-gray-300 hover:text-neon-yellow transition-colors duration-200 rounded-md hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="neon-btn px-5 py-2.5 rounded-lg text-sm font-oswald tracking-wider hidden lg:flex items-center gap-2"
          onClick={() => handleScrollTo("#contacts")}
        >
          <Icon name="Phone" size={16} />
          Связаться
        </button>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-taxi-darker border-t border-taxi-border px-4 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className="text-left px-3 py-3 text-gray-300 hover:text-neon-yellow border-b border-taxi-border/50 text-sm"
            >
              {link.label}
            </button>
          ))}
          <button
            className="neon-btn mt-2 py-3 rounded-lg font-oswald tracking-wider"
            onClick={() => handleScrollTo("#contacts")}
          >
            Оставить заявку
          </button>
        </div>
      )}
    </nav>
  );
}

export { NAV_LINKS };
