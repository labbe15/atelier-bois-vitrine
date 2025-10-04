import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ Header transparent uniquement sur la page d'accueil
  const transparent = location.pathname === "/";

  // ✅ Bloque le scroll de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  // ✅ Données des menus
  const structureItems = [
    { label: "Charpente", path: "/structure/charpente" },
    { label: "Ossature bois", path: "/structure/ossature-bois" },
    { label: "Pergola", path: "/structure/pergola" },
    { label: "Terrasses", path: "/structure/terrasses" },
    { label: "Carport", path: "/structure/carport" },
  ];

  const menuiserieItems = [
    { label: "Intérieur", path: "/menuiserie/interieur" },
    { label: "Extérieur", path: "/menuiserie/exterieur" },
    { label: "Escaliers", path: "/menuiserie/escaliers" },
  ];

  const agencementItems = [
    { label: "Sols", path: "/agencement/sols" },
    { label: "Dressing", path: "/agencement/dressing" },
    { label: "Cuisines", path: "/agencement/cuisines" },
    { label: "Mobilier sur mesure", path: "/agencement/mobilier" },
  ];

  const extensionItems = [
    { label: "Extension ossature bois", path: "/extension/ossature-bois" },
    { label: "Surélévation", path: "/extension/surelevation" },
  ];

  const navClasses = `top-0 z-40 w-full transition-all duration-300 ${
    transparent
      ? "absolute bg-transparent"
      : "sticky border-b border-border/40 bg-background/95 backdrop-blur shadow-md supports-[backdrop-filter]:bg-background/60"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span
              className={`text-2xl font-heading ${
                transparent ? "text-white" : "text-primary"
              }`}
            >
              L'Atelier du Volcan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white hover:text-white/80"
                  : "hover:text-primary"
              }`}
            >
              Accueil
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "hover:text-primary"
                }`}
              >
                Structure <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {structureItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "hover:text-primary"
                }`}
              >
                Menuiserie <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menuiserieItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "hover:text-primary"
                }`}
              >
                Agencement <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {agencementItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "hover:text-primary"
                }`}
              >
                Extension Bois <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {extensionItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/realisations"
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white hover:text-white/80"
                  : "hover:text-primary"
              }`}
            >
              Réalisations
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                transparent
                  ? "text-white hover:text-white/80"
                  : "hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X
                className={`h-7 w-7 ${
                  transparent ? "text-white" : "text-primary"
                }`}
              />
            ) : (
              <Menu
                className={`h-7 w-7 ${
                  transparent ? "text-white" : "text-primary"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* ✅ Menu Mobile Fullscreen */}
      {mobileMenuOpen && (
        <div className="bg-primary/95 backdrop-blur-sm text-white p-6 animate-fadeIn overflow-y-auto overscroll-contain fixed inset-0 z-[9999]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-heading">Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-lg">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </Link>

            <div>
              <h3 className="text-sm uppercase text-white/70">Structure</h3>
              {structureItems.map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-4 hover:text-white/80"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-sm uppercase text-white/70">Menuiserie</h3>
              {menuiserieItems.map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-4 hover:text-white/80"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-sm uppercase text-white/70">Agencement</h3>
              {agencementItems.map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-4 hover:text-white/80"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="text-sm uppercase text-white/70">Extension Bois</h3>
              {extensionItems.map((i) => (
                <Link
                  key={i.path}
                  to={i.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pl-4 hover:text-white/80"
                >
                  {i.label}
                </Link>
              ))}
            </div>

            <Link to="/realisations" onClick={() => setMobileMenuOpen(false)}>
              Réalisations
            </Link>
            <Link to="/a-propos" onClick={() => setMobileMenuOpen(false)}>
              À propos
            </Link>
            <Link to="/avis" onClick={() => setMobileMenuOpen(false)}>
              Avis
            </Link>

            <Button
              asChild
              className="w-full mt-6 bg-white text-primary hover:bg-white/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;