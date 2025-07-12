
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Users, Briefcase } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isApplicantFlow = location.pathname === "/apply";
  const isClientFlow = location.pathname === "/talent";

  // Simplified nav links - exclude current page from navigation
  const getNavLinks = () => {
    if (isApplicantFlow) {
      return [
        { to: "/", label: "Home" },
      ];
    }
    if (isClientFlow) {
      return [
        { to: "/", label: "Home" },
      ];
    }
    return [
      { to: "/", label: "Home" },
      { to: "/talent", label: "Find Care" },
    ];
  };

  const navLinks = getNavLinks();

  // Dynamic styling based on user flow
  const getHeaderStyle = () => {
    if (isApplicantFlow) {
      return "bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10";
    }
    if (isClientFlow) {
      return "bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-emerald-500/10";
    }
    return "bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10";
  };

  // Simplified action buttons - only show cross-portal navigation when needed
  const getActionButtons = () => {
    if (isApplicantFlow || isClientFlow) {
      return null; // No additional action buttons needed in portals
    }
    return (
      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline" asChild className="hover-scale border-emerald-600 text-emerald-600 hover:bg-emerald-50">
          <Link to="/talent">
            <Heart className="mr-2 h-4 w-4" />
            Find Care
          </Link>
        </Button>
        <Button asChild className="hover-scale bg-primary hover:bg-primary/90">
          <Link to="/apply">
            <Briefcase className="mr-2 h-4 w-4" />
            Join Our Team
          </Link>
        </Button>
      </div>
    );
  };

  // Simplified mobile buttons - no duplicates
  const getMobileButtons = () => {
    if (isApplicantFlow || isClientFlow) {
      return null; // No additional mobile buttons needed in portals
    }
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" asChild>
          <Link to="/talent">Find Care</Link>
        </Button>
        <Button asChild>
          <Link to="/apply">Join Our Team</Link>
        </Button>
      </div>
    );
  };

  return (
    <header className={getHeaderStyle()}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg hover-scale">
          <Heart className={`h-6 w-6 ${isClientFlow ? 'text-emerald-600' : 'text-primary'}`} />
          <span className={`bg-gradient-to-r ${isClientFlow ? 'from-emerald-600 to-emerald-500' : 'from-primary to-primary/80'} bg-clip-text text-transparent`}>
            CareLink
          </span>
          {isApplicantFlow && (
            <span className="text-sm text-muted-foreground ml-2">Professional Portal</span>
          )}
          {isClientFlow && (
            <span className="text-sm text-muted-foreground ml-2">Family Portal</span>
          )}
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
        
        {getActionButtons()}
        
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
                   <Heart className={`h-6 w-6 ${isClientFlow ? 'text-emerald-600' : 'text-primary'}`} />
                   <span className={`bg-gradient-to-r ${isClientFlow ? 'from-emerald-600 to-emerald-500' : 'from-primary to-primary/80'} bg-clip-text text-transparent`}>
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
                {getMobileButtons()}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
