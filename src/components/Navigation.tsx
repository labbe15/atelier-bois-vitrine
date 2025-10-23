import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Hammer, Home, Frame, LayoutGrid, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Configuration centralisée des menus
const MENU_CONFIG = {
  structure: [
    { label: "Maison ossature bois", path: "/structure/ossature-bois" },
    { label: "Charpente", path: "/structure/charpente" },
    { label: "Pergola", path: "/structure/pergola" },
    { label: "Terrasses", path: "/structure/terrasses" },
    { label: "Carport", path: "/structure/carport" },
  ],
  menuiserieInterieur: [
    { label: "Escaliers", path: "/menuiserie-interieur/escaliers" },
    { label: "Bibliothèques", path: "/menuiserie-interieur/bibliotheques" },
    { label: "Tables", path: "/menuiserie-interieur/tables" },
    { label: "Sols", path: "/menuiserie-interieur/sols" },
    { label: "Portes de communication", path: "/menuiserie-interieur/portes-communication" },
    { label: "Mobilier sur mesure", path: "/menuiserie-interieur/mobilier" },
  ],
  menuiserieExterieur: [
    { label: "Fenêtres", path: "/menuiserie-exterieur/fenetres" },
    { label: "Volets", path: "/menuiserie-exterieur/volets" },
    { label: "Portes d'entrée", path: "/menuiserie-exterieur/portes-entree" },
    { label: "Portes de garage", path: "/menuiserie-exterieur/portes-garage" },
    { label: "Portails", path: "/menuiserie-exterieur/portails" },
    { label: "Clôtures", path: "/menuiserie-exterieur/clotures" },
  ],
  agencement: [
    { label: "Dressing", path: "/agencement/dressing" },
    { label: "Cuisines", path: "/agencement/cuisines" },
    { label: "Aménagement sur mesure", path: "/agencement/amenagement" },
  ],
  extension: [
    { label: "Extension ossature bois", path: "/extension/ossature-bois" },
    { label: "Garage", path: "/extension/garage" },
    { label: "Surélévation", path: "/extension/surelevation" },
    { label: "Véranda", path: "/extension/veranda" },
    { label: "Pool House", path: "/extension/pool-house" },
    { label: "Abri de jardin", path: "/extension/abri-jardin" },
  ],
} as const;

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Header transparent uniquement sur la page d'accueil
  const isHomePage = location.pathname === "/";

  // Bloque le scroll de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Scroll en haut à chaque changement de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileMenuOpen(false); // Ferme aussi le menu mobile
  }, [location.pathname]);

  // Ferme le menu mobile
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Classes CSS optimisées avec useMemo
  const navClasses = useMemo(
    () =>
      `top-0 z-40 w-full transition-all duration-500 ease-in-out ${
        isHomePage
          ? "absolute bg-transparent"
          : "sticky border-b border-border/40 bg-background/95 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/60"
      }`,
    [isHomePage]
  );

  const linkClasses = (isActive = false) =>
    `text-sm font-medium transition-all duration-200 relative ${
      isHomePage
        ? "text-white hover:text-white/80"
        : isActive
        ? "text-primary"
        : "text-foreground/80 hover:text-primary"
    } ${isActive ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : ""}`;

  // Composant DropdownMenu réutilisable
  const NavDropdown = ({
    label,
    items,
    icon: Icon,
  }: {
    label: string;
    items: readonly { label: string; path: string }[];
    icon?: React.ComponentType<{ className?: string }>;
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
          isHomePage
            ? "text-white hover:text-white/80"
            : "text-foreground/80 hover:text-primary"
        }`}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {label} <ChevronDown className="h-4 w-4 transition-transform duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]">
        {items.map((item) => (
          <DropdownMenuItem key={item.path} asChild>
            <Link
              to={item.path}
              className="cursor-pointer hover:bg-accent transition-colors"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo avec animation hover */}
            <Link
              to="/"
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
            >
              <span
                className={`text-2xl font-heading transition-colors ${
                  isHomePage ? "text-white" : "text-primary"
                }`}
              >
                L'Atelier du Volcan
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={linkClasses(location.pathname === "/")}
              >
                Accueil
              </Link>

              <NavDropdown label="Structure" items={MENU_CONFIG.structure} icon={Hammer} />
              <NavDropdown label="Menuiserie Intérieure" items={MENU_CONFIG.menuiserieInterieur} icon={Layers} />
              <NavDropdown label="Menuiserie Extérieure" items={MENU_CONFIG.menuiserieExterieur} icon={Frame} />
              <NavDropdown label="Agencement" items={MENU_CONFIG.agencement} icon={LayoutGrid} />
              <NavDropdown label="Extension" items={MENU_CONFIG.extension} icon={Home} />

              <Link
                to="/realisations"
                className={linkClasses(location.pathname === "/realisations")}
              >
                Réalisations
              </Link>
              <Link
                to="/contact"
                className={linkClasses(location.pathname === "/contact")}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button avec animation */}
            <button
              className="lg:hidden transition-transform duration-200 active:scale-90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X
                  className={`h-7 w-7 transition-colors ${
                    isHomePage ? "text-white" : "text-primary"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-7 w-7 transition-colors ${
                    isHomePage ? "text-white" : "text-primary"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Fullscreen avec animations améliorées */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-md text-white animate-in fade-in duration-300">
          <div className="h-full overflow-y-auto overscroll-contain">
            <div className="container mx-auto p-6">
              {/* Header du menu */}
              <div className="flex justify-between items-center mb-8 animate-in slide-in-from-top duration-300">
                <h2 className="text-2xl font-heading">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="transition-transform duration-200 active:scale-90"
                  aria-label="Fermer le menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Navigation mobile */}
              <nav className="flex flex-col gap-6 text-lg animate-in slide-in-from-bottom duration-500">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="hover:translate-x-2 transition-transform duration-200"
                >
                  Accueil
                </Link>

                {/* Sections avec sous-menus */}
                {Object.entries(MENU_CONFIG).map(([key, items]) => (
                  <div key={key} className="space-y-2">
                    <h3 className="text-sm uppercase text-white/70 font-semibold tracking-wider">
                      {key === "structure"
                        ? "Structure"
                        : key === "menuiserieInterieur"
                        ? "Menuiserie Intérieure"
                        : key === "menuiserieExterieur"
                        ? "Menuiserie Extérieure"
                        : key === "agencement"
                        ? "Agencement"
                        : "Extension"}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMobileMenu}
                          className="pl-4 hover:translate-x-2 hover:text-white/90 transition-all duration-200 border-l-2 border-white/20 hover:border-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <Link
                  to="/realisations"
                  onClick={closeMobileMenu}
                  className="hover:translate-x-2 transition-transform duration-200 mt-4"
                >
                  Réalisations
                </Link>
                <Link
                  to="/a-propos"
                  onClick={closeMobileMenu}
                  className="hover:translate-x-2 transition-transform duration-200"
                >
                  À propos
                </Link>
                <Link
                  to="/avis"
                  onClick={closeMobileMenu}
                  className="hover:translate-x-2 transition-transform duration-200"
                >
                  Avis
                </Link>

                <Button
                  asChild
                  className="w-full mt-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg"
                  size="lg"
                >
                  <Link to="/contact" onClick={closeMobileMenu}>
                    Contactez-nous
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
