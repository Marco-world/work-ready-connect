
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart } from "lucide-react";

const Header = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/talent", label: "Find Caregivers" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg hover-scale">
          <Heart className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            CareLink
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-muted-foreground hover:text-foreground transition-colors story-link ${isActive ? "text-foreground font-semibold" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild className="hover-scale">
            <Link to="/apply">Join Our Team</Link>
          </Button>
          <Button asChild className="hover-scale">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                   <Heart className="h-6 w-6 text-primary" />
                   <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                     CareLink
                   </span>
                </Link>
                <nav className="flex flex-col gap-4">
                 {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `text-muted-foreground hover:text-foreground transition-colors ${isActive ? "text-foreground font-semibold" : ""}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                 <div className="flex flex-col gap-4">
                    <Button variant="outline" asChild>
                        <Link to="/apply">Join Our Team</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/apply">Apply Now</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
